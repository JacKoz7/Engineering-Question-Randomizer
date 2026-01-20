let allQuestions = [];
let usedQuestions = [];
let noRepeatMode = false;

const questionCount = document.getElementById("questionCount");
const unansweredCount = document.getElementById("unansweredCount");
const remainingCounter = document.getElementById("remainingCounter");
const remainingCount = document.getElementById("remainingCount");
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
  updateStats();
});

async function loadQuestionsFromFile() {
  try {
    const response = await fetch("pytania.json");
    allQuestions = await response.json();

    updateStats();
    drawButton.disabled = false;
  } catch (error) {
    console.error("Error:", error);
    alert("Cannot load questions file.");
  }
}

function updateStats() {
  questionCount.textContent = allQuestions.length;

  const unanswered = allQuestions.filter(
    (q) => !q.answer || q.answer.trim() === ""
  ).length;
  unansweredCount.textContent = unanswered;

  if (noRepeatMode) {
    const remaining = allQuestions.length - usedQuestions.length;
    remainingCount.textContent = remaining;
    remainingCounter.style.display = "block";
  } else {
    remainingCounter.style.display = "none";
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
      updateStats();
      return;
    }
    alert("Not enough questions.");
    return;
  }

  const selectedQuestions = getRandomQuestions(availableQuestions, 3);

  if (noRepeatMode) {
    usedQuestions.push(...selectedQuestions);
    updateStats();
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
                        <p class="answer">${q.answer || "Brak odpowiedzi"}</p>
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
