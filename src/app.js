// ── Config & routing ─────────────────────────────────────────────────────────
let config = null;
let currentDataPath = null;

// ── Quiz state ────────────────────────────────────────────────────────────────
let allQuestions = [];
let usedQuestions = [];
let noRepeatMode = false;
let learnMode = false;
let quizMode = false;
let quizQueue = [];
let quizIndex = 0;
let quizResults = [];
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
const manageLearnBtn = document.getElementById("manageLearnBtn");
const categoriesContainer = document.getElementById("categoriesContainer");
const categoryToggleBtn = document.getElementById("categoryToggleBtn");
const filterSummary = document.getElementById("filterSummary");
const filtersWrapper = document.querySelector(".filters-wrapper");

// ── Boot ──────────────────────────────────────────────────────────────────────
window.addEventListener("DOMContentLoaded", async () => {
  config = await fetch("data/config.json", { cache: "no-store" }).then((r) => r.json());
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
  if (quizMode) {
    quizMode = false;
    document.body.classList.remove("quiz-mode");
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
  quizMode = false;
  quizQueue = [];
  quizIndex = 0;
  quizResults = [];
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

manageLearnBtn.addEventListener("click", openLearnManager);

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
  } else {
    learnModeBtn.innerHTML = '<span class="icon">📚</span><span class="text">Tryb nauki</span>';
    usedQuestions = [];
  }
  updateStats();

  if (quizMode) {
    startQuizRun();
  } else {
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

  const drawCount = quizMode ? 1 : Math.min(3, available.length);
  const drawn = getRandomQuestions(available, drawCount);
  if (noRepeatMode) {
    usedQuestions.push(...drawn);
    updateStats();
  }
  if (quizMode) {
    displayQuizCard(drawn[0]);
  } else {
    displayQuestions(drawn);
  }
});

// ── Keyboard controls for quiz cards ───────────────────────────────────────────
// 1–9 toggle the matching answer, Enter sprawdza odpowiedź / przechodzi dalej.
document.addEventListener("keydown", (e) => {
  if (!quizMode) return;
  // Ignore when a modal (np. learn manager) jest otwarty albo gdy piszemy w polu.
  if (document.getElementById("learnManager")) return;
  const tag = (e.target.tagName || "").toLowerCase();
  if (tag === "input" || tag === "textarea" || e.target.isContentEditable) return;

  const card = questionsContainer.querySelector(".quiz-card");
  if (!card) return;

  // Enter → klika „Sprawdź odpowiedź" lub „Następne pytanie".
  if (e.key === "Enter") {
    const checkBtn = card.querySelector(".quiz-check-btn");
    if (checkBtn) {
      e.preventDefault();
      checkBtn.click();
    }
    return;
  }

  // Backspace → czyści wszystkie zaznaczone odpowiedzi naraz.
  if (e.key === "Backspace") {
    const selected = card.querySelectorAll(".quiz-option.selected:not(.revealed)");
    if (selected.length) {
      e.preventDefault();
      selected.forEach((opt) => opt.classList.remove("selected"));
    }
    return;
  }

  // Cyfra 1–9 → zaznacza/odznacza odpowiedź o tym numerze.
  if (e.key >= "1" && e.key <= "9") {
    const idx = Number(e.key) - 1;
    const opt = card.querySelector(`.quiz-option[data-index="${idx}"]`);
    if (opt && !opt.classList.contains("revealed")) {
      e.preventDefault();
      opt.classList.toggle("selected");
    }
  }
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

// Sync every visible bookmark star with the current toLearn set
function refreshBookmarks() {
  document.querySelectorAll(".bookmark-btn").forEach((b) => {
    const qt = b.getAttribute("data-question");
    b.classList.toggle("marked", toLearnQuestions.has(qt));
  });
}

// ── Learn manager (osobny ekran do zarządzania pytaniami do nauki) ──────────────
function openLearnManager() {
  const existing = document.getElementById("learnManager");
  if (existing) existing.remove();

  const items = [...toLearnQuestions];
  const catBadges = (qt) => {
    const q = allQuestions.find((x) => x.question === qt);
    return q
      ? getCategoriesFromQuestion(q)
          .map((c) => `<span class="category-badge">${escapeHtml(c)}</span>`)
          .join("")
      : "";
  };

  const listHTML = items.length
    ? items
        .map(
          (qt) => `
        <li class="lm-item">
          <div class="lm-item-main">
            <div class="badges-wrapper">${catBadges(qt)}</div>
            <p class="lm-q">${escapeHtml(qt)}</p>
          </div>
          <button class="lm-remove" title="Usuń z nauki (już to umiem)" data-q="${escapeHtml(qt)}">✕</button>
        </li>`
        )
        .join("")
    : `<li class="lm-empty">Brak pytań w trybie nauki. Dodaj je gwiazdką na karcie albo przyciskiem „Dodaj błędne do nauki” na ekranie wyniku.</li>`;

  const overlay = document.createElement("div");
  overlay.id = "learnManager";
  overlay.className = "learn-manager-overlay";
  overlay.innerHTML = `
    <div class="learn-manager glass-panel">
      <div class="lm-head">
        <h2>📚 Pytania do nauki <span class="lm-count">${items.length}</span></h2>
        <button class="lm-close" title="Zamknij">✕</button>
      </div>
      <p class="lm-hint">Usuń pojedyncze pytania, które już umiesz, albo wyczyść całą listę.</p>
      <ul class="lm-list">${listHTML}</ul>
      <div class="lm-actions">
        <button class="lm-clear" ${items.length ? "" : "disabled"}>🗑 Wyczyść wszystko</button>
        <button class="lm-done cta-button">Gotowe</button>
      </div>
    </div>`;
  document.body.appendChild(overlay);

  const close = () => overlay.remove();
  overlay.querySelector(".lm-close").addEventListener("click", close);
  overlay.querySelector(".lm-done").addEventListener("click", close);
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) close();
  });

  overlay.querySelectorAll(".lm-remove").forEach((btn) => {
    btn.addEventListener("click", () => {
      toLearnQuestions.delete(btn.getAttribute("data-q"));
      saveToLearnToStorage();
      updateStats();
      refreshBookmarks();
      openLearnManager();
    });
  });

  const clearBtn = overlay.querySelector(".lm-clear");
  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      if (!toLearnQuestions.size) return;
      if (!confirm("Usunąć wszystkie pytania z trybu nauki?")) return;
      toLearnQuestions.clear();
      saveToLearnToStorage();
      updateStats();
      refreshBookmarks();
      openLearnManager();
    });
  }
}

function toggleEmptyState() {
  document.body.classList.toggle("no-questions", questionsContainer.children.length === 0);
}

async function loadQuestionsFromFile(filePath) {
  try {
    const response = await fetch(filePath, { cache: "no-store" });
    allQuestions = await response.json();
    quizMode = allQuestions.length > 0 && Array.isArray(allQuestions[0].options);
    document.body.classList.toggle("quiz-mode", quizMode);
    renderCategories();
    updateStats();
    drawButton.disabled = false;
    if (quizMode) {
      startQuizRun();
    }
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
  unansweredCount.textContent = quizMode
    ? "—"
    : allQuestions.filter((q) => !q.answer || q.answer.trim() === "").length;
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

// ── Quiz card mode ────────────────────────────────────────────────────────────
function startQuizRun() {
  const pool = getQuestionPool();
  quizQueue = [...pool].sort(() => Math.random() - 0.5);
  quizIndex = 0;
  quizResults = [];
  showQuizQuestion();
}

function showQuizQuestion() {
  if (quizIndex >= quizQueue.length) {
    displayQuizComplete();
    return;
  }
  displayQuizCard(quizQueue[quizIndex]);
}

function getResultTier(percent) {
  if (percent === 100) return { emoji: "🏆", title: "Perfekcyjnie!", msg: "Komplet punktów — mistrzostwo!" };
  if (percent >= 90) return { emoji: "🌟", title: "Świetny wynik!", msg: "Materiał masz opanowany niemal w całości." };
  if (percent >= 75) return { emoji: "💪", title: "Bardzo dobrze!", msg: "Solidny wynik — jeszcze kilka szczegółów do dopracowania." };
  if (percent >= 50) return { emoji: "📈", title: "Nieźle!", msg: "Połowa za Tobą — powtórz błędne pytania i będzie super." };
  if (percent >= 25) return { emoji: "📚", title: "Trzeba poćwiczyć", msg: "Przejrzyj błędne odpowiedzi i spróbuj ponownie." };
  return { emoji: "🔁", title: "Nie poddawaj się!", msg: "Powtórz materiał i podejdź jeszcze raz — dasz radę." };
}

function displayQuizComplete() {
  questionsContainer.innerHTML = "";
  const total = quizResults.length || quizQueue.length;
  const correct = quizResults.filter((r) => r.correct).length;
  const percent = total ? Math.round((correct / total) * 100) : 0;
  const tier = getResultTier(percent);
  const wrong = quizResults.filter((r) => !r.correct);

  // circular progress ring geometry
  const R = 80, C = 2 * Math.PI * R;
  const offset = C * (1 - percent / 100);

  const wrongHTML = wrong.length
    ? `
      <div class="quiz-wrong-list">
        <div class="quiz-wrong-head">
          <h3>Pytania do powtórki <span class="quiz-wrong-count">${wrong.length}</span></h3>
          <button class="quiz-addlearn-btn" id="quizAddLearnBtn"><span class="icon">📚</span> Dodaj błędne do nauki</button>
        </div>
        <ol class="quiz-wrong-items">
          ${wrong
            .map((r) => {
              const cats = getCategoriesFromQuestion(r.q)
                .map((c) => `<span class="category-badge">${escapeHtml(c)}</span>`)
                .join("");
              const goodAns = r.q.options
                .filter((o) => o.correct)
                .map((o) => `<li>${escapeHtml(o.text)}</li>`)
                .join("");
              return `
                <li class="quiz-wrong-item">
                  <div class="badges-wrapper">${cats}</div>
                  <p class="quiz-wrong-q">${escapeHtml(r.q.question)}</p>
                  <p class="quiz-wrong-label">Poprawna odpowiedź:</p>
                  <ul class="quiz-wrong-answers">${goodAns}</ul>
                </li>`;
            })
            .join("")}
        </ol>
      </div>`
    : `<p class="quiz-perfect-note">Wszystkie odpowiedzi poprawne — nic do powtórki! 🎉</p>`;

  const wrap = document.createElement("div");
  wrap.className = "quiz-complete";
  wrap.innerHTML = `
    <div class="quiz-complete-inner glass-panel">
      <p class="quiz-complete-emoji">${tier.emoji}</p>
      <h2>${tier.title}</h2>
      <div class="quiz-score-ring">
        <svg width="200" height="200" viewBox="0 0 200 200">
          <circle class="ring-track" cx="100" cy="100" r="${R}" fill="none" stroke-width="16"/>
          <circle class="ring-fill" cx="100" cy="100" r="${R}" fill="none" stroke-width="16"
            stroke-linecap="round" transform="rotate(-90 100 100)"
            stroke-dasharray="${C.toFixed(1)}" stroke-dashoffset="${C.toFixed(1)}"/>
        </svg>
        <div class="quiz-score-center">
          <span class="quiz-score-percent">${percent}%</span>
          <span class="quiz-score-frac">${correct} / ${total}</span>
        </div>
      </div>
      <p class="quiz-complete-msg">${tier.msg}</p>
      ${wrongHTML}
      <div class="quiz-complete-actions">
        <button class="cta-button" id="quizRestartBtn">Zacznij od nowa</button>
        <button class="back-btn" onclick="location.hash=''">← Wróć do menu</button>
      </div>
    </div>`;
  questionsContainer.appendChild(wrap);

  // animate ring fill
  requestAnimationFrame(() => {
    const fill = wrap.querySelector(".ring-fill");
    if (fill) fill.style.strokeDashoffset = offset.toFixed(1);
  });

  document.getElementById("quizRestartBtn").addEventListener("click", startQuizRun);

  const addLearnBtn = document.getElementById("quizAddLearnBtn");
  if (addLearnBtn) {
    addLearnBtn.addEventListener("click", () => {
      wrong.forEach((r) => toLearnQuestions.add(r.q.question));
      saveToLearnToStorage();
      updateStats();
      addLearnBtn.disabled = true;
      addLearnBtn.innerHTML = '<span class="icon">✓</span> Dodano do nauki';
    });
  }

  toggleEmptyState();
}

function displayQuizCard(q) {
  questionsContainer.innerHTML = "";

  const card = document.createElement("div");
  card.className = "question-card quiz-card";

  const isMarked = toLearnQuestions.has(q.question);
  const badgesHTML = getCategoriesFromQuestion(q)
    .map((c) => `<span class="category-badge">${escapeHtml(c)}</span>`)
    .join("");

  const bookmarkSVG = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 21L12 16L5 21V5C5 4.46957 5.21071 3.96086 5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3H17C17.5304 3 18.0391 3.21071 18.4142 3.58579C18.7893 3.96086 19 4.46957 19 5V21Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`;

  const progress = `${quizIndex + 1} / ${quizQueue.length}`;
  const isLast = quizIndex + 1 === quizQueue.length;

  const shuffledOptions = [...q.options].sort(() => Math.random() - 0.5);
  const optionsHTML = shuffledOptions
    .map(
      (opt, i) => `
      <button class="quiz-option" data-index="${i}" data-correct="${opt.correct}">
        <span class="quiz-option-label">${i + 1}.</span>
        <span class="quiz-option-text">${escapeHtml(opt.text)}</span>
      </button>`
    )
    .join("");

  card.innerHTML = `
    <div class="quiz-card-inner">
      <div class="card-header">
        <div class="quiz-progress-wrap">
          <h3>Pytanie ${escapeHtml(progress)}</h3>
          <div class="quiz-progress-bar"><div class="quiz-progress-fill" style="width:${((quizIndex + 1) / quizQueue.length) * 100}%"></div></div>
        </div>
        <button class="bookmark-btn ${isMarked ? "marked" : ""}" data-question="${escapeHtml(q.question)}">${bookmarkSVG}</button>
      </div>
      <div class="quiz-question-body">
        <div class="badges-wrapper">${badgesHTML}</div>
        <p class="quiz-question-text">${escapeHtml(q.question)}</p>
      </div>
      <div class="quiz-options">${optionsHTML}</div>
      <div class="quiz-actions">
        <button class="quiz-check-btn cta-button">Sprawdź odpowiedź</button>
        <span class="quiz-kbd-hint">Skróty: <kbd>1</kbd>–<kbd>9</kbd> zaznacz · <kbd>Backspace</kbd> wyczyść · <kbd>Enter</kbd> sprawdź / dalej</span>
      </div>
    </div>`;

  card.querySelectorAll(".quiz-option").forEach((btn) => {
    btn.addEventListener("click", () => {
      if (!btn.classList.contains("revealed")) {
        btn.classList.toggle("selected");
      }
    });
  });

  const checkBtn = card.querySelector(".quiz-check-btn");
  let answered = false;
  checkBtn.addEventListener("click", () => {
    if (answered) {
      quizIndex++;
      showQuizQuestion();
      return;
    }
    answered = true;

    const options = card.querySelectorAll(".quiz-option");
    let allCorrect = true;
    options.forEach((btn) => {
      const correct = btn.dataset.correct === "true";
      const selected = btn.classList.contains("selected");
      btn.classList.add("revealed");
      if (correct && selected) btn.classList.add("opt-correct");
      else if (!correct && selected) { btn.classList.add("opt-wrong"); allCorrect = false; }
      else if (correct && !selected) { btn.classList.add("opt-missed"); allCorrect = false; }
    });

    quizResults.push({ q, correct: allCorrect });

    const resultEl = document.createElement("p");
    resultEl.className = "quiz-result " + (allCorrect ? "quiz-result-ok" : "quiz-result-fail");
    resultEl.textContent = allCorrect ? "Brawo! Wszystkie poprawne odpowiedzi zaznaczone." : "Sprawdź podświetlone odpowiedzi.";
    card.querySelector(".quiz-actions").prepend(resultEl);

    checkBtn.textContent = isLast ? "Zakończ quiz →" : "Następne pytanie →";
  });

  card.querySelector(".bookmark-btn").addEventListener("click", (e) => {
    e.stopPropagation();
    const qt = e.currentTarget.getAttribute("data-question");
    toggleToLearn(qt);
    e.currentTarget.classList.toggle("marked", toLearnQuestions.has(qt));
  });

  questionsContainer.appendChild(card);
  toggleEmptyState();
}
