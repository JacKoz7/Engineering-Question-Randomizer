let allQuestions = [];
let usedQuestions = [];
let noRepeatMode = false;
let learnMode = false;
let toLearnQuestions = new Set();
let selectedCategories = new Set();

const questionCount = document.getElementById("questionCount");
const unansweredCount = document.getElementById("unansweredCount");
const toLearnCount = document.getElementById("toLearnCount");
const remainingCounter = document.getElementById("remainingCounter");
const remainingCount = document.getElementById("remainingCount");
const drawButton = document.getElementById("drawButton");
const questionsContainer = document.getElementById("questionsContainer");
const noRepeatCheckbox = document.getElementById("noRepeatCheckbox");
const learnModeBtn = document.getElementById("learnModeBtn");

const categoriesContainer = document.getElementById("categoriesContainer");
const categoryToggleBtn = document.getElementById("categoryToggleBtn");
const filterSummary = document.getElementById("filterSummary");
const filtersWrapper = document.querySelector(".filters-wrapper");

window.addEventListener("DOMContentLoaded", async () => {
  loadToLearnFromStorage();
  await loadQuestionsFromFile();
  toggleEmptyState();
});

categoryToggleBtn.addEventListener("click", () => {
    filtersWrapper.classList.toggle("open");
});

noRepeatCheckbox.addEventListener("change", (e) => {
  noRepeatMode = e.target.checked;
  if (!noRepeatMode) {
    usedQuestions = [];
  }
  updateStats();
});

learnModeBtn.addEventListener("click", () => {
  if (!learnMode && toLearnQuestions.size === 0) {
    alert("Brak pytań dodanych do nauki! Dodaj najpierw pytania gwiazdką.");
    return;
  }

  learnMode = !learnMode;
  document.body.classList.toggle("learn-mode", learnMode);
  learnModeBtn.classList.toggle("active", learnMode);

  if (learnMode) {
    learnModeBtn.innerHTML =
      '<span class="icon">📚</span><span class="text">Tryb nauki ✓</span>';

    updateStats();
    drawButton.click();
  } else {
    learnModeBtn.innerHTML =
      '<span class="icon">📚</span><span class="text">Tryb nauki</span>';
    usedQuestions = [];
    updateStats();

    drawButton.click();
  }
});

function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

function loadToLearnFromStorage() {
  const stored = localStorage.getItem("toLearnQuestions");
  if (stored) {
    toLearnQuestions = new Set(JSON.parse(stored));
  }
}

function saveToLearnToStorage() {
  localStorage.setItem(
    "toLearnQuestions",
    JSON.stringify([...toLearnQuestions])
  );
}

function toggleToLearn(questionText) {
  if (toLearnQuestions.has(questionText)) {
    toLearnQuestions.delete(questionText);
  } else {
    toLearnQuestions.add(questionText);
  }
  saveToLearnToStorage();
  updateStats();
}

function toggleEmptyState() {
  if (questionsContainer.children.length === 0) {
    document.body.classList.add("no-questions");
  } else {
    document.body.classList.remove("no-questions");
  }
}

async function loadQuestionsFromFile() {
  try {
    const response = await fetch("pytania.json");
    allQuestions = await response.json();

    renderCategories();

    updateStats();
    drawButton.disabled = false;
  } catch (error) {
    console.error("Error:", error);
    alert("Cannot load questions file.");
  }
}

function getCategoriesFromQuestion(q) {
    if (!q.category) return ["Ogólne"];
    return q.category.split(',').map(c => c.trim()).filter(c => c.length > 0);
}

function renderCategories() {
    const categoriesMap = {};

    allQuestions.forEach(q => {
        const cats = getCategoriesFromQuestion(q);
        
        cats.forEach(cat => {
            categoriesMap[cat] = (categoriesMap[cat] || 0) + 1;
        });
    });

    categoriesContainer.innerHTML = '';
    
    const gridInner = document.createElement('div');
    gridInner.className = 'categories-grid-inner';

    Object.keys(categoriesMap).sort().forEach(cat => {
        const count = categoriesMap[cat];
        
        const label = document.createElement('label');
        const input = document.createElement('input');
        input.type = 'checkbox';
        input.className = 'category-checkbox';
        input.value = cat;
        
        input.addEventListener('change', (e) => {
            if (e.target.checked) {
                selectedCategories.add(cat);
            } else {
                selectedCategories.delete(cat);
            }
            if(noRepeatMode) usedQuestions = []; 
            
            updateFilterSummary();
            updateStats();
        });

        const span = document.createElement('span');
        span.className = 'category-label';
        span.innerHTML = `${cat} <span class="category-count">(${count})</span>`;

        label.appendChild(input);
        label.appendChild(span);
        gridInner.appendChild(label);
    });

    categoriesContainer.appendChild(gridInner);
}

function updateFilterSummary() {
    if (selectedCategories.size === 0) {
        filterSummary.textContent = "Wszystkie";
        filterSummary.style.opacity = "0.7";
    } else {
        const count = selectedCategories.size;
        let text = "kategorii";
        if (count === 1) text = "kategoria";
        else if (count >= 2 && count <= 4) text = "kategorie";
        
        filterSummary.textContent = `Wybrano: ${count} ${text}`;
        filterSummary.style.opacity = "1";
    }
}

function updateStats() {
  const pool = getQuestionPool(); 
  
  questionCount.textContent = allQuestions.length;

  const unanswered = allQuestions.filter(
    (q) => !q.answer || q.answer.trim() === ""
  ).length;
  unansweredCount.textContent = unanswered;

  toLearnCount.textContent = toLearnQuestions.size;

  if (noRepeatMode) {
    const remaining = Math.max(0, pool.length - usedQuestions.length);
    remainingCount.textContent = remaining;
    remainingCounter.style.display = "flex";
  } else {
    remainingCounter.style.display = "none";
  }
}

function getQuestionPool() {
  let pool = allQuestions;

  if (learnMode) {
    pool = pool.filter((q) => toLearnQuestions.has(q.question));
  }

  if (selectedCategories.size > 0) {
      pool = pool.filter(q => {
          const cats = getCategoriesFromQuestion(q);
          return cats.some(cat => selectedCategories.has(cat));
      });
  }

  return pool;
}

drawButton.addEventListener("click", () => {
  const pool = getQuestionPool();

  const availableQuestions = noRepeatMode
    ? pool.filter((q) => !usedQuestions.includes(q))
    : pool;

  if (availableQuestions.length === 0) {
    if (noRepeatMode && usedQuestions.length > 0) {
      alert("Wszystkie pytania z wybranej puli zostały wyświetlone. Resetuję listę zużytych.");
      usedQuestions = [];
      updateStats();
      return;
    }
    alert("Brak dostępnych pytań spełniających kryteria (sprawdź filtry lub tryb nauki).");
    return;
  }

  const countToDraw = Math.min(3, availableQuestions.length);
  const selectedQuestions = getRandomQuestions(availableQuestions, countToDraw);

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

    const isMarked = toLearnQuestions.has(q.question);
    
    const cats = getCategoriesFromQuestion(q);
    const badgesHTML = cats.map(c => `<span class="category-badge">${escapeHtml(c)}</span>`).join('');

    card.innerHTML = `
            <div class="card-inner">
                <div class="card-front">
                    <div class="card-header">
                        <h3>Pytanie</h3>
                        <button class="bookmark-btn ${
                          isMarked ? "marked" : ""
                        }" data-question="${escapeHtml(q.question)}">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19 21L12 16L5 21V5C5 4.46957 5.21071 3.96086 5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3H17C17.5304 3 18.0391 3.21071 18.4142 3.58579C18.7893 3.96086 19 4.46957 19 5V21Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
                    </div>
                    <div class="card-content">
                        <div class="badges-wrapper">
                            ${badgesHTML}
                        </div>
                        <p>${escapeHtml(q.question)}</p>
                    </div>
                    <span class="flip-hint">Kliknij aby zobaczyć odpowiedź</span>
                </div>
                <div class="card-back">
                    <div class="card-header">
                        <h3>Odpowiedź</h3>
                        <button class="bookmark-btn ${
                          isMarked ? "marked" : ""
                        }" data-question="${escapeHtml(q.question)}">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19 21L12 16L5 21V5C5 4.46957 5.21071 3.96086 5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3H17C17.5304 3 18.0391 3.21071 18.4142 3.58579C18.7893 3.96086 19 4.46957 19 5V21Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
                    </div>
                    <div class="card-content">
                        <div class="badges-wrapper">
                            ${badgesHTML}
                        </div>
                        <p class="answer">${escapeHtml(q.answer || "Brak odpowiedzi")}</p>
                        ${
                          q.details
                            ? `<p class="details">${escapeHtml(q.details)}</p>`
                            : ""
                        }
                    </div>
                    <span class="flip-hint">Kliknij aby wrócić</span>
                </div>
            </div>
        `;

    const cardInner = card.querySelector(".card-inner");
    cardInner.addEventListener("click", (e) => {
      if (!e.target.closest(".bookmark-btn")) {
        card.classList.toggle("flipped");
      }
    });

    const bookmarkBtns = card.querySelectorAll(".bookmark-btn");
    bookmarkBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const questionText = btn.getAttribute("data-question");
        toggleToLearn(questionText);

        document
          .querySelectorAll(`.bookmark-btn[data-question="${questionText}"]`)
          .forEach((b) => {
            if (toLearnQuestions.has(questionText)) {
              b.classList.add("marked");
            } else {
              b.classList.remove("marked");
            }
          });
      });
    });

    questionsContainer.appendChild(card);
  });

  toggleEmptyState();
}