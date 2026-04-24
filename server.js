const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.static("."));

app.get("/projects", (req, res) => {
  let data = JSON.parse(fs.readFileSync("projects.json", "utf8"));
  const { search, category, level } = req.query;

  if (category && category !== "all") {
    data = data.filter(p => p.tags.includes(category));
  }
  if (level) {
    data = data.filter(p => p.level === level);
  }
  if (search) {
    const s = search.toLowerCase();
    data = data.filter(p =>
      p.title.toLowerCase().includes(s) ||
      p.tags.toLowerCase().includes(s) ||
      p.desc.toLowerCase().includes(s)
    );
  }

  res.json(data);
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});