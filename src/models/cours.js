import mongoose from "mongoose";
import bcrypt from "bcrypt";
const Schema = mongoose.Schema;

const CoursSchema = new Schema({
    titre: { type: String },
    recette: { type: String, min: 50, max: 2000 },
    image: { type: Buffer },
});

const Cours = mongoose.model("cours", CoursSchema);

export { Cours };
