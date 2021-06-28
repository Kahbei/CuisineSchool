import mongoose, { Schema } from "mongoose";

const MembreSchema = new Schema({
    username: { type: String, min: 4, max: 15 },
    password: { type: String, required: true, max: 1024, min: 6 },
});

const Membre = mongoose.model("Membre", MembreSchema);

export { Membre };
