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
index.html      ← entry point (must stay at root for GitHub Pages)
src/
  app.js        ← all application logic
  styles.css    ← styling and animations
data/
  pytania.json  ← question database
  pytania.txt   ← raw source (tab-separated)
  categories.txt
tools/
  converter.py  ← converts pytania.txt → pytania.json template
```

**src/app.js** — All application logic:
- `loadQuestionsFromFile()` fetches `pytania.json` on startup
- `getQuestionPool()` applies active category filters + learn mode
- `getRandomQuestions()` draws 3 questions from the pool, respecting no-repeat state
- `displayQuestions()` renders flip-cards and wires up click handlers
- `renderCategories()` builds the filter UI dynamically from categories in the data
- `updateStats()` refreshes the header counters
- `toLearnQuestions` (a `Set`) is persisted to `localStorage` as `toLearnQuestions`

**pytania.json** — Array of question objects:
```json
{
  "question": "...",
  "answer": "...",
  "details": "...",   // optional, extended explanation
  "category": "Bazy danych"  // can be comma-separated for multi-category
}
```

Categories are free-text strings derived from the data itself — `renderCategories()` collects all unique values at runtime.

**tools/converter.py** — One-off utility to convert `pytania.txt` (tab-separated) into the JSON template. Run it when importing new questions from the raw text format.

## Adding or Editing Questions

Edit `pytania.json` directly. Each object requires `question` and `category`. `answer` and `details` are optional but expected by the UI. Multi-category assignment uses comma-separated values in the `category` field (e.g., `"Bezpieczeństwo informacji, komisja 4"`).
