# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A single-page web app for engineering exam preparation ("Obrona2026"). Deployed at `https://jackoz7.github.io/Engineering-Question-Randomizer/`. No build system, no dependencies — open `index.html` directly in a browser or serve locally.

## Running Locally

```bash
# Serve locally (required for fetch() to load pytania.json)
python3 -m http.server 8000
# Then open http://localhost:8000
```

Opening `index.html` directly via `file://` will fail because `fetch()` is blocked by CORS on `file://` origins.

## Architecture

```
index.html                         ← entry point (must stay at root for GitHub Pages)
src/
  app.js                           ← all application logic
  styles.css                       ← styling and animations
data/
  config.json                      ← menu structure — edit this to add sections/subjects
  obrona-inzynierka/pytania.json   ← question database for that section
  sem1/bezpieczenstwo-sieci.json   ← question database for that subject
  pytania.txt / categories.txt     ← raw source files (reference only)
tools/
  converter.py                     ← converts pytania.txt → pytania.json template
```

### Routing

Hash-based routing, no framework:
- `#` (empty) → menu view
- `#quiz/obrona-inzynierka` → loads `data/obrona-inzynierka/pytania.json`
- `#quiz/sem1/bezpieczenstwo-sieci` → loads `data/sem1/bezpieczenstwo-sieci.json`

### src/app.js

- `handleRoute()` — reads `location.hash`, calls `showMenu()` or `enterQuiz(path)`
- `enterQuiz(path)` — resets all state, loads data from `data/{path}/pytania.json`
- `renderMenu()` — builds the menu from `config.json` (accordion for semesters, direct link for obrona)
- `getQuestionPool()` — applies category filters + learn mode
- `toLearnQuestions` — scoped per dataset in localStorage: key `toLearn__{path}`

### data/config.json — Question object format

```json
{
  "question": "...",
  "answer": "...",
  "details": "...",   // optional extended explanation
  "category": "Bazy danych"  // comma-separated for multi-category
}
```

## Adding a New Subject

1. Create `data/semX/<subject-id>.json` with a JSON array of question objects (can be `[]` to start)
2. Add an entry to `data/config.json` under the appropriate semester's `subjects` array:
   ```json
   { "id": "<subject-id>", "title": "Nazwa przedmiotu" }
   ```

## Adding a New Section

Add to `data/config.json` `sections` array:
- `type: "direct"` + `dataPath` → single quiz (like Obrona)
- `type: "subjects"` + `subjects: []` → expandable accordion with subject list
- `comingSoon: true` → grayed out, non-clickable
