let allQuestions = [];

const questionCount = document.getElementById("questionCount");
const drawButton = document.getElementById("drawButton");
const questionsContainer = document.getElementById("questionsContainer");

window.addEventListener("DOMContentLoaded", async () => {
  await loadQuestionsFromFile();
});

async function loadQuestionsFromFile() {
  try {
    const response = await fetch("pytania.txt");
    const text = await response.text();

    parseQuestions(text);

    questionCount.textContent = allQuestions.length;
    drawButton.disabled = false;
  } catch (error) {
    console.error("Błąd:", error);
    alert("Nie można wczytać pliku z pytaniami.");
  }
}

function parseQuestions(text) {
  const lines = text.split("\n").filter((line) => line.trim() !== "");

  allQuestions = [];

  for (let line of lines) {
    const columns = line.split("\t");

    columns.forEach((question) => {
      const trimmed = question.trim();
      if (trimmed.length > 5) {
        allQuestions.push(trimmed);
      }
    });
  }
}

drawButton.addEventListener("click", () => {
  if (allQuestions.length < 3) {
    alert("Za mało pytań.");
    return;
  }

  const selectedQuestions = getRandomQuestions(3);
  displayQuestions(selectedQuestions);
});

function getRandomQuestions(count) {
  const shuffled = [...allQuestions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

function displayQuestions(questions) {
  questionsContainer.innerHTML = "";

  questions.forEach((question, index) => {
    const card = document.createElement("div");
    card.className = "question-card";
    card.style.animationDelay = `${index * 0.1}s`;

    card.innerHTML = `
            <h3>Pytanie ${index + 1}</h3>
            <p>${question}</p>
        `;

    questionsContainer.appendChild(card);
  });
}
