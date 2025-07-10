// server.js
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const journalRoutes = require("./routes/journals");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// Login endpoint (hardcoded)
app.post("/api/login", (req, res) => {
  const { username, password } = req.body;
  if (username === "admin" && password === "admin") {
    res.json({ success: true });
  } else {
    res.status(401).json({ success: false, message: "Invalid credentials" });
  }
});

// Journal API routes
app.use("/api/journals", journalRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
