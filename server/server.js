import express from "express";
import cors from "cors";
import sqlite3 from "sqlite3";

const app = express();
const port = 8080;
sqlite3.verbose();

app.use(cors());

const db = new sqlite3.Database("./DB/dua_main.sqlite", (err) => {
  if (err) {
    console.error(err.message);
    process.exit(1);
  }
  console.log("Connected to SQLite database");
});

app.get("/api/dua/:id", (req, res) => {
  const sql = `SELECT * FROM dua WHERE cat_id = ${req.params.id}`;
  db.all(sql, (err, rows) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Error fetching data" });
    }

    res.json(rows);
  });
});

app.get("/api/categories", (req, res) => {
  const sql = "SELECT * FROM category";
  db.all(sql, (err, rows) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Error fetching data" });
    }

    res.json(rows);
  });
});

app.get("/api/subcategories/:id", (req, res) => {
  const sql = `SELECT * FROM sub_category WHERE cat_id = ${req.params.id}`;
  db.all(sql, (err, rows) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Error fetching data" });
    }

    res.json(rows);
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}!`);
});
