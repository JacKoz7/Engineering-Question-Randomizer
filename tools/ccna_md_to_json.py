#!/usr/bin/env python3
"""Convert the CCNA Security markdown (pytania.md) into the quiz app's
options-based JSON format. Category = the `## ` section title (== spis treści).

Usage:
  python3 tools/ccna_md_to_json.py
"""
import glob
import json
import re
import sys

# resolve via glob — the source folder name contains "ń", whose on-disk Unicode
# normalization (NFD on macOS) does not byte-match a hardcoded NFC string
SRC = glob.glob("data/sem1/*/pytania.md")[0]
OUT = "data/sem1/bezpieczenstwo-sieci/pytania.json"
# images live next to the JSON; store paths relative to the site root so the
# app can use them directly as <img src> from index.html
IMG_BASE = "data/sem1/bezpieczenstwo-sieci/"

CHECK = "✅"   # ✅ correct
CROSS = "❌"   # ❌ wrong
PIC = "\U0001f5bc"  # 🖼️


def clean(text: str) -> str:
    """Strip markdown emphasis / code ticks / picture emoji from a fragment."""
    text = text.replace(PIC, " ").replace("️", "")  # 🖼 + variation selector
    text = text.replace("**", "")
    text = text.replace("`", "")
    # drop remaining lone emphasis asterisks
    text = text.replace("*", "")
    return re.sub(r"\s+", " ", text).strip()


def main():
    with open(SRC, encoding="utf-8") as fh:
        lines = fh.read().splitlines()

    questions = []
    category = None
    in_toc = False
    cur = None  # current question dict being built

    def flush():
        nonlocal cur
        if cur and cur["options"]:
            # assign a/b/c labels in source order
            for i, opt in enumerate(cur["options"]):
                opt_label = chr(ord("a") + i)
                opt_obj = {"label": opt_label, "text": opt["text"], "correct": opt["correct"]}
                cur["options"][i] = opt_obj
            q = {
                "question": cur["question"],
                "options": cur["options"],
                "category": cur["category"],
            }
            if cur.get("images"):
                q["images"] = cur["images"]
            if cur.get("details"):
                q["details"] = cur["details"]
            questions.append(q)
        cur = None

    for raw in lines:
        line = raw.rstrip()

        # section header → category (skip the "Spis treści" header itself)
        m = re.match(r"^##\s+(.*)$", line)
        if m and not line.startswith("###"):
            flush()
            title = m.group(1).strip()
            if title.lower().startswith("spis treści"):
                in_toc = True
                category = None
            else:
                in_toc = False
                category = title
            continue

        if in_toc:
            continue

        # question heading: ### <id> <text>  (id e.g. 1.1, 3-6.24, 7-10.9, R.6)
        m = re.match(r"^###\s+\S+\s+(.+)$", line)
        if m:
            flush()
            cur = {
                "question": clean(m.group(1)),
                "options": [],
                "category": category,
                "images": [],
                "details": "",
            }
            continue

        if cur is None:
            continue

        # image: ![alt](obrazy_ccna/file.jpg)
        img = re.search(r"!\[[^\]]*\]\((obrazy_ccna/[^)]+)\)", line)
        if img:
            cur["images"].append(IMG_BASE + img.group(1))
            continue

        stripped = line.lstrip()

        # option bullet
        if stripped.startswith("- " + CHECK) or stripped.startswith("- " + CROSS):
            correct = stripped.startswith("- " + CHECK)
            body = stripped[1:].strip()  # remove leading "-"
            body = body.lstrip(CHECK + CROSS).strip()
            text = clean(body)
            if text:
                cur["options"].append({"text": text, "correct": correct})
            continue

        # EN original → details
        if stripped.startswith("*EN") or stripped.startswith("*EN:*"):
            cur["details"] = clean(stripped)
            continue

    flush()

    with open(OUT, "w", encoding="utf-8") as fh:
        json.dump(questions, fh, ensure_ascii=False, indent=2)
        fh.write("\n")

    # summary
    from collections import Counter, defaultdict
    by_cat = Counter(q["category"] for q in questions)
    print(f"Wrote {len(questions)} questions to {OUT}\n")
    for cat, n in by_cat.items():
        print(f"  {n:>3}  {cat}")
    # flag questions with all-correct or no-correct (suspicious)
    weird = [q for q in questions if not any(o["correct"] for o in q["options"])]
    allc = [q for q in questions if all(o["correct"] for o in q["options"]) and len(q["options"]) > 1]
    print(f"\n  no-correct: {len(weird)}   all-correct(>1): {len(allc)}")
    for q in weird:
        print("   NO-CORRECT:", q["question"][:70])
    for q in allc:
        print("   ALL-CORRECT:", q["question"][:70])


if __name__ == "__main__":
    main()
