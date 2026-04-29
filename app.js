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
        wide: true,
        body: `
          <p><b>1. Поиск проблемы.</b> Постановка проблемы — ключевой этап проекта. Правильно сформулированный вопрос уже содержит часть ответа.</p>
          <p><b>2. Тематизация.</b> Тема должна ясно фиксировать содержание и суть проекта для внешнего зрителя или пользователя.</p>
          <p><b>3. Цель проекта.</b> Цель формулируется кратко и точно, отражая основной результат, который хочет получить автор.</p>
          <p><b>4. Планирование.</b> До постановки задач полезно составить мини-план работы.</p>
          <p><b>5. Задачи.</b> Они показывают, что именно нужно сделать по шагам, чтобы достичь цели.</p>
          <p><b>6. Теоретическая часть.</b> Сбор и анализ информации из разных источников по предмету исследования.</p>
          <p><b>7. Практическая часть.</b> Здесь предлагается решение поставленной проблемы.</p>
          <p><b>8. Заключение.</b> Итог по выполненной работе и анализ полученных данных.</p>
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
        wide: true,
        body: `
          <p><b>Электронные форматы:</b> web-сайт, электронная газета, электронный номер журнала, компьютерная графика, публикация на сайте, 3D-модель.</p>
          <p><b>Печатные форматы:</b> сценарии мероприятий, статьи, альбомы, буклеты, брошюры, книга, интервью, обзор материалов, сказка, рассказ, стихи, постер, настольная игра.</p>
          <p><b>Творческие форматы:</b> видеоролик, документальный фильм, мультфильм, видеоклип, буктрейлер, дизайн-макет, конструкторская модель, музыкальное произведение, выставка, театральная постановка.</p>
          <p><b>Аналитические форматы:</b> научный доклад, бизнес-план, модель, макет, прогноз, сравнительный анализ, отчёт об экспедиции, анализ результатов опроса.</p>
          <p><b>Систематизирующие форматы:</b> схемы, чертежи, тематический атлас, коллекция, пакет рекомендаций, инструкция, путеводитель, справочник, словарь, проект лабораторной работы.</p>
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
        title: "Пример проекта",
        body: `
          <p>Можно посмотреть готовый пример, чтобы понять объём, структуру и подачу материала.</p>
          <a class="memo-link" href="https://disk.yandex.ru/i/GyXFaEq3DL-TWA" target="_blank" rel="noopener noreferrer">📥 Скачать пример проекта</a>
        `
      }
    ]
  }
];

const TAG_GROUPS = [
  { label: "искусственный интеллект", aliases: ["искусственный интеллект"] },
  { label: "роботы", aliases: ["роботы"] },
  { label: "виртуальная реальность", aliases: ["виртуальная реальность"] },
  { label: "Умные устройства", aliases: ["Умные устройства", "интернет вещей"] },
  { label: "игры", aliases: ["игры"] },
  { label: "безопасность", aliases: ["безопасность"] },
  { label: "кибербезопасность", aliases: ["кибербезопасность"] },
  { label: "финтех", aliases: ["финтех"] },
  { label: "образование", aliases: ["образование"] },
  { label: "здоровье", aliases: ["здоровье"] },
  { label: "климат", aliases: ["климат"] },
  { label: "блокчейн", aliases: ["блокчейн"] },
  { label: "маркетинг", aliases: ["маркетинг"] },
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
  { label: "астрономия", aliases: ["астрономия"] },
  { label: "психология", aliases: ["психология"] },
  { label: "социология", aliases: ["социология"] },
  { label: "право", aliases: ["право"] },
  { label: "экономика", aliases: ["экономика"] },
  { label: "политика", aliases: ["политика"] },
  { label: "медиа", aliases: ["медиа"] },
  { label: "гастрономия", aliases: ["гастрономия"] },
  { label: "мода", aliases: ["мода"] },
  { label: "архитектура", aliases: ["архитектура"] },
  { label: "фотография", aliases: ["фотография"] },
  { label: "кино", aliases: ["кино"] },
  { label: "театр", aliases: ["театр"] }
];

const TAG_MATCHERS = TAG_GROUPS
  .flatMap((group) => group.aliases.map((alias) => ({
    label: group.label,
    alias,
    aliasLower: alias.toLowerCase()
  })))
  .sort((a, b) => b.alias.length - a.alias.length);

const TAG_PALETTE = ["#ff6b6b", "#4ecdc4", "#ffe66d", "#a29bfe", "#fd79ab", "#00cec9", "#fab1a0", "#95e1d3"];
const PER_PAGE = 5;

const state = {
  activeCategory: "",
  page: 1,
  collectionMode: "page",
  total: 0,
  totalPages: 0,
  renderedItems: [],
  clientList: [],
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
    res.appendChild(createProjectCard(project, {
      primaryLabel: `❤️ ${likes[project.title] || 0}`,
      onPrimary: () => likeProject(project.title),
      secondaryLabel: savedProjects.some((item) => item.title === project.title) ? "✓ В избранном" : "💾 Сохранить",
      onSecondary: () => saveProject(project),
      secondaryVariant: savedProjects.some((item) => item.title === project.title) ? "ghost" : "secondary"
    }));
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

function createProjectCard(project, actions) {
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

  const primaryButton = document.createElement("button");
  primaryButton.type = "button";
  primaryButton.className = "btn";
  primaryButton.textContent = actions.primaryLabel;
  primaryButton.addEventListener("click", actions.onPrimary);
  actionsWrap.appendChild(primaryButton);

  const secondaryButton = document.createElement("button");
  secondaryButton.type = "button";
  secondaryButton.className = `btn${actions.secondaryVariant === "secondary" ? " secondary" : actions.secondaryVariant === "ghost" ? " ghost" : ""}`;
  secondaryButton.textContent = actions.secondaryLabel;
  secondaryButton.disabled = actions.secondaryVariant === "ghost";
  secondaryButton.addEventListener("click", actions.onSecondary);
  actionsWrap.appendChild(secondaryButton);

  card.appendChild(actionsWrap);
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
    wrap.appendChild(createProjectCard(project, {
      primaryLabel: "📄 TXT",
      onPrimary: () => exportProject(project),
      secondaryLabel: "🗑️ Удалить",
      onSecondary: () => removeSavedProject(project.title),
      secondaryVariant: "secondary"
    }));
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
  for (let pageNumber = 1; pageNumber <= pages; pageNumber += 1) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "page-btn" + (pageNumber === activePage ? " active" : "");
    button.textContent = String(pageNumber);
    button.addEventListener("click", () => onPageClick(pageNumber));
    container.appendChild(button);
  }
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

function saveProject(project) {
  if (savedProjects.some((item) => item.title === project.title)) return;
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
