// routes/journals.js
const express = require("express");
const router = express.Router();
const db = require("../db");

// GET all journals
router.get("/", (req, res) => {
  db.all(
    "SELECT * FROM journals ORDER BY date_created DESC",
    [],
    (err, rows) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json(rows);
    }
  );
});

// POST new journal
router.post("/", (req, res) => {
  const { title = "", content, date_created } = req.body;
  if (!content || !date_created) {
    return res.status(400).json({ error: "Missing content or date_created" });
  }

  db.run(
    "INSERT INTO journals (title, content, date_created) VALUES (?, ?, ?)",
    [title, content, date_created],
    function (err) {
      if (err) return res.status(500).json({ error: err.message });
      res.status(201).json({ id: this.lastID });
    }
  );
});

// PUT update journal
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { title = "", content } = req.body;

  db.run(
    "UPDATE journals SET title = ?, content = ? WHERE id = ?",
    [title, content, id],
    function (err) {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ updated: this.changes });
    }
  );
});

// DELETE journal
router.delete("/:id", (req, res) => {
  const { id } = req.params;

  db.run("DELETE FROM journals WHERE id = ?", id, function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ deleted: this.changes });
  });
});

module.exports = router;
