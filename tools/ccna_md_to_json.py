#!/usr/bin/env python3
"""Convert the CCNA Security markdown into the quiz app's options-based JSON.

Two sources are merged:
  * pytania.md             — lecture-based questions; category = `## ` section.
  * potwierdzone-pytania.md — exam-confirmed questions; category = "Potwierdzone".

Confirmed questions that duplicate a lecture question are NOT added twice — the
"Potwierdzone" category is appended to the existing question instead. Which
confirmed questions are duplicates is a curated decision (DUP_MARKERS); the
matching existing question is then found by fuzzy question-text similarity.

Usage:
  python3 tools/ccna_md_to_json.py
"""
import glob
import json
import re
import unicodedata
from collections import Counter
from difflib import SequenceMatcher

SRC = glob.glob("data/sem1/*/pytania.md")[0]
CONFIRMED = glob.glob("data/sem1/*/potwierdzone-pytania.md")
OUT = "data/sem1/bezpieczenstwo-sieci/pytania.json"
# images live next to the JSON; store paths relative to the site root so the
# app can use them directly as <img src> from index.html
IMG_BASE = "data/sem1/bezpieczenstwo-sieci/"

CONFIRMED_CAT = "Potwierdzone"

CHECK = "✅"   # ✅ correct
CROSS = "❌"   # ❌ wrong
PIC = "\U0001f5bc"  # 🖼️

# Curated list: distinctive normalized fragments of confirmed questions that are
# duplicates of an existing lecture question (verified by hand). For these, the
# "Potwierdzone" category is merged into the matching existing question.
DUP_MARKERS = [
    "powodu wdrozonych kontroli uzytkownik",
    "dwie praktyki sa zwiazane z zabezpieczaniem funkcji",
    "udaremnic atak dos powodujacy przepelnienie tablic",
    "rodzajowi ataku z przeskokiem vlan mozna zapobiec",
    "jakie sa trzy techniki ograniczania atakow vlan",
    "korzysci w zakresie bezpieczenstwa daje wlaczenie bpdu",
    "ktorych portach przelacznika nalezy wlaczyc portfast",
    "trzy stwierdzenia opisuja ramy protokolu ipsec",
    "zestaw transformacji transform set zapewnia najlepsza ochrone",
    "rozwiazanie cisco vpn zapewnia ograniczony dostep do wewnetrznych zasobow",
    "dwa stwierdzenia o standardowych acl asa sa prawdziwe",
    "jaki jest cel testow penetracyjnych sieci",
]


def clean(text: str) -> str:
    """Strip markdown emphasis / code ticks / picture emoji from a fragment."""
    text = text.replace(PIC, " ").replace("️", "")  # 🖼 + variation selector
    text = text.replace("**", "")
    text = text.replace("`", "")
    text = text.replace("*", "")
    return re.sub(r"\s+", " ", text).strip()


def norm(text: str) -> str:
    """Normalize for fuzzy matching: lowercase, drop diacritics & punctuation."""
    text = clean(text).lower().replace("ł", "l")  # ł doesn't NFD-decompose
    text = "".join(c for c in unicodedata.normalize("NFD", text)
                   if unicodedata.category(c) != "Mn")
    return re.sub(r"\s+", " ", re.sub(r"[^a-z0-9 ]", " ", text)).strip()


def label_options(options):
    """Assign a/b/c… labels in source order."""
    return [{"label": chr(ord("a") + i), "text": o["text"], "correct": o["correct"]}
            for i, o in enumerate(options)]


def parse_main():
    """Parse pytania.md → list of question dicts (category = section title)."""
    with open(SRC, encoding="utf-8") as fh:
        lines = fh.read().splitlines()

    questions = []
    category = None
    in_toc = False
    cur = None

    def flush():
        nonlocal cur
        if cur and cur["options"]:
            q = {
                "question": cur["question"],
                "options": label_options(cur["options"]),
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

        m = re.match(r"^##\s+(.*)$", line)
        if m and not line.startswith("###"):
            flush()
            title = m.group(1).strip()
            if title.lower().startswith("spis treści"):
                in_toc, category = True, None
            else:
                in_toc, category = False, title
            continue

        if in_toc:
            continue

        m = re.match(r"^###\s+\S+\s+(.+)$", line)
        if m:
            flush()
            cur = {"question": clean(m.group(1)), "options": [],
                   "category": category, "images": [], "details": ""}
            continue

        if cur is None:
            continue

        img = re.search(r"!\[[^\]]*\]\((obrazy_ccna/[^)]+)\)", line)
        if img:
            cur["images"].append(IMG_BASE + img.group(1))
            continue

        stripped = line.lstrip()
        if stripped.startswith("- " + CHECK) or stripped.startswith("- " + CROSS):
            correct = stripped.startswith("- " + CHECK)
            body = stripped[1:].strip().lstrip(CHECK + CROSS).strip()
            text = clean(body)
            if text:
                cur["options"].append({"text": text, "correct": correct})
            continue

        if stripped.startswith("*EN"):
            cur["details"] = clean(stripped)

    flush()
    return questions


def parse_confirmed(path):
    """Parse potwierdzone-pytania.md. Options may be `·`-separated and several
    may share a line, with ✅/❌ markers switching correctness mid-line."""
    questions = []
    cur = None

    def flush():
        nonlocal cur
        if cur and cur["options"]:
            questions.append(cur)
        cur = None

    for raw in open(path, encoding="utf-8"):
        line = raw.rstrip()
        if line.startswith("### "):
            flush()
            cur = {"question": clean(line[4:]), "options": [], "details": ""}
            continue
        if cur is None:
            continue
        stripped = line.lstrip()
        if stripped.startswith("- " + CHECK) or stripped.startswith("- " + CROSS):
            parts = re.split(r"([✅❌])", stripped[1:].strip())
            for i in range(1, len(parts), 2):
                correct = parts[i] == CHECK
                chunk = parts[i + 1] if i + 1 < len(parts) else ""
                for piece in re.split(r"\s*·\s*", chunk):
                    text = clean(piece)
                    if text:
                        cur["options"].append({"text": text, "correct": correct})
            continue
        if stripped.startswith("[w wykładzie"):
            cur["details"] = clean(stripped.strip("[]"))

    flush()
    return questions


def add_category(q, cat):
    cats = [c.strip() for c in q["category"].split(",")] if q.get("category") else []
    if cat not in cats:
        cats.append(cat)
    q["category"] = ", ".join(cats)


def main():
    questions = parse_main()
    conf = parse_confirmed(CONFIRMED[0]) if CONFIRMED else []

    merged, added, warnings = 0, 0, []
    for cq in conf:
        nq = norm(cq["question"])
        is_dup = any(marker in nq for marker in DUP_MARKERS)
        if is_dup:
            # find the existing question with the highest text similarity
            best, ratio = None, 0.0
            for eq in questions:
                r = SequenceMatcher(None, nq, norm(eq["question"])).ratio()
                if r > ratio:
                    best, ratio = eq, r
            if best and ratio >= 0.4:
                add_category(best, CONFIRMED_CAT)
                merged += 1
            else:
                warnings.append(f"dup marker hit but no match (r={ratio:.2f}): "
                                f"{cq['question'][:60]}")
        else:
            questions.append({
                "question": cq["question"],
                "options": label_options(cq["options"]),
                "category": CONFIRMED_CAT,
                **({"details": cq["details"]} if cq.get("details") else {}),
            })
            added += 1

    with open(OUT, "w", encoding="utf-8") as fh:
        json.dump(questions, fh, ensure_ascii=False, indent=2)
        fh.write("\n")

    by_cat = Counter(c for q in questions
                     for c in (q["category"].split(", ") if q.get("category") else ["?"]))
    print(f"Wrote {len(questions)} questions to {OUT}")
    print(f"  confirmed: merged into existing = {merged}, added new = {added}\n")
    for cat, n in sorted(by_cat.items()):
        print(f"  {n:>3}  {cat}")

    weird = [q for q in questions if not any(o["correct"] for o in q["options"])]
    allc = [q for q in questions
            if len(q["options"]) > 1 and all(o["correct"] for o in q["options"])]
    print(f"\n  no-correct: {len(weird)}   all-correct(>1): {len(allc)}")
    for q in weird:
        print("   NO-CORRECT:", q["question"][:70])
    for q in allc:
        print("   ALL-CORRECT:", q["question"][:70])
    for w in warnings:
        print("   WARN:", w)


if __name__ == "__main__":
    main()
