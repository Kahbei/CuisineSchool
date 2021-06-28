import mongoose from "mongoose";
import bcrypt from "bcrypt";
const Schema = mongoose.Schema;

const coursSchema = new Schema({
    idcours: {type: Integer},
    recette: { type: String, min: 50, max: 2000 },
    image: { type: String},
});

const cours = mongoose.model('cours', coursSchema);

export { cours };