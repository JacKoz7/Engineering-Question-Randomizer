let allQuestions = [];

const questionCount = document.getElementById("questionCount");
const drawButton = document.getElementById("drawButton");
const questionsContainer = document.getElementById("questionsContainer");

window.addEventListener("DOMContentLoaded", async () => {
  await loadQuestionsFromFile();
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
  if (allQuestions.length < 3) {
    alert("Not enough questions.");
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

  questions.forEach((q, index) => {
    const card = document.createElement("div");
    card.className = "question-card";
    card.style.animationDelay = `${index * 0.1}s`;

    card.innerHTML = `
            <div class="card-inner">
                <div class="card-front">
                    <h3>Pytanie ${index + 1}</h3>
                    <p>${q.question}</p>
                    <span class="flip-hint">Kliknij aby zobaczyć odpowiedź</span>
                </div>
                <div class="card-back">
                    <h3>Odpowiedź</h3>
                    <p class="answer">${q.answer}</p>
                    ${q.details ? `<p class="details">${q.details}</p>` : ""}
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
