import mongoose from "mongoose";

const UserMessageSchema = new mongoose.Schema({
    message: String,
    user_id: String,
    timestamp: String,
});

export const UserMessageSchemaModel = mongoose.model("UserMessage", UserMessageSchema);
