// ── Config & routing ─────────────────────────────────────────────────────────
let config = null;
let currentDataPath = null;

// ── Quiz state ────────────────────────────────────────────────────────────────
let allQuestions = [];
let usedQuestions = [];
let noRepeatMode = false;
let learnMode = false;
let toLearnQuestions = new Set();
let selectedCategories = new Set();

// ── DOM refs – views ──────────────────────────────────────────────────────────
const menuView = document.getElementById("menu-view");
const quizView = document.getElementById("quiz-view");
const sectionsContainer = document.getElementById("sections-container");
const backBtn = document.getElementById("backBtn");
const quizTitle = document.getElementById("quizTitle");

// ── DOM refs – quiz ───────────────────────────────────────────────────────────
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

// ── Boot ──────────────────────────────────────────────────────────────────────
window.addEventListener("DOMContentLoaded", async () => {
  config = await fetch("data/config.json").then((r) => r.json());
  handleRoute();
});

window.addEventListener("hashchange", handleRoute);

function handleRoute() {
  const hash = location.hash;
  if (hash.startsWith("#quiz/")) {
    enterQuiz(decodeURIComponent(hash.slice(6)));
  } else {
    showMenu();
  }
}

// ══════════════════════════════════════════════════════════════════ MENU VIEW

function showMenu() {
  if (learnMode) {
    learnMode = false;
    document.body.classList.remove("learn-mode");
  }
  document.body.removeAttribute("data-theme");
  menuView.classList.remove("hidden");
  quizView.classList.add("hidden");
  renderMenu();
}

function renderMenu() {
  sectionsContainer.innerHTML = "";

  config.sections.forEach((section) => {
    const card = document.createElement("div");
    card.className = "section-card glass-panel";

    if (section.comingSoon) {
      card.classList.add("coming-soon");
      card.innerHTML = `
        <div class="section-card-header">
          <span class="section-emoji">${section.emoji}</span>
          <div class="section-info">
            <h2 class="section-title">${escapeHtml(section.title)}</h2>
            <span class="section-badge coming-soon-badge">Wkrótce</span>
          </div>
        </div>`;
    } else if (section.type === "direct") {
      card.innerHTML = `
        <div class="section-card-header">
          <span class="section-emoji">${section.emoji}</span>
          <div class="section-info">
            <h2 class="section-title">${escapeHtml(section.title)}</h2>
            <span class="section-badge direct-badge">Quiz</span>
          </div>
          <svg class="section-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </div>`;
      card.addEventListener("click", () => {
        location.hash = `#quiz/${section.dataPath}`;
      });
    } else {
      // subjects section
      const count = section.subjects.length;
      const countLabel =
        count === 0 ? "Brak przedmiotów"
        : count === 1 ? "1 przedmiot"
        : count <= 4 ? `${count} przedmioty`
        : `${count} przedmiotów`;

      const subjectsHTML =
        count === 0
          ? `<p class="no-subjects">Brak przedmiotów — dodaj wpis w data/config.json</p>`
          : section.subjects
              .map(
                (sub) => `
                <button class="subject-btn" data-path="${section.id}/${sub.id}">
                  <span class="subject-title">${escapeHtml(sub.title)}</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>`
              )
              .join("");

      card.innerHTML = `
        <div class="section-card-header">
          <span class="section-emoji">${section.emoji}</span>
          <div class="section-info">
            <h2 class="section-title">${escapeHtml(section.title)}</h2>
            <span class="section-badge">${countLabel}</span>
          </div>
          <svg class="chevron-icon section-chevron" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>
        <div class="subjects-list">
          <div class="subjects-inner">${subjectsHTML}</div>
        </div>`;

      card.querySelector(".section-card-header").addEventListener("click", () => {
        card.classList.toggle("expanded");
      });

      card.querySelectorAll(".subject-btn").forEach((btn) => {
        btn.addEventListener("click", (e) => {
          e.stopPropagation();
          location.hash = `#quiz/${btn.dataset.path}`;
        });
      });
    }

    sectionsContainer.appendChild(card);
  });
}

// ══════════════════════════════════════════════════════════════════ QUIZ VIEW

async function enterQuiz(path) {
  // Reset state
  allQuestions = [];
  usedQuestions = [];
  noRepeatMode = false;
  learnMode = false;
  selectedCategories = new Set();
  currentDataPath = path;

  document.body.classList.remove("learn-mode");
  noRepeatCheckbox.checked = false;
  learnModeBtn.classList.remove("active");
  learnModeBtn.innerHTML = '<span class="icon">📚</span><span class="text">Tryb nauki</span>';
  questionsContainer.innerHTML = "";
  drawButton.disabled = true;
  filtersWrapper.classList.remove("open");

  quizTitle.textContent = resolveTitle(path);
  const theme = resolveTheme(path);
  if (theme) document.body.setAttribute("data-theme", theme);
  else document.body.removeAttribute("data-theme");
  loadToLearnFromStorage();

  menuView.classList.add("hidden");
  quizView.classList.remove("hidden");

  await loadQuestionsFromFile(`data/${path}/pytania.json`);
  toggleEmptyState();
}

function resolveTitle(path) {
  if (!config) return path;
  for (const section of config.sections) {
    if (section.type === "direct" && section.dataPath === path) return section.title;
    if (section.type === "subjects") {
      for (const sub of section.subjects) {
        if (`${section.id}/${sub.id}` === path) return sub.title;
      }
    }
  }
  return path;
}

function resolveTheme(path) {
  if (!config) return null;
  for (const section of config.sections) {
    if (section.type === "direct" && section.dataPath === path) return section.theme || null;
    if (section.type === "subjects") {
      for (const sub of section.subjects) {
        if (`${section.id}/${sub.id}` === path) return sub.theme || null;
      }
    }
  }
  return null;
}

backBtn.addEventListener("click", () => {
  location.hash = "";
});

// ── Quiz event listeners ──────────────────────────────────────────────────────
categoryToggleBtn.addEventListener("click", () => {
  filtersWrapper.classList.toggle("open");
});

noRepeatCheckbox.addEventListener("change", (e) => {
  noRepeatMode = e.target.checked;
  if (!noRepeatMode) usedQuestions = [];
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
    learnModeBtn.innerHTML = '<span class="icon">📚</span><span class="text">Tryb nauki ✓</span>';
    updateStats();
    drawButton.click();
  } else {
    learnModeBtn.innerHTML = '<span class="icon">📚</span><span class="text">Tryb nauki</span>';
    usedQuestions = [];
    updateStats();
    drawButton.click();
  }
});

drawButton.addEventListener("click", () => {
  const pool = getQuestionPool();
  const available = noRepeatMode ? pool.filter((q) => !usedQuestions.includes(q)) : pool;

  if (available.length === 0) {
    if (noRepeatMode && usedQuestions.length > 0) {
      alert("Wszystkie pytania zostały wyświetlone. Resetuję listę.");
      usedQuestions = [];
      updateStats();
      return;
    }
    alert("Brak dostępnych pytań (sprawdź filtry lub tryb nauki).");
    return;
  }

  const drawn = getRandomQuestions(available, Math.min(3, available.length));
  if (noRepeatMode) {
    usedQuestions.push(...drawn);
    updateStats();
  }
  displayQuestions(drawn);
});

// ── Quiz logic ────────────────────────────────────────────────────────────────
function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

function loadToLearnFromStorage() {
  const stored = localStorage.getItem(`toLearn__${currentDataPath}`);
  toLearnQuestions = stored ? new Set(JSON.parse(stored)) : new Set();
}

function saveToLearnToStorage() {
  localStorage.setItem(`toLearn__${currentDataPath}`, JSON.stringify([...toLearnQuestions]));
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
  document.body.classList.toggle("no-questions", questionsContainer.children.length === 0);
}

async function loadQuestionsFromFile(filePath) {
  try {
    const response = await fetch(filePath);
    allQuestions = await response.json();
    renderCategories();
    updateStats();
    drawButton.disabled = false;
  } catch (error) {
    console.error("Error:", error);
    alert("Nie można wczytać pliku z pytaniami: " + filePath);
  }
}

function getCategoriesFromQuestion(q) {
  if (!q.category) return ["Ogólne"];
  return q.category.split(",").map((c) => c.trim()).filter((c) => c.length > 0);
}

function renderCategories() {
  selectedCategories = new Set();
  categoriesContainer.innerHTML = "";

  const categoriesMap = {};
  allQuestions.forEach((q) => {
    getCategoriesFromQuestion(q).forEach((cat) => {
      categoriesMap[cat] = (categoriesMap[cat] || 0) + 1;
    });
  });

  const gridInner = document.createElement("div");
  gridInner.className = "categories-grid-inner";

  Object.keys(categoriesMap)
    .sort()
    .forEach((cat) => {
      const label = document.createElement("label");
      const input = document.createElement("input");
      input.type = "checkbox";
      input.className = "category-checkbox";
      input.value = cat;

      input.addEventListener("change", (e) => {
        if (e.target.checked) {
          selectedCategories.add(cat);
        } else {
          selectedCategories.delete(cat);
        }
        if (noRepeatMode) usedQuestions = [];
        updateFilterSummary();
        updateStats();
      });

      const span = document.createElement("span");
      span.className = "category-label";
      span.innerHTML = `${cat} <span class="category-count">(${categoriesMap[cat]})</span>`;

      label.appendChild(input);
      label.appendChild(span);
      gridInner.appendChild(label);
    });

  categoriesContainer.appendChild(gridInner);
  updateFilterSummary();
}

function updateFilterSummary() {
  if (selectedCategories.size === 0) {
    filterSummary.textContent = "Wszystkie";
    filterSummary.style.opacity = "0.7";
  } else {
    const n = selectedCategories.size;
    const text = n === 1 ? "kategoria" : n <= 4 ? "kategorie" : "kategorii";
    filterSummary.textContent = `Wybrano: ${n} ${text}`;
    filterSummary.style.opacity = "1";
  }
}

function updateStats() {
  const pool = getQuestionPool();
  questionCount.textContent = allQuestions.length;
  unansweredCount.textContent = allQuestions.filter((q) => !q.answer || q.answer.trim() === "").length;
  toLearnCount.textContent = toLearnQuestions.size;

  if (noRepeatMode) {
    remainingCount.textContent = Math.max(0, pool.length - usedQuestions.length);
    remainingCounter.style.display = "flex";
  } else {
    remainingCounter.style.display = "none";
  }
}

function getQuestionPool() {
  let pool = allQuestions;
  if (learnMode) pool = pool.filter((q) => toLearnQuestions.has(q.question));
  if (selectedCategories.size > 0) {
    pool = pool.filter((q) => getCategoriesFromQuestion(q).some((c) => selectedCategories.has(c)));
  }
  return pool;
}

function getRandomQuestions(pool, count) {
  return [...pool].sort(() => Math.random() - 0.5).slice(0, count);
}

function displayQuestions(questions) {
  questionsContainer.innerHTML = "";

  questions.forEach((q, index) => {
    const card = document.createElement("div");
    card.className = "question-card";
    card.style.animationDelay = `${index * 0.1}s`;

    const isMarked = toLearnQuestions.has(q.question);
    const badgesHTML = getCategoriesFromQuestion(q)
      .map((c) => `<span class="category-badge">${escapeHtml(c)}</span>`)
      .join("");

    const bookmarkSVG = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19 21L12 16L5 21V5C5 4.46957 5.21071 3.96086 5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3H17C17.5304 3 18.0391 3.21071 18.4142 3.58579C18.7893 3.96086 19 4.46957 19 5V21Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`;

    card.innerHTML = `
      <div class="card-inner">
        <div class="card-front">
          <div class="card-header">
            <h3>Pytanie</h3>
            <button class="bookmark-btn ${isMarked ? "marked" : ""}" data-question="${escapeHtml(q.question)}">${bookmarkSVG}</button>
          </div>
          <div class="card-content">
            <div class="badges-wrapper">${badgesHTML}</div>
            <p>${escapeHtml(q.question)}</p>
          </div>
          <span class="flip-hint">Kliknij aby zobaczyć odpowiedź</span>
        </div>
        <div class="card-back">
          <div class="card-header">
            <h3>Odpowiedź</h3>
            <button class="bookmark-btn ${isMarked ? "marked" : ""}" data-question="${escapeHtml(q.question)}">${bookmarkSVG}</button>
          </div>
          <div class="card-content">
            <div class="badges-wrapper">${badgesHTML}</div>
            <p class="answer">${escapeHtml(q.answer || "Brak odpowiedzi")}</p>
            ${q.details ? `<p class="details">${escapeHtml(q.details)}</p>` : ""}
          </div>
          <span class="flip-hint">Kliknij aby wrócić</span>
        </div>
      </div>`;

    card.querySelector(".card-inner").addEventListener("click", (e) => {
      if (!e.target.closest(".bookmark-btn")) card.classList.toggle("flipped");
    });

    card.querySelectorAll(".bookmark-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const qt = btn.getAttribute("data-question");
        toggleToLearn(qt);
        document.querySelectorAll(`.bookmark-btn[data-question="${qt}"]`).forEach((b) => {
          b.classList.toggle("marked", toLearnQuestions.has(qt));
        });
      });
    });

    questionsContainer.appendChild(card);
  });

  toggleEmptyState();
}
