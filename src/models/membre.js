import mongoose, { Schema } from "mongoose";
const Schema = mongoose.Schema;

const MembreSchema = new Schema({
    username: { type: String, min: 4, max: 15 },
    password: { type: String, required: true, max: 1024, min: 6 },
});

const Membre = mongoose.model("membre", MembreSchema);

export { Membre };
