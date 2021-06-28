import express from "express";

const coursRouter = express.Router();

coursRouter.get("/:id", async (req, res, next) => {
    try {
        res.render("cours");
    } catch (err) {
        next(err);
    }
});

export default coursRouter;
