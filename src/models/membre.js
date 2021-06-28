import mongoose from "mongoose";
import bcrypt from "bcrypt";
const Schema = mongoose.Schema;

const userSchema = new Schema({
    idmembre: {type: Number},
    username: { type: String, min: 4, max: 15 },
    password: { type: String, required: true, max: 1024, min: 6}
});

const membre = mongoose.model('membre', userSchema);

export { membre };