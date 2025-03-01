const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", "views");

const db = mysql.createConnection({
  host: "localhost",
  database: "school",
  user: "root",
  password: "",
});

db.connect((err) => {
  if (err) throw err;
  console.log("Database connected...");

  // Menampilkan daftar murid
  app.get("/", (req, res) => {
    const sql = "SELECT * FROM user";
    db.query(sql, (err, result) => {
      if (err) throw err;
      const users = JSON.parse(JSON.stringify(result));
      res.render("index", { users: users, title: "DAFTAR MURID KELAS" });
    });
  });

  // Menambahkan murid baru
  app.post("/tambah", (req, res) => {
    const insertSql = `INSERT INTO user (nama, kelas) VALUES ('${req.body.nama}', '${req.body.kelas}');`;
    db.query(insertSql, (err, result) => {
      if (err) throw err;
      res.redirect("/");
    });
  });

  // Menampilkan halaman edit
  app.get("/edit/:id", (req, res) => {
    const sql = `SELECT * FROM user WHERE id = ${req.params.id}`;
    db.query(sql, (err, result) => {
      if (err) throw err;
      res.render("edit", { user: result[0] });
    });
  });

  // Mengupdate data murid
  app.post("/update/:id", (req, res) => {
    const updateSql = `UPDATE user SET nama = '${req.body.nama}', kelas = '${req.body.kelas}' WHERE id = ${req.params.id}`;
    db.query(updateSql, (err, result) => {
      if (err) throw err;
      res.redirect("/");
    });
  });

  // Menghapus data murid
  app.post("/delete/:id", (req, res) => {
    const deleteSql = `DELETE FROM user WHERE id = ${req.params.id}`;
    db.query(deleteSql, (err, result) => {
      if (err) throw err;
      res.redirect("/");
    });
  });
});

app.listen(8000, () => {
  console.log("Server ready on port 8000...");
});