const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;
const PROJECTS_PATH = path.join(__dirname, "projects.json");
const RAW_PROJECTS = JSON.parse(fs.readFileSync(PROJECTS_PATH, "utf8"));

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

const PROJECTS = RAW_PROJECTS.map(normalizeProject);

app.use(express.static(__dirname));

app.get("/projects", (req, res) => {
  const titles = parseList(req.query.titles);
  const search = String(req.query.search || "").trim().toLowerCase();
  const category = String(req.query.category || "").trim();
  const level = String(req.query.level || "").trim();
  const sort = String(req.query.sort || "default");
  const full = req.query.full === "1";
  const perPage = Number(req.query.perPage || 5);
  const requestedPage = Number(req.query.page || 1);

  let data = PROJECTS;

  if (titles.length) {
    const titleSet = new Set(titles);
    data = data.filter((project) => titleSet.has(project.title));
  } else {
    if (category) {
      data = data.filter((project) => project.tagList.includes(category));
    }
    if (level) {
      data = data.filter((project) => project.level === level);
    }
    if (search) {
      data = data.filter((project) => project.searchText.includes(search));
    }
  }

  if (sort === "title") {
    data = [...data].sort((a, b) => a.title.localeCompare(b.title, "ru"));
  }

  const total = data.length;

  if (titles.length || full || !Number.isFinite(perPage) || perPage <= 0) {
    res.json({
      items: data,
      total,
      page: 1,
      pages: total > 0 ? 1 : 0
    });
    return;
  }

  const pages = Math.max(1, Math.ceil(total / perPage));
  const page = clamp(requestedPage, 1, pages);
  const start = (page - 1) * perPage;
  const items = data.slice(start, start + perPage);

  res.json({ items, total, page, pages });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

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

function parseList(value) {
  return String(value || "")
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

function clamp(value, min, max) {
  if (!Number.isFinite(value)) return min;
  return Math.min(Math.max(value, min), max);
}

function pushUnique(list, value) {
  if (!list.includes(value)) list.push(value);
}
