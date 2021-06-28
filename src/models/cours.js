import mongoose from "mongoose";
import bcrypt from "bcrypt";
const Schema = mongoose.Schema;

const coursSchema = new Schema({
    idcours: {type: Number},
    recette: { type: String, min: 50, max: 2000 },
    image: { type: Buffer},
});

const cours = mongoose.model('cours', coursSchema);

export { cours };