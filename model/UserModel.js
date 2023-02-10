import mongoose from "mongoose";

const UserShema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
});

export const UserSchemaModel = mongoose.model("User", UserShema);
