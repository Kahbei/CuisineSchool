import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const app = express();
const PORT = process.env.PORT;
const DB_CONNECT = process.env.DATABASE;

mongoose
    .connect(DB_CONNECT, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("Database connection established..."))
    .catch((err) => console.log(`Error ! Connection Failed. ${err}`));

app.set("view engine", "ejs");
app.set("views", "./src/view");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => res.render("index"));
app.get("/membre", (req, res) => res.render("membre"));
app.get("/merci", (req, res) => res.render("merci"));
app.get("/404", (req, res) => res.render("404"));

app.listen(PORT, () => console.log(`Server listening port ${PORT}`));
