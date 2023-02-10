import dbConnect from "../../lib";
import { UserMessageSchemaModel } from "../../model/UserMessageModel";

export default async function handler(req, res) {

    await dbConnect();

    //Handling the different type of requests
    switch (req.method) {
        case 'GET':
            try {
                const userMessages = await UserMessageSchemaModel.find({});
                res.status(200).json(userMessages);
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        case 'POST':
            try {
                const userMessage = await UserMessageSchemaModel.create(req.body);
                res.status(201).json(userMessage);
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        default:
            res.status(404).json({ error: "The request does not exist" });
            break;
    }

}