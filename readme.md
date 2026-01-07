# Exam Question Randomizer

Simple web app for randomly selecting exam questions with flashcard functionality.

## Usage

1. Open the page https://jackoz7.github.io/Engineering-Question-Randomizer/
2. Click "Losuj pytania"
3. App randomly selects 3 questions from the pool
4. Click on a card to flip and reveal the answer

## Converter Tool

`converter.py` - Converts tab-separated text files (`pytania.txt`) into JSON format with question/answer structure. Run with `python3 converter.py` to generate `pytania.json` template.

## Structure

- `index.html` - interface
- `app.js` - application logic
- `styles.css` - styling
- `pytania.json` - questions file (format: JSON with question, answer, details)
- `converter.py` - text to JSON converter