const MEMO_GROUPS = [
  {
    title: "По классам",
    kicker: "Маршрут по возрасту",
    lead: "Что учитывать в проектной работе в начальной, средней и старшей школе.",
    open: true,
    items: [
      {
        title: "Для 1-4 класса",
        body: `
          <p>При организации работы в начальной школе важно учитывать возрастные психолого-физиологические особенности детей младшего школьного возраста.</p>
          <ul>
            <li>Темы работ выбираются из содержания учебных предметов или из близких к ним областей.</li>
            <li>Проблема проекта должна быть в зоне познавательных интересов ребёнка и мотивировать его к самостоятельной работе.</li>
            <li>Длительность выполнения проекта или исследования лучше ограничивать 3-4 неделями.</li>
          </ul>
          <div class="memo-note"><b>Важно:</b> для начальной школы текстовый файл не обязателен.</div>
        `
      },
      {
        title: "Идея для 1-2 класса",
        body: `
          <p>Детям можно предложить формат, в котором они сами собирают вопросы, на которые хотят получить ответы.</p>
          <ul>
            <li>В течение 2 недель дети записывают вопросы, а если ещё не умеют писать, им помогает тьютор.</li>
            <li>После этого вопросы собираются, учитель выбирает темы, по которым можно организовать работу.</li>
            <li>Дальше учащихся можно делить на группы и помогать им искать ответы.</li>
          </ul>
        `
      },
      {
        title: "Для 5-7 класса",
        body: `
          <p>В подростковом возрасте на первый план выходит развитие коммуникативных навыков, поэтому проектную и исследовательскую деятельность удобно строить в групповых форматах.</p>
          <ul>
            <li>При этом ученика не стоит лишать возможности выбрать индивидуальную форму работы.</li>
            <li>Темы можно брать из предметной, межпредметной и внепредметной области.</li>
            <li>Результат должен быть социально и практически значимым.</li>
          </ul>
        `
      },
      {
        title: "Для 8-10 класса",
        body: `
          <p>На этом этапе важно сформировать самостоятельное практическое владение технологией проектирования и исследования.</p>
          <ul>
            <li>Темы и проблемы подбираются с учётом личных интересов и самоопределения ученика.</li>
            <li>Предпочтительны индивидуальные формы работы.</li>
            <li>Полезно привлекать специалистов из профильных учреждений и вузов.</li>
            <li>Подходят экспедиции, конференции и другие расширенные форматы проектной деятельности.</li>
          </ul>
        `
      }
    ]
  },
  {
    title: "Как собрать идею и формат",
    kicker: "От замысла к результату",
    lead: "Как формулировать тему, какую структуру проекта держать в голове и какими могут быть итоговые продукты.",
    items: [
      {
        title: "Схема проекта",
        body: `
          <p>📌 <b>1. Поиск проблемы</b> — ключевой этап проекта.</p>
          <p>🎯 <b>2. Тематизация</b> — фиксирует суть проекта.</p>
          <p>🏆 <b>3. Цель</b> — краткий основной результат.</p>
          <p>📋 <b>4. Планирование</b> — мини-план работы.</p>
          <p>✅ <b>5. Задачи</b> — шаги к цели.</p>
          <p>📚 <b>6. Теория</b> — сбор информации.</p>
          <p>🔧 <b>7. Практика</b> — решение проблемы.</p>
          <p>📝 <b>8. Заключение</b> — итог работы.</p>
        `
      },
      {
        title: "Виды проекта",
        body: `
          <p><b>Исследовательский.</b> Включает актуальность темы, постановку задачи, гипотезу, её проверку и анализ результатов.</p>
          <p><b>Творческий.</b> Предполагает свободный и нетрадиционный подход к выполнению и презентации результата.</p>
          <p><b>Социо-гуманитарный.</b> Направлен на поиск решения социальных проблем и создание гуманитарного решения.</p>
          <p><b>Инженерный.</b> Требует довести идею до практического результата, которым смогут пользоваться люди.</p>
        `
      },
      {
        title: "Результатом проекта может быть",
        body: `
          <p>💻 <b>Электронные:</b> сайт, газета, 3D-модель.</p>
          <p>📄 <b>Печатные:</b> статьи, книги, буклеты, игра.</p>
          <p>🎨 <b>Творческие:</b> видео, фильм, выставка.</p>
          <p>📊 <b>Аналитические:</b> доклад, бизнес-план.</p>
          <p>🗂 <b>Систематизирующие:</b> схемы, атлас, справочник.</p>
        `
      },
      {
        title: "Площадки для поиска тем",
        body: `
          <ul>
            <li><b>Проектория</b> — крупные отечественные компании и адаптированные кейсы для школьников.</li>
            <li><b>Globallab</b> — особенно полезен для исследовательских тем.</li>
            <li><b>Школа реальных дел</b> — ежегодные кейсы разного уровня сложности.</li>
            <li><b>Школа IT-решений</b> — кейсы компаний и возможность предлагать свои темы.</li>
            <li><b>Мосгортех</b> — более сложные задачи от московских предприятий.</li>
            <li><b>Энергопрорыв</b> — темы и решения для энергетики.</li>
          </ul>
        `
      }
    ]
  },
  {
    title: "Как оформить работу",
    kicker: "Текст, структура, презентация",
    lead: "Требования к самому проекту, к текстовой части, к списку источников и к презентации для защиты.",
    items: [
      {
        title: "Оформление и содержание проекта",
        wide: true,
        body: `
          <p><b>Титульный лист:</b> наименование учебного заведения, тема проекта, ФИО автора и научного руководителя, город и год.</p>
          <p><b>Паспорт проектной работы:</b> тема проекта, ФИО автора и руководителя, график работы над проектом.</p>
          <p><b>Оглавление:</b> названия глав и разделов с номерами страниц. В памятке отдельно указано, что оно должно быть интерактивным.</p>
          <p><b>Введение:</b> описание проблемы, актуальность, цель и задачи работы. Рекомендуемый объём — 1-2 страницы.</p>
          <p><b>Теоретическая часть:</b> история вопроса, подходы к исследованию, особенности объекта и предмета исследования. Рекомендуемый объём — до 7-10 страниц.</p>
          <p><b>Практическая часть:</b> описание опыта, наблюдений, расчётов, доказательств, анализа. Она должна вести к решению поставленной цели. Рекомендуемый объём: 4-6 класс — 4-7 страниц, 7-8 класс — 6-8 страниц, 10 класс — 10-15 страниц.</p>
          <p><b>Заключение:</b> краткий вывод по выполненным задачам. Рекомендуемый объём — 1-2 страницы.</p>
          <p><b>Список литературы:</b> все источники, использованные при подготовке проекта.</p>
          <div class="memo-note"><b>Важно:</b> работа в 10 классе должна проходить проверку на антиплагиат, оригинальность текста — больше 60%.</div>
        `
      },
      {
        title: "Оформление текста",
        body: `
          <ul>
            <li>Работа выполняется в Microsoft Word.</li>
            <li>Формат бумаги — А4, допускается двусторонняя печать.</li>
            <li>Поля: левое — 30 мм, верхнее — 20 мм, правое — 15 мм, нижнее — 20 мм.</li>
            <li>Шрифт — Times New Roman, размер 14.</li>
            <li>Интервал — полуторный.</li>
            <li>Нумерация страниц — сквозная, арабскими цифрами.</li>
            <li>Титульный лист и оглавление не нумеруются.</li>
            <li>Если используется только одна таблица или одна иллюстрация, они не нумеруются.</li>
            <li>Нумерация таблиц и иллюстраций может быть сквозной или по главам.</li>
            <li>Пустые ячейки таблиц не оставляют пустыми: ставят знак «-», пишут «нет» или «нет данных».</li>
          </ul>
        `
      },
      {
        title: "Примеры оформления источников",
        body: `
          <p><b>Книга:</b> Казаков, С. Экономика индустриальных видов деятельности в России / С. Казаков, В. Поздняков. — М.: Инфра-М, 2016. — 306 с.</p>
          <p><b>Статья:</b> Коновалов, Б. П., Иванов, А. И. Анализ финансового состояния предприятия методом экспресс-анализа // Аллея науки. — 2017. — № 13. — С. 42-46.</p>
          <p><b>Диссертация:</b> Кубриков, И. И. Автоматизация интернет-маркетинга методом внедрения СППР: дис. ... канд. экон. наук. — Москва, 2002. — 215 с.</p>
          <p><b>Электронный ресурс:</b> Защита персональных данных пользователей и сотрудников библиотеки [Электронный ресурс]. — Режим доступа: http://www.nbrkomi.ru. — Дата обращения: 14.04.2014.</p>
        `
      },
      {
        title: "Оформление презентации",
        body: `
          <p>Электронная презентация — это набор слайдов для демонстрации проделанной работы. Её задача — визуально представить проект.</p>
          <ul>
            <li>Используйте минимум текста.</li>
            <li>Текст не должен становиться главным визуальным элементом слайда.</li>
            <li>Не перегружайте один слайд большим количеством информации.</li>
          </ul>
          <a class="memo-link" href="https://docs.google.com/presentation/d/1-_SSuNtrwtoXGVY3aVeDvfeaYmkCpxAO/edit?usp=drive_link&ouid=116324512383519059211&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer">📥 Шаблон презентации</a>
        `
      }
    ]
  },
  {
    title: "Полезные материалы",
    kicker: "Для защиты и самопроверки",
    lead: "Финальные опоры: как будут оценивать работу и где посмотреть живой пример проекта.",
    items: [
      {
        title: "Критерии оценивания",
        body: `
          <ul>
            <li><b>Актуальность темы</b> — насколько тема современна и действительно значима.</li>
            <li><b>Цель и задачи</b> — насколько чётко они сформулированы и связаны между собой.</li>
            <li><b>Теоретическая часть</b> — глубина проработки материала и понимание темы.</li>
            <li><b>Практическая часть</b> — качество результата и возможность его применения.</li>
            <li><b>Оформление</b> — соответствие требованиям памятки.</li>
            <li><b>Защита</b> — умение объяснить и представить свою работу.</li>
          </ul>
          <a class="memo-link" href="https://drive.google.com/file/d/1ExFdT4eL9JNuPWYbSA-5hFKuYLj3pl_X/view?usp=drive_link" target="_blank" rel="noopener noreferrer">📥 Критерии оценивания</a>
        `
      },
      {
        title: "Примеры проектов",
        body: `
          <p>Можно посмотреть готовые примеры, чтобы понять объём, структуру и подачу материала.</p>
          <a class="memo-link" href="https://disk.yandex.ru/i/GyXFaEq3DL-TWA" target="_blank" rel="noopener noreferrer">📥 Скачать пример проекта №1</a>
          <a class="memo-link" href="https://disk.yandex.ru/i/GP9Oj-eldmkP3g" target="_blank" rel="noopener noreferrer">📥 Скачать пример проекта №2</a>
          <a class="memo-link" href="https://disk.yandex.ru/i/KgOdEnS-Bga0mQ" target="_blank" rel="noopener noreferrer">📥 Скачать пример проекта №3</a>
        `
      },
      {
        title: "Памятка для учеников",
        body: `
          <p>Скачайте полную памятку по оформлению проектных работ в один клик.</p>
          <a class="memo-link" href="https://drive.google.com/file/d/1WO9wxrvYgUgRM9GN3XmVAv5DTkhal2D1/view?usp=drive_link" target="_blank" rel="noopener noreferrer">📥 Скачать памятку (PDF)</a>
        `
      }
    ]
  }
];

const TAG_GROUPS = [
  { label: "кибербезопасность", aliases: ["кибербезопасность"] },
  { label: "образование", aliases: ["образование"] },
  { label: "здоровье", aliases: ["здоровье"] },
  { label: "дизайн", aliases: ["дизайн"] },
  { label: "спорт", aliases: ["спорт"] },
  { label: "бизнес", aliases: ["бизнес"] },
  { label: "программирование", aliases: ["программирование"] },
  { label: "экология", aliases: ["экология"] },
  { label: "музыка", aliases: ["музыка"] },
  { label: "искусство", aliases: ["искусство"] },
  { label: "география", aliases: ["география"] },
  { label: "история", aliases: ["история"] },
  { label: "литература", aliases: ["литература"] },
  { label: "физика", aliases: ["физика"] },
  { label: "математика", aliases: ["математика"] },
  { label: "биология", aliases: ["биология"] },
  { label: "химия", aliases: ["химия"] },
  { label: "социология", aliases: ["социология"] },
  { label: "право", aliases: ["право"] },
  { label: "экономика", aliases: ["экономика"] },
  { label: "медиа", aliases: ["медиа"] },
  { label: "гастрономия", aliases: ["гастрономия"] },
  { label: "мода", aliases: ["мода"] },
  { label: "архитектура", aliases: ["архитектура"] },
  { label: "театр", aliases: ["театр"] }
];

const TAG_MATCHERS = TAG_GROUPS
  .flatMap((group) => group.aliases.map((alias) => ({
    label: group.label,
    alias,
    aliasLower: alias.toLowerCase()
  })))
  .sort((a, b) => b.alias.length - a.alias.length);

const TAG_PALETTE = ["#ff6b6b", "#00b894", "#fdcb6e", "#74b9ff", "#a29bfe", "#fd79ab", "#fab1a0", "#00cec9", "#6c5ce7", "#e17055"];
const PER_PAGE = 5;

const state = {
  activeCategory: "",
  page: 1,
  savedPage: 1,
  collectionMode: "page",
  total: 0,
  totalPages: 0,
  renderedItems: [],
  clientList: [],
  catalogProjects: null,
  catalogPromise: null,
  activeModalProject: null,
  serverAvailable: null,
  fallbackProjects: null,
  requestId: 0
};

let likes = sanitizeLikes(readStorage("pf_likes", {}));
let savedProjects = sanitizeSavedProjects(readStorage("pf_saved_projects", []));
const legacySavedTitles = Array.isArray(readStorage("pf_saved_titles", [])) ? readStorage("pf_saved_titles", []) : [];
let searchDebounceTimer = null;

document.addEventListener("DOMContentLoaded", async () => {
  renderMemoAccordion();
  initChips();
  bindControls();
  await hydrateLegacySavedProjects();
  renderSavedProjects();
  await loadProjects({ mode: getModeFromUI(), pageNumber: 1 });
});

function renderMemoAccordion() {
  const wrap = document.getElementById("memoAccordion");
  if (!wrap) return;

  wrap.innerHTML = MEMO_GROUPS.map((group, groupIndex) => `
    <details class="accordion" ${group.open ? "open" : ""}>
      <summary>
        <div class="accordion-summary">
          <div class="accordion-title-wrap">
            <span class="accordion-kicker">${group.kicker}</span>
            <h3 class="accordion-title">${group.title}</h3>
            <p class="accordion-lead">${group.lead}</p>
          </div>
          <span class="accordion-count">${group.items.length} раздел${pluralize(group.items.length, "", "а", "ов")}</span>
          <span class="accordion-caret">${groupIndex + 1}</span>
        </div>
      </summary>
      <div class="accordion-panel">
        <div class="accordion-grid">
          ${group.items.map((item) => `
            <article class="memo-card${item.wide ? " wide" : ""}">
              <h3>${item.title}</h3>
              ${item.body}
            </article>
          `).join("")}
        </div>
      </div>
    </details>
  `).join("");
}

function bindControls() {
  const menuToggle = document.getElementById("menuToggle");
  const nav = document.getElementById("siteNav");
  const modal = document.getElementById("projectModal");
  const modalClose = document.getElementById("projectModalClose");
  const input = document.getElementById("input");
  const level = document.getElementById("level");
  const sort = document.getElementById("sort");
  const searchBtn = document.getElementById("searchBtn");
  const randomBtn = document.getElementById("randomBtn");
  const popularBtn = document.getElementById("popularBtn");

  if (menuToggle) {
    menuToggle.addEventListener("click", () => toggleMenu());
  }

  if (nav) {
    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => closeMenu());
    });
  }

  window.addEventListener("resize", () => {
    if (window.innerWidth > 980) closeMenu();
  });

  document.addEventListener("click", (event) => {
    if (!document.body.classList.contains("menu-open")) return;
    if (menuToggle?.contains(event.target) || nav?.contains(event.target)) return;
    closeMenu();
  });

  if (modalClose) {
    modalClose.addEventListener("click", closeProjectModal);
  }

  if (modal) {
    modal.addEventListener("click", (event) => {
      if (event.target instanceof HTMLElement && event.target.dataset.modalClose === "true") {
        closeProjectModal();
      }
    });
  }

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    if (document.body.classList.contains("menu-open")) closeMenu();
    if (!modal?.hidden) closeProjectModal();
  });

  if (input) {
    input.addEventListener("input", () => {
      window.clearTimeout(searchDebounceTimer);
      searchDebounceTimer = window.setTimeout(() => {
        loadProjects({ mode: getModeFromUI(), pageNumber: 1 });
      }, 220);
    });
    input.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        loadProjects({ mode: getModeFromUI(), pageNumber: 1 });
      }
    });
  }

  if (level) {
    level.addEventListener("change", () => loadProjects({ mode: getModeFromUI(), pageNumber: 1 }));
  }

  if (sort) {
    sort.addEventListener("change", () => loadProjects({ mode: getModeFromUI(), pageNumber: 1 }));
  }

  if (searchBtn) {
    searchBtn.addEventListener("click", () => loadProjects({ mode: getModeFromUI(), pageNumber: 1 }));
  }

  if (randomBtn) {
    randomBtn.addEventListener("click", () => {
      const sortControl = document.getElementById("sort");
      if (sortControl) sortControl.value = "default";
      loadProjects({ mode: "random", pageNumber: 1 });
    });
  }

  if (popularBtn) {
    popularBtn.addEventListener("click", () => {
      const sortControl = document.getElementById("sort");
      if (sortControl) sortControl.value = "likes";
      loadProjects({ mode: "likes", pageNumber: 1 });
    });
  }
}

function toggleMenu(forceOpen) {
  const nav = document.getElementById("siteNav");
  const button = document.getElementById("menuToggle");
  if (!nav || !button) return;

  const shouldOpen = typeof forceOpen === "boolean" ? forceOpen : !nav.classList.contains("open");
  nav.classList.toggle("open", shouldOpen);
  document.body.classList.toggle("menu-open", shouldOpen);
  button.setAttribute("aria-expanded", String(shouldOpen));
}

function closeMenu() {
  toggleMenu(false);
}

function initChips() {
  const wrap = document.getElementById("chips");
  if (!wrap) return;

  const labels = ["Все темы", ...TAG_GROUPS.map((group) => group.label)];
  wrap.innerHTML = "";

  labels.forEach((label) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "chip" + ((label === "Все темы" && !state.activeCategory) || state.activeCategory === label ? " active" : "");
    button.textContent = label;
    button.addEventListener("click", () => {
      state.activeCategory = label === "Все темы" ? "" : (state.activeCategory === label ? "" : label);
      initChips();
      loadProjects({ mode: getModeFromUI(), pageNumber: 1 });
    });
    wrap.appendChild(button);
  });
}

async function loadProjects({ mode, pageNumber = 1 }) {
  const nextMode = mode || getModeFromUI();
  const requestId = ++state.requestId;

  if (nextMode === "page") {
    await loadPagedProjects(pageNumber, requestId);
    return;
  }

  await loadClientCollection(nextMode, pageNumber, requestId);
}

async function loadPagedProjects(pageNumber, requestId) {
  setLoadingState("Загружаю проекты...");

  try {
    const payload = await fetchProjectsPage({
      ...readFilterState(),
      page: pageNumber,
      perPage: PER_PAGE
    });

    if (requestId !== state.requestId) return;

    state.collectionMode = "page";
    state.page = payload.page || 1;
    state.total = payload.total || 0;
    state.totalPages = payload.pages || 0;
    state.renderedItems = payload.items;
    state.clientList = [];

    renderProjectResults(buildModeLabel("page"));
  } catch (error) {
    console.error("Не удалось загрузить проекты:", error);
    renderFailureState();
  }
}

async function loadClientCollection(mode, pageNumber, requestId) {
  setLoadingState(mode === "random" ? "Собираю случайную подборку..." : "Считаю подборку по лайкам...");

  try {
    let list = await fetchProjectCollection(readFilterState());

    if (mode === "likes") {
      list = [...list].sort((a, b) => {
        const byLikes = (likes[b.title] || 0) - (likes[a.title] || 0);
        return byLikes || a.title.localeCompare(b.title, "ru");
      });
    } else if (mode === "random") {
      list = shuffleList(list);
    }

    if (requestId !== state.requestId) return;

    state.collectionMode = mode;
    state.clientList = list;
    state.total = list.length;
    state.totalPages = list.length ? Math.ceil(list.length / PER_PAGE) : 0;
    state.page = clamp(pageNumber, 1, Math.max(state.totalPages, 1));

    renderProjectResults(buildModeLabel(mode));
  } catch (error) {
    console.error("Не удалось собрать подборку проектов:", error);
    renderFailureState();
  }
}

function renderProjectResults(modeLabel) {
  const res = document.getElementById("res");
  const meta = document.getElementById("meta");
  const pagination = document.getElementById("pagination");
  if (!res || !meta || !pagination) return;

  res.innerHTML = "";
  pagination.innerHTML = "";

  const items = state.collectionMode === "page"
    ? state.renderedItems
    : state.clientList.slice((state.page - 1) * PER_PAGE, state.page * PER_PAGE);

  state.renderedItems = items;

  if (!items.length) {
    meta.textContent = `${modeLabel}: ничего не найдено.`;
    res.innerHTML = "<div class=\"status-empty\">Нет проектов с такими параметрами. Попробуйте снять часть фильтров или выбрать другую тему.</div>";
    return;
  }

  meta.textContent = `${modeLabel}: ${state.total} проектов | страница ${state.page} из ${Math.max(state.totalPages, 1)}`;

  items.forEach((project) => {
    const isSaved = isProjectSaved(project.title);
    res.appendChild(createProjectCard(project, [
      {
        label: `❤️ ${likes[project.title] || 0}`,
        onClick: () => likeProject(project.title)
      },
      {
        label: isSaved ? "✓ В избранном" : "💾 Сохранить",
        onClick: () => saveProject(project),
        variant: isSaved ? "ghost" : "secondary",
        disabled: isSaved
      },
      {
        label: "Подробнее",
        onClick: () => openProjectModal(project),
        variant: "ghost",
        className: "card-details"
      }
    ]));
  });

  if (state.totalPages > 1) {
    renderPagination(pagination, state.totalPages, state.page, (nextPage) => {
      if (state.collectionMode === "page") {
        loadProjects({ mode: "page", pageNumber: nextPage });
      } else {
        state.page = nextPage;
        renderProjectResults(buildModeLabel(state.collectionMode));
        scrollToSection("projects");
      }
    });
  }
}

function createProjectCard(project, actions = []) {
  const card = document.createElement("article");
  card.className = "card";

  const title = document.createElement("h3");
  title.textContent = `${project.title} 🚀`;
  card.appendChild(title);

  const tags = document.createElement("div");
  tags.className = "tag-cloud";
  project.tagList.forEach((tag) => {
    const badge = document.createElement("span");
    badge.className = "tag";
    badge.style.background = colorForTag(tag);
    badge.textContent = tag;
    tags.appendChild(badge);
  });
  card.appendChild(tags);

  card.appendChild(createParagraph(`📝 ${project.desc || "Описание не указано."}`));
  card.appendChild(createParagraph(`🎯 Цель: ${project.goal || "Не указана."}`, true));
  card.appendChild(createParagraph(`📋 Этапы: ${project.steps || "Не указаны."}`, true));

  const level = document.createElement("p");
  level.style.color = levelColor(project.level);
  level.style.fontWeight = "800";
  level.textContent = `${levelIcon(project.level)} ${String(project.level || "").toUpperCase()}`;
  card.appendChild(level);

  const actionsWrap = document.createElement("div");
  actionsWrap.className = "card-actions";

  actions.forEach((action) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = [
      "btn",
      action.variant === "secondary" ? "secondary" : "",
      action.variant === "ghost" ? "ghost" : "",
      action.className || ""
    ].filter(Boolean).join(" ");
    button.textContent = action.label;
    button.disabled = Boolean(action.disabled);
    if (!action.disabled) {
      button.addEventListener("click", action.onClick);
    }
    actionsWrap.appendChild(button);
  });

  card.appendChild(actionsWrap);
  return card;
}

async function openProjectModal(project) {
  const modal = document.getElementById("projectModal");
  if (!modal) return;

  closeMenu();
  state.activeModalProject = normalizeProject(project);
  renderProjectModal(state.activeModalProject, { loadRelated: true });
  modal.hidden = false;
  document.body.classList.add("modal-open");
  document.getElementById("projectModalClose")?.focus();
}

function closeProjectModal() {
  const modal = document.getElementById("projectModal");
  if (!modal) return;

  modal.hidden = true;
  document.body.classList.remove("modal-open");
  state.activeModalProject = null;
  const copyStatus = document.getElementById("projectModalCopyStatus");
  if (copyStatus) copyStatus.textContent = "";
}

function renderProjectModal(project, options = {}) {
  const normalized = normalizeProject(project);
  state.activeModalProject = normalized;

  const title = document.getElementById("projectModalTitle");
  const tags = document.getElementById("projectModalTags");
  const meta = document.getElementById("projectModalMeta");
  const body = document.getElementById("projectModalBody");
  const actions = document.getElementById("projectModalActions");
  const copyStatus = document.getElementById("projectModalCopyStatus");
  if (!title || !tags || !meta || !body || !actions || !copyStatus) return;

  title.textContent = normalized.title;
  tags.innerHTML = normalized.tagList.map((tag) => `<span class="tag" style="background:${colorForTag(tag)}">${escapeHtml(tag)}</span>`).join("");
  meta.innerHTML = [
    `<span class="modal-pill">${levelIcon(normalized.level)} ${escapeHtml(String(normalized.level || "").toUpperCase())}</span>`,
    `<span class="modal-pill">❤️ ${likes[normalized.title] || 0}</span>`,
    `<span class="modal-pill">${normalized.tagList.length} ${pluralize(normalized.tagList.length, "категория", "категории", "категорий")}</span>`
  ].join("");

  body.innerHTML = `
    <section class="modal-section">
      <h4>О чём проект</h4>
      <p>${escapeHtml(normalized.desc || "Описание не указано.")}</p>
    </section>
    <section class="modal-section">
      <h4>Цель проекта</h4>
      <p>${escapeHtml(normalized.goal || "Цель не указана.")}</p>
    </section>
    <section class="modal-section">
      <h4>Этапы работы</h4>
      ${buildStepsMarkup(normalized.steps)}
    </section>
  `;

  copyStatus.textContent = "";
  renderProjectModalActions(normalized);

  if (options.loadRelated) {
    loadSimilarProjects(normalized);
  }
}

function renderProjectModalActions(project) {
  const actions = document.getElementById("projectModalActions");
  if (!actions) return;

  const isSaved = isProjectSaved(project.title);
  actions.innerHTML = "";

  const buttons = [
    {
      label: "📋 Скопировать идею",
      variant: "",
      onClick: (event) => copyProjectIdea(project, event.currentTarget)
    },
    {
      label: isSaved ? "🗑️ Удалить из избранного" : "💾 Сохранить в избранное",
      variant: isSaved ? "secondary" : "secondary",
      onClick: () => {
        if (isSaved) {
          removeSavedProject(project.title);
        } else {
          saveProject(project);
        }
        refreshOpenProjectModal();
      }
    },
    {
      label: `❤️ Поставить лайк (${likes[project.title] || 0})`,
      variant: "ghost",
      onClick: () => {
        likeProject(project.title);
        refreshOpenProjectModal();
      }
    }
  ];

  buttons.forEach((item) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = ["btn", item.variant].filter(Boolean).join(" ");
    button.textContent = item.label;
    button.addEventListener("click", item.onClick);
    actions.appendChild(button);
  });
}

function refreshOpenProjectModal() {
  if (!state.activeModalProject) return;
  renderProjectModal(state.activeModalProject, { loadRelated: false });
}

async function loadSimilarProjects(project) {
  const relatedWrap = document.getElementById("projectModalRelated");
  if (!relatedWrap) return;

  relatedWrap.innerHTML = "<div class=\"loading-state\">Подбираю похожие проекты...</div>";

  try {
    const catalog = await ensureCatalogProjects();
    if (!state.activeModalProject || state.activeModalProject.title !== project.title) return;

    const related = findSimilarProjects(project, catalog, 4);
    if (!related.length) {
      relatedWrap.innerHTML = "<div class=\"status-empty\">Пока не нашлось похожих тем. Попробуйте открыть другой проект или посмотреть общую выдачу.</div>";
      return;
    }

    relatedWrap.innerHTML = "";
    related.forEach((entry) => {
      relatedWrap.appendChild(createRelatedCard(entry));
    });
  } catch (error) {
    console.error("Не удалось подобрать похожие проекты:", error);
    relatedWrap.innerHTML = "<div class=\"status-empty\">Не удалось подобрать похожие темы прямо сейчас.</div>";
  }
}

async function ensureCatalogProjects() {
  if (state.catalogProjects) return state.catalogProjects;
  if (state.catalogPromise) return state.catalogPromise;

  state.catalogPromise = (async () => {
    try {
      const payload = await requestServerProjects({ full: "1" });
      return payload.items.map(normalizeProject);
    } catch (error) {
      return loadFallbackProjects();
    }
  })();

  const catalog = await state.catalogPromise;
  state.catalogProjects = catalog.map(normalizeProject);
  state.catalogPromise = null;
  return state.catalogProjects;
}

function findSimilarProjects(project, catalog, limit = 4) {
  const tagSet = new Set(project.tagList);
  const ranked = catalog
    .filter((item) => item.title !== project.title)
    .map((item) => {
      const sharedTags = item.tagList.filter((tag) => tagSet.has(tag));
      const sameLevelBonus = item.level === project.level ? 2 : 0;
      const score = sharedTags.length * 10 + sameLevelBonus;
      return { project: item, sharedTags, score };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score || a.project.title.localeCompare(b.project.title, "ru"));

  if (ranked.length >= limit) {
    return ranked.slice(0, limit);
  }

  const fallback = catalog
    .filter((item) => item.title !== project.title && !ranked.some((entry) => entry.project.title === item.title))
    .map((item) => ({
      project: item,
      sharedTags: [],
      score: item.level === project.level ? 1 : 0
    }))
    .filter((item) => item.score > 0)
    .sort((a, b) => a.project.title.localeCompare(b.project.title, "ru"));

  return [...ranked, ...fallback].slice(0, limit);
}

function createRelatedCard(entry) {
  const card = document.createElement("article");
  card.className = "related-card";

  const title = document.createElement("h5");
  title.textContent = entry.project.title;
  card.appendChild(title);

  const tags = document.createElement("div");
  tags.className = "related-tags";
  const displayTags = entry.sharedTags.length ? entry.sharedTags : entry.project.tagList.slice(0, 3);
  displayTags.forEach((tag) => {
    const badge = document.createElement("span");
    badge.className = "related-tag";
    badge.textContent = tag;
    tags.appendChild(badge);
  });
  card.appendChild(tags);

  const summary = document.createElement("p");
  summary.textContent = truncateText(entry.project.desc || "Описание не указано.", 120);
  card.appendChild(summary);

  const button = document.createElement("button");
  button.type = "button";
  button.className = "btn ghost small";
  button.textContent = "Открыть проект";
  button.addEventListener("click", () => openProjectModal(entry.project));
  card.appendChild(button);

  return card;
}

async function hydrateLegacySavedProjects() {
  if (savedProjects.length || !legacySavedTitles.length) return;

  try {
    const hydrated = await fetchProjectsByTitles(legacySavedTitles);
    if (hydrated.length) {
      savedProjects = mergeSavedProjects(hydrated, []);
      persistSavedProjects();
    }
  } catch (error) {
    console.warn("Не удалось восстановить старое избранное:", error);
  }
}

function renderSavedProjects() {
  const wrap = document.getElementById("savedListFull");
  const meta = document.getElementById("favCount");
  if (!wrap || !meta) return;

  wrap.innerHTML = "";
  savedProjects = savedProjects.map(normalizeProject);

  if (!savedProjects.length) {
    meta.textContent = "Нет сохранённых проектов";
    wrap.innerHTML = "<div class=\"status-empty\">Добавьте проекты в избранное, и они появятся здесь.</div>";
    return;
  }

  const pages = Math.ceil(savedProjects.length / PER_PAGE);
  state.savedPage = clamp(state.savedPage || 1, 1, Math.max(pages, 1));
  const start = (state.savedPage - 1) * PER_PAGE;
  const items = savedProjects.slice(start, start + PER_PAGE);

  meta.textContent = `Сохранено проектов: ${savedProjects.length} | страница ${state.savedPage} из ${pages}`;

  items.forEach((project) => {
    wrap.appendChild(createProjectCard(project, [
      {
        label: "📄 TXT",
        onClick: () => exportProject(project)
      },
      {
        label: "🗑️ Удалить",
        onClick: () => removeSavedProject(project.title),
        variant: "secondary"
      },
      {
        label: "Подробнее",
        onClick: () => openProjectModal(project),
        variant: "ghost",
        className: "card-details"
      }
    ]));
  });

  if (pages > 1) {
    const pagination = document.createElement("div");
    pagination.className = "pagination";
    renderPagination(pagination, pages, state.savedPage, (nextPage) => {
      state.savedPage = nextPage;
      renderSavedProjects();
      scrollToSection("favorites");
    });
    wrap.appendChild(pagination);
  }
}

function renderPagination(container, pages, activePage, onPageClick) {
  container.innerHTML = "";
  
  if (pages <= 1) return;
  
  const paginationWrapper = document.createElement("div");
  paginationWrapper.className = "pagination-modern";
  
  if (activePage > 1) {
    const firstBtn = createPaginationButton("⬅ Первая", 1, activePage === 1, onPageClick);
    paginationWrapper.appendChild(firstBtn);
  }
  
  if (activePage > 1) {
    const prevBtn = createPaginationButton("◀", activePage - 1, false, onPageClick);
    prevBtn.className = "page-btn prev-btn";
    paginationWrapper.appendChild(prevBtn);
  }
  
  const startPage = Math.max(1, activePage - 2);
  const endPage = Math.min(pages, activePage + 2);
  
  if (startPage > 1) {
    const dots = document.createElement("span");
    dots.className = "pagination-dots";
    dots.textContent = "...";
    paginationWrapper.appendChild(dots);
  }
  
  for (let i = startPage; i <= endPage; i++) {
    const btn = createPaginationButton(String(i), i, i === activePage, onPageClick);
    if (i === activePage) {
      btn.classList.add("active");
    }
    paginationWrapper.appendChild(btn);
  }
  
  if (endPage < pages) {
    const dots = document.createElement("span");
    dots.className = "pagination-dots";
    dots.textContent = "...";
    paginationWrapper.appendChild(dots);
  }
  
  if (activePage < pages) {
    const nextBtn = createPaginationButton("▶", activePage + 1, false, onPageClick);
    nextBtn.className = "page-btn next-btn";
    paginationWrapper.appendChild(nextBtn);
  }
  
  if (activePage < pages) {
    const lastBtn = createPaginationButton("Последняя ➡", pages, activePage === pages, onPageClick);
    paginationWrapper.appendChild(lastBtn);
  }
  
  const info = document.createElement("div");
  info.className = "pagination-info";
  info.textContent = `Страница ${activePage} из ${pages}`;
  paginationWrapper.appendChild(info);
  
  container.appendChild(paginationWrapper);
}

function createPaginationButton(text, pageNumber, isActive, onPageClick) {
  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = "page-btn";
  btn.textContent = text;
  btn.addEventListener("click", () => onPageClick(pageNumber));
  if (isActive) {
    btn.classList.add("active");
  }
  return btn;
}

function likeProject(title) {
  likes[title] = (likes[title] || 0) + 1;
  writeStorage("pf_likes", likes);

  if (state.collectionMode === "likes") {
    state.clientList = [...state.clientList].sort((a, b) => {
      const byLikes = (likes[b.title] || 0) - (likes[a.title] || 0);
      return byLikes || a.title.localeCompare(b.title, "ru");
    });
  }

  renderProjectResults(buildModeLabel(state.collectionMode));
}

function isProjectSaved(title) {
  return savedProjects.some((project) => project.title === title);
}

function saveProject(project) {
  if (isProjectSaved(project.title)) return;
  savedProjects = mergeSavedProjects([project], savedProjects);
  persistSavedProjects();
  renderSavedProjects();
  renderProjectResults(buildModeLabel(state.collectionMode));
}

function removeSavedProject(title) {
  savedProjects = savedProjects.filter((project) => project.title !== title);
  persistSavedProjects();
  renderSavedProjects();
  renderProjectResults(buildModeLabel(state.collectionMode));
}

function exportProject(project) {
  const content = [
    project.title,
    `Категории: ${project.tagList.join(", ")}`,
    `Сложность: ${project.level}`,
    "",
    `Описание: ${project.desc || ""}`,
    "",
    `Цель: ${project.goal || ""}`,
    "",
    `Этапы: ${project.steps || ""}`
  ].join("\n");

  const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `${project.title.replace(/[^a-zA-Zа-яА-Я0-9]/g, "_")}.txt`;
  link.click();
  URL.revokeObjectURL(link.href);
}

async function fetchProjectsPage(filters) {
  try {
    const payload = await requestServerProjects({
      search: filters.search,
      category: filters.category,
      level: filters.level,
      sort: filters.sort === "title" ? "title" : "default",
      page: filters.page,
      perPage: filters.perPage
    });

    return {
      items: payload.items.map(normalizeProject),
      total: payload.total,
      page: payload.page,
      pages: payload.pages
    };
  } catch (error) {
    const allProjects = await loadFallbackProjects();
    let filtered = filterProjects(allProjects, filters);
    filtered = sortProjects(filtered, filters.sort);
    return paginateProjects(filtered, filters.page, filters.perPage);
  }
}

async function fetchProjectCollection(filters) {
  try {
    const payload = await requestServerProjects({
      search: filters.search,
      category: filters.category,
      level: filters.level,
      sort: filters.sort === "title" ? "title" : "default",
      full: "1"
    });
    return payload.items.map(normalizeProject);
  } catch (error) {
    const allProjects = await loadFallbackProjects();
    return sortProjects(filterProjects(allProjects, filters), filters.sort);
  }
}

async function fetchProjectsByTitles(titles) {
  if (!titles.length) return [];

  try {
    const payload = await requestServerProjects({ titles: titles.join(",") });
    return payload.items.map(normalizeProject);
  } catch (error) {
    const allProjects = await loadFallbackProjects();
    const titleSet = new Set(titles);
    return allProjects.filter((project) => titleSet.has(project.title));
  }
}

async function requestServerProjects(params) {
  if (state.serverAvailable === false) {
    throw new Error("Project API unavailable");
  }

  const query = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    if (value === undefined || value === null || value === "") return;
    query.set(key, String(value));
  });

  try {
    const response = await fetch(`projects?${query.toString()}`, {
      headers: { Accept: "application/json" }
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    state.serverAvailable = true;
    return response.json();
  } catch (error) {
    state.serverAvailable = false;
    throw error;
  }
}

async function loadFallbackProjects() {
  if (state.fallbackProjects) return state.fallbackProjects;

  const response = await fetch("projects.json");
  if (!response.ok) {
    throw new Error(`Не удалось открыть projects.json: ${response.status}`);
  }

  const raw = await response.json();
  state.fallbackProjects = raw.map(normalizeProject);
  return state.fallbackProjects;
}

function normalizeProject(project) {
  const tagList = Array.isArray(project.tagList) && project.tagList.length ? project.tagList : parseTags(project.tags || "");
  const searchText = [
    project.title || "",
    project.tags || "",
    project.desc || "",
    project.goal || "",
    project.steps || "",
    tagList.join(" ")
  ].join(" ").toLowerCase();

  return {
    ...project,
    tagList,
    searchText
  };
}

function filterProjects(projects, filters) {
  const query = String(filters.search || "").toLowerCase();
  return projects.filter((project) => {
    const matchesSearch = !query || project.searchText.includes(query);
    const matchesCategory = !filters.category || project.tagList.includes(filters.category);
    const matchesLevel = !filters.level || project.level === filters.level;
    return matchesSearch && matchesCategory && matchesLevel;
  });
}

function sortProjects(projects, sort) {
  if (sort === "title") {
    return [...projects].sort((a, b) => a.title.localeCompare(b.title, "ru"));
  }
  return [...projects];
}

function paginateProjects(projects, pageNumber, perPage) {
  const total = projects.length;
  const pages = total ? Math.ceil(total / perPage) : 0;
  const safePage = clamp(pageNumber, 1, Math.max(pages, 1));
  const start = (safePage - 1) * perPage;
  return {
    items: projects.slice(start, start + perPage),
    total,
    page: safePage,
    pages
  };
}

function parseTags(rawTags) {
  let remaining = String(rawTags || "").replace(/\s+/g, " ").trim();
  const result = [];

  while (remaining) {
    const lower = remaining.toLowerCase();
    const matcher = TAG_MATCHERS.find((item) => lower.startsWith(item.aliasLower));

    if (matcher) {
      pushUnique(result, matcher.label);
      remaining = remaining.slice(matcher.alias.length).trim();
      continue;
    }

    const parts = remaining.split(" ");
    pushUnique(result, parts[0]);
    remaining = parts.slice(1).join(" ").trim();
  }

  return result;
}

function readFilterState() {
  return {
    search: (document.getElementById("input")?.value || "").trim(),
    category: state.activeCategory,
    level: document.getElementById("level")?.value || "",
    sort: document.getElementById("sort")?.value || "default"
  };
}

function getModeFromUI() {
  const sortValue = document.getElementById("sort")?.value || "default";
  return sortValue === "likes" ? "likes" : "page";
}

function buildModeLabel(mode) {
  if (mode === "likes") return "Подборка по лайкам";
  if (mode === "random") return "Случайная подборка";
  const filters = readFilterState();
  if (filters.sort === "title") return "Отсортировано по названию";
  return "Подходящие проекты";
}

function setLoadingState(message) {
  const meta = document.getElementById("meta");
  const res = document.getElementById("res");
  const pagination = document.getElementById("pagination");
  if (!meta || !res || !pagination) return;

  meta.textContent = message;
  res.innerHTML = `<div class="loading-state">${message}</div>`;
  pagination.innerHTML = "";
}

function renderFailureState() {
  const meta = document.getElementById("meta");
  const res = document.getElementById("res");
  const pagination = document.getElementById("pagination");
  if (!meta || !res || !pagination) return;

  meta.textContent = "Не удалось загрузить проекты.";
  res.innerHTML = "<div class=\"status-empty\">Что-то пошло не так при загрузке базы проектов. Проверьте локальный сервер или доступность файла projects.json.</div>";
  pagination.innerHTML = "";
}

async function copyProjectIdea(project, button) {
  const text = buildProjectCopyText(project);
  const status = document.getElementById("projectModalCopyStatus");
  const labelBefore = button?.textContent || "";
  let copied = false;

  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      copied = true;
    }
  } catch (error) {
    copied = false;
  }

  if (!copied) {
    copied = fallbackCopyText(text);
  }

  if (status) {
    status.textContent = copied
      ? "Описание проекта скопировано в буфер обмена."
      : "Не удалось скопировать текст автоматически.";
  }

  if (button && copied) {
    button.textContent = "Скопировано";
    window.setTimeout(() => {
      button.textContent = labelBefore;
    }, 1400);
  }
}

function buildProjectCopyText(project) {
  return [
    project.title,
    `Категории: ${project.tagList.join(", ")}`,
    `Сложность: ${project.level}`,
    "",
    `Описание: ${project.desc || ""}`,
    "",
    `Цель: ${project.goal || ""}`,
    "",
    `Этапы: ${project.steps || ""}`
  ].join("\n");
}

function fallbackCopyText(text) {
  try {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "true");
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();
    const copied = document.execCommand("copy");
    textarea.remove();
    return copied;
  } catch (error) {
    return false;
  }
}

function buildStepsMarkup(steps) {
  const normalized = String(steps || "").trim();
  if (!normalized) {
    return "<p>Этапы пока не указаны.</p>";
  }

  if (!normalized.includes("→")) {
    return `<p>${escapeHtml(normalized)}</p>`;
  }

  const items = normalized
    .split(/\s*→\s*/)
    .map((item) => item.trim())
    .filter(Boolean)
    .map((item) => `<li>${escapeHtml(item)}</li>`)
    .join("");

  return `<ul>${items}</ul>`;
}

function createParagraph(text, strongPrefix = false) {
  const paragraph = document.createElement("p");
  if (!strongPrefix) {
    paragraph.textContent = text;
    return paragraph;
  }

  const [label, ...rest] = String(text).split(": ");
  const strong = document.createElement("b");
  strong.textContent = `${label}: `;
  paragraph.appendChild(strong);
  paragraph.append(rest.join(": "));
  return paragraph;
}

function levelColor(level) {
  if (level === "easy") return "#4ecdc4";
  if (level === "medium") return "#ffe66d";
  return "#ff6b6b";
}

function levelIcon(level) {
  if (level === "easy") return "⭐";
  if (level === "medium") return "⭐⭐";
  return "⭐⭐⭐";
}

function colorForTag(tag) {
  const hash = [...tag].reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return TAG_PALETTE[hash % TAG_PALETTE.length];
}

function truncateText(text, limit = 120) {
  const normalized = String(text || "").trim();
  if (normalized.length <= limit) return normalized;
  return `${normalized.slice(0, limit - 1).trim()}…`;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function mergeSavedProjects(source, target) {
  const merged = [...target];
  source.forEach((project) => {
    if (!merged.some((item) => item.title === project.title)) {
      merged.push(normalizeProject(project));
    }
  });
  return merged;
}

function persistSavedProjects() {
  writeStorage("pf_saved_projects", savedProjects.map(stripProjectForStorage));
  writeStorage("pf_saved_titles", savedProjects.map((project) => project.title));
}

function stripProjectForStorage(project) {
  return {
    title: project.title,
    tags: project.tags,
    tagList: project.tagList,
    level: project.level,
    desc: project.desc,
    goal: project.goal,
    steps: project.steps
  };
}

function shuffleList(list) {
  const result = [...list];
  for (let index = result.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [result[index], result[randomIndex]] = [result[randomIndex], result[index]];
  }
  return result;
}

function sanitizeLikes(value) {
  return value && typeof value === "object" && !Array.isArray(value) ? value : {};
}

function sanitizeSavedProjects(value) {
  if (!Array.isArray(value)) return [];
  return value.map(normalizeProject);
}

function readStorage(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (error) {
    return fallback;
  }
}

function writeStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.warn(`Не удалось сохранить ${key} в localStorage`, error);
  }
}

function scrollToSection(id) {
  const element = document.getElementById(id);
  if (!element) return;
  const top = Math.max(0, element.getBoundingClientRect().top + window.scrollY - 88);
  window.scrollTo({ top, behavior: "smooth" });
}

function clamp(value, min, max) {
  const number = Number(value);
  if (!Number.isFinite(number)) return min;
  return Math.min(Math.max(number, min), max);
}

function pushUnique(list, value) {
  if (!list.includes(value)) list.push(value);
}

function pluralize(number, one, few, many) {
  const mod10 = number % 10;
  const mod100 = number % 100;
  if (mod10 === 1 && mod100 !== 11) return one;
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return few;
  return many;
}

// Добавляем анимацию появления элементов при скролле
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Добавляем анимацию для карточек и секций
  const animatedElements = document.querySelectorAll('.card, .memo-card, .accordion, .teacher, .container h2');
  animatedElements.forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
    observer.observe(el);
  });
}

// Запускаем анимацию после загрузки страницы
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initScrollAnimations);
} else {
  initScrollAnimations();
}
