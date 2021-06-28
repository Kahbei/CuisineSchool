import mongoose, { Schema } from "mongoose";

const CoursSchema = new Schema({
    titre: { type: String },
    recette: { type: String, min: 50, max: 2000 },
});

const Cours = mongoose.model("Cours", CoursSchema);

export { Cours };
