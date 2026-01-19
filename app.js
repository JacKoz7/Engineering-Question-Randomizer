let allQuestions = [];
let usedQuestions = [];
let noRepeatMode = false;

const questionCount = document.getElementById("questionCount");
const drawButton = document.getElementById("drawButton");
const questionsContainer = document.getElementById("questionsContainer");
const noRepeatCheckbox = document.getElementById("noRepeatCheckbox");

window.addEventListener("DOMContentLoaded", async () => {
  await loadQuestionsFromFile();
});

noRepeatCheckbox.addEventListener("change", (e) => {
  noRepeatMode = e.target.checked;
  if (!noRepeatMode) {
    usedQuestions = [];
  }
});

async function loadQuestionsFromFile() {
  try {
    const response = await fetch("pytania.json");
    allQuestions = await response.json();

    questionCount.textContent = allQuestions.length;
    drawButton.disabled = false;
  } catch (error) {
    console.error("Error:", error);
    alert("Cannot load questions file.");
  }
}

drawButton.addEventListener("click", () => {
  const availableQuestions = noRepeatMode
    ? allQuestions.filter((q) => !usedQuestions.includes(q))
    : allQuestions;

  if (availableQuestions.length < 3) {
    if (noRepeatMode && usedQuestions.length > 0) {
      alert("All questions used. Resetting pool.");
      usedQuestions = [];
      return;
    }
    alert("Not enough questions.");
    return;
  }

  const selectedQuestions = getRandomQuestions(availableQuestions, 3);

  if (noRepeatMode) {
    usedQuestions.push(...selectedQuestions);
  }

  displayQuestions(selectedQuestions);
});

function getRandomQuestions(pool, count) {
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

function displayQuestions(questions) {
  questionsContainer.innerHTML = "";

  questions.forEach((q, index) => {
    const card = document.createElement("div");
    card.className = "question-card";
    card.style.animationDelay = `${index * 0.1}s`;

    card.innerHTML = `
            <div class="card-inner">
                <div class="card-front">
                    <h3>Pytanie ${index + 1}</h3>
                    <div class="card-content">
                        <p>${q.question}</p>
                    </div>
                    <span class="flip-hint">Kliknij aby zobaczyć odpowiedź</span>
                </div>
                <div class="card-back">
                    <h3>Odpowiedź</h3>
                    <div class="card-content">
                        <p class="answer">${q.answer}</p>
                        ${
                          q.details ? `<p class="details">${q.details}</p>` : ""
                        }
                    </div>
                    <span class="flip-hint">Kliknij aby wrócić</span>
                </div>
            </div>
        `;

    card.addEventListener("click", () => {
      card.classList.toggle("flipped");
    });

    questionsContainer.appendChild(card);
  });
}
