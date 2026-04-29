const MEMO_CARDS = [
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
        <li>В течение 2 недель дети записывают свои вопросы, а если ещё не умеют писать, им помогает тьютор.</li>
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
  },
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
    wide: true,
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
    wide: true,
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
  },
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

let projects = [];
let current = [];
let savedProjects = [];
let activeCategory = "";
let page = 1;
let favPage = 1;
let likes = readStorage("pf_likes", {});
let savedTitles = readStorage("pf_saved_titles", []);

document.addEventListener("DOMContentLoaded", () => {
  renderMemo();
  bindControls();
  loadProjects();
});

function renderMemo() {
  const container = document.getElementById("memoCards");
  if (!container) return;

  container.innerHTML = MEMO_CARDS.map((card) => `
    <article class="memo-card${card.wide ? " wide" : ""}">
      <h3>${card.title}</h3>
      ${card.body}
    </article>
  `).join("");
}

function bindControls() {
  const input = document.getElementById("input");
  const level = document.getElementById("level");
  const sort = document.getElementById("sort");
  const searchBtn = document.getElementById("searchBtn");
  const randomBtn = document.getElementById("randomBtn");
  const popularBtn = document.getElementById("popularBtn");

  if (input) {
    input.addEventListener("input", applySearch);
    input.addEventListener("keydown", (event) => {
      if (event.key === "Enter") applySearch();
    });
  }
  if (level) level.addEventListener("change", applySearch);
  if (sort) sort.addEventListener("change", applySearch);
  if (searchBtn) searchBtn.addEventListener("click", applySearch);
  if (randomBtn) randomBtn.addEventListener("click", randomProjects);
  if (popularBtn) popularBtn.addEventListener("click", showPopular);
}

async function loadProjects() {
  let rawProjects;

  try {
    const response = await fetch("projects.json");
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    rawProjects = await response.json();
  } catch (error) {
    console.error("Ошибка загрузки projects.json:", error);
    rawProjects = [
      {
        title: "Создание сайта-визитки",
        tags: "программирование образование",
        level: "easy",
        desc: "Разработка сайта-визитки для школы",
        goal: "Освоить базовую вёрстку",
        steps: "HTML/CSS → макет → код → хостинг"
      }
    ];
  }

  projects = rawProjects.map(normalizeProject);
  savedTitles = savedTitles.filter((title) => projects.some((project) => project.title === title));
  writeStorage("pf_saved_titles", savedTitles);

  initChips();
  render(projects);
  loadSaved();
}

function normalizeProject(project) {
  const tagList = parseTags(project.tags || "");
  const searchParts = [
    project.title || "",
    project.tags || "",
    project.desc || "",
    project.goal || "",
    project.steps || "",
    tagList.join(" ")
  ];

  return {
    ...project,
    tagList,
    searchText: searchParts.join(" ").toLowerCase()
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

function initChips() {
  const chipWrap = document.getElementById("chips");
  if (!chipWrap) return;

  const labels = ["Все темы", ...TAG_GROUPS.map((group) => group.label)];
  chipWrap.innerHTML = "";

  labels.forEach((label) => {
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = "chip" + ((label === "Все темы" && !activeCategory) || activeCategory === label ? " active" : "");
    chip.textContent = label;
    chip.addEventListener("click", () => {
      activeCategory = label === "Все темы" ? "" : (activeCategory === label ? "" : label);
      initChips();
      applySearch();
    });
    chipWrap.appendChild(chip);
  });
}

function applySearch() {
  page = 1;
  const input = document.getElementById("input");
  const level = document.getElementById("level");
  const sort = document.getElementById("sort");
  const query = (input?.value || "").trim().toLowerCase();
  const levelValue = level?.value || "";
  const sortValue = sort?.value || "default";

  let list = projects.filter((project) => {
    const matchesQuery = !query || project.searchText.includes(query);
    const matchesLevel = !levelValue || project.level === levelValue;
    const matchesCategory = !activeCategory || project.tagList.includes(activeCategory);
    return matchesQuery && matchesLevel && matchesCategory;
  });

  if (sortValue === "likes") {
    list = [...list].sort((a, b) => (likes[b.title] || 0) - (likes[a.title] || 0));
  } else if (sortValue === "title") {
    list = [...list].sort((a, b) => a.title.localeCompare(b.title, "ru"));
  }

  render(list);
}

function randomProjects() {
  page = 1;
  const shuffled = [...projects].sort(() => Math.random() - 0.5);
  render(shuffled);
}

function showPopular() {
  page = 1;
  const sorted = [...projects].sort((a, b) => (likes[b.title] || 0) - (likes[a.title] || 0));
  render(sorted);
}

function render(list) {
  const res = document.getElementById("res");
  const meta = document.getElementById("meta");
  const pagination = document.getElementById("pagination");
  if (!res || !meta || !pagination) return;

  current = list;
  res.innerHTML = "";
  pagination.innerHTML = "";

  if (!list.length) {
    meta.textContent = "По запросу ничего не найдено.";
    res.innerHTML = "<div class=\"status-empty\">Нет проектов с такими параметрами. Попробуйте снять часть фильтров или выбрать другую тему.</div>";
    return;
  }

  const pages = Math.max(1, Math.ceil(list.length / PER_PAGE));
  page = Math.min(page, pages);
  const start = (page - 1) * PER_PAGE;
  const pageItems = list.slice(start, start + PER_PAGE);

  meta.textContent = `${list.length} проектов | страница ${page} из ${pages}`;
  pageItems.forEach((project, index) => {
    res.appendChild(renderProjectCard(project, {
      primaryText: `❤️ ${likes[project.title] || 0}`,
      primaryAction: () => like(project.title),
      secondaryText: "💾 Сохранить",
      secondaryAction: () => saveItem(start + index),
      secondaryVariant: "secondary"
    }));
  });

  renderPagination(pagination, pages, page, (nextPage) => {
    page = nextPage;
    render(current);
    scrollToSection("projects");
  });
}

function renderProjectCard(project, actions) {
  const card = document.createElement("article");
  card.className = "card";

  const title = document.createElement("h3");
  title.textContent = `${project.title} 🚀`;
  card.appendChild(title);

  const tagCloud = document.createElement("div");
  tagCloud.className = "tag-cloud";
  project.tagList.forEach((tag) => {
    const tagElement = document.createElement("span");
    tagElement.className = "tag";
    tagElement.style.background = colorForTag(tag);
    tagElement.textContent = tag;
    tagCloud.appendChild(tagElement);
  });
  card.appendChild(tagCloud);

  card.appendChild(createParagraph(`📝 ${project.desc}`));
  card.appendChild(createParagraph(`🎯 Цель: ${project.goal}`, true));
  card.appendChild(createParagraph(`📋 Этапы: ${project.steps}`, true));

  const level = document.createElement("p");
  level.style.color = levelColor(project.level);
  level.style.fontWeight = "800";
  level.textContent = `${levelIcon(project.level)} ${String(project.level || "").toUpperCase()}`;
  card.appendChild(level);

  const actionsWrap = document.createElement("div");
  actionsWrap.className = "card-actions";

  const primaryBtn = document.createElement("button");
  primaryBtn.type = "button";
  primaryBtn.className = "btn";
  primaryBtn.textContent = actions.primaryText;
  primaryBtn.addEventListener("click", actions.primaryAction);
  actionsWrap.appendChild(primaryBtn);

  const secondaryBtn = document.createElement("button");
  secondaryBtn.type = "button";
  secondaryBtn.className = `btn${actions.secondaryVariant === "secondary" ? " secondary" : ""}`;
  secondaryBtn.textContent = actions.secondaryText;
  secondaryBtn.addEventListener("click", actions.secondaryAction);
  actionsWrap.appendChild(secondaryBtn);

  card.appendChild(actionsWrap);
  return card;
}

function loadSaved() {
  const listWrap = document.getElementById("savedListFull");
  const count = document.getElementById("favCount");
  if (!listWrap || !count) return;

  savedProjects = savedTitles
    .map((title) => projects.find((project) => project.title === title))
    .filter(Boolean);

  listWrap.innerHTML = "";

  if (!savedProjects.length) {
    favPage = 1;
    count.textContent = "Нет сохранённых проектов";
    listWrap.innerHTML = "<div class=\"status-empty\">Добавьте проекты в избранное, и они появятся здесь.</div>";
    return;
  }

  const pages = Math.max(1, Math.ceil(savedProjects.length / PER_PAGE));
  favPage = Math.min(favPage, pages);
  const start = (favPage - 1) * PER_PAGE;
  const items = savedProjects.slice(start, start + PER_PAGE);

  count.textContent = `Сохранено проектов: ${savedProjects.length} | страница ${favPage} из ${pages}`;

  items.forEach((project, index) => {
    const card = renderProjectCard(project, {
      primaryText: "📄 TXT",
      primaryAction: () => exportOne(start + index),
      secondaryText: "🗑️ Удалить",
      secondaryAction: () => removeSaved(start + index),
      secondaryVariant: "secondary"
    });
    listWrap.appendChild(card);
  });

  if (pages > 1) {
    const pagination = document.createElement("div");
    pagination.className = "pagination";
    renderPagination(pagination, pages, favPage, (nextPage) => {
      favPage = nextPage;
      loadSaved();
      scrollToSection("favorites");
    });
    listWrap.appendChild(pagination);
  }
}

function renderPagination(container, pages, activePage, onPageClick) {
  container.innerHTML = "";
  for (let i = 1; i <= pages; i += 1) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "page-btn" + (i === activePage ? " active" : "");
    btn.textContent = String(i);
    btn.addEventListener("click", () => onPageClick(i));
    container.appendChild(btn);
  }
}

function like(title) {
  likes[title] = (likes[title] || 0) + 1;
  writeStorage("pf_likes", likes);
  render(current);
  loadSaved();
}

function saveItem(index) {
  const project = current[index];
  if (!project || savedTitles.includes(project.title)) return;
  savedTitles.push(project.title);
  writeStorage("pf_saved_titles", savedTitles);
  loadSaved();
}

function removeSaved(index) {
  const project = savedProjects[index];
  if (!project) return;
  savedTitles = savedTitles.filter((title) => title !== project.title);
  writeStorage("pf_saved_titles", savedTitles);
  loadSaved();
}

function exportOne(index) {
  const project = savedProjects[index];
  if (!project) return;

  const content = [
    project.title,
    `Категории: ${project.tagList.join(", ")}`,
    `Сложность: ${project.level}`,
    "",
    `Описание: ${project.desc}`,
    "",
    `Цель: ${project.goal}`,
    "",
    `Этапы: ${project.steps}`
  ].join("\n");

  const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `${project.title.replace(/[^a-zA-Zа-яА-Я0-9]/g, "_")}.txt`;
  link.click();
  URL.revokeObjectURL(link.href);
}

function createParagraph(text, boldPrefix = false) {
  const paragraph = document.createElement("p");
  if (!boldPrefix) {
    paragraph.textContent = text || "";
    return paragraph;
  }

  const [label, ...rest] = String(text || "").split(": ");
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

function scrollToSection(id) {
  const element = document.getElementById(id);
  if (!element) return;
  const top = Math.max(0, element.getBoundingClientRect().top + window.scrollY - 90);
  window.scrollTo({ top, behavior: "smooth" });
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

function pushUnique(list, value) {
  if (!list.includes(value)) list.push(value);
}
