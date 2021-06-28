import express from "express";
import axios from "axios";
import dotenv from "dotenv";

const app = express();
const PORT = 3000;

require("dotenv").config();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, () => console.log(`Server listening port ${PORT}`));
