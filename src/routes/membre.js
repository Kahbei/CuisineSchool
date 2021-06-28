import express from "express";

const membreRouter = express.Router();

membreRouter.get("/", async (req, res, next) => {
    try {
        res.render("membre");
    } catch (err) {
        next(err);
    }
});

export default membreRouter;
