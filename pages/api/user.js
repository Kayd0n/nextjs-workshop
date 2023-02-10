import dbConnect from "../../lib";
import { UserSchemaModel } from "../../model/UserModel";

export default async function handler(req, res) {

    await dbConnect();

    //Handling the different type of requests
    switch (req.method) {
        case 'GET':
            try {
                const users = await UserSchemaModel.find({});
                res.status(200).json(users);
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        case 'POST':
            try {
                const user = await UserSchemaModel.create(req.body);
                res.status(201).json(user);
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        default:
            res.status(404).json({ error: "The request does not exist" });
            break;

    }

}