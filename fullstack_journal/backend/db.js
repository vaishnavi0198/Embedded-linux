const sqlite3 = require("sqlite3");
const db = new sqlite3.Database("./journals.db");

// Create table if not exists
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS journals (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT,
      content TEXT NOT NULL,
      date_created TEXT NOT NULL
    );
  `);
});

module.exports = db;
