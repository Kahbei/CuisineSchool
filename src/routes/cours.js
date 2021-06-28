import express from "express";
import { Cours } from "../models/cours";
import dataTemplate from "../models/dataTemplate";

const coursRouter = express.Router();
const data = dataTemplate;

coursRouter.get("/", async (req, res, next) => {
    try {
        let cours = await Cours.find();
        res.render("cours", { cours: cours });
    } catch (err) {
        next(err);
    }
});

coursRouter.get("/cours/:id", async (req, res, next) => {
    try {
        let coursOne = await Cours.findOne({ _id: req.params.id });
        res.render("cours", { cours: coursOne });
    } catch (err) {
        next(err);
    }
});

coursRouter.post("/new_course", async (req, res, next) => {
    await Cours.deleteMany();
    data.forEach(async (e) => {
        try {
            let newCours = new Cours(e);
            newCours = await newCours.save();
            res.send({ message: "Test", newCours });
            res.redirect("/");
        } catch (error) {
            next(error);
        }
    });
});

export default coursRouter;
