const express = require("express");
const app = express();
const PORT = 3000;

require("dotenv").config();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => res.render("accueil"));

app.listen(PORT, () => console.log(`Server listening port ${PORT}`));
