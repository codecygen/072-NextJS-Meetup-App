// Next-Backend-Files-Folder-For-API-Functions-Reserved-Name-Folder-Called-api-Folder
// This file is treated as a backend server file in Next.js.
// Only POST requests triggered in this api file.

import { MongoClient } from "mongodb";

// Often time, the function name is called handler but the name is up to you
const handler = (req, res) => {
    if (req.method = 'POST') {
        const data = req.body;

        const { title, image, address, description } = data;

        // Next-Env-Variables-For-Server-Side
        // Next-MongoDB-Atlas
        // In the root of the project env file is named as ".env.local"
        // Make sure that file is excluded in ".gitignore" file.
        // Remember that this environmental variable can only be accessed in backend.
        const mongoPassword=process.env.MONGODB_ATLAS_PASSWORD

        // Next-MongoDB-Atlas
        const meetupsDatabase = 'meetups';

        // Next-MongoDB-Atlas
        // The link is taken from MongoDB Atlas
        const mongoAtlasLink = `mongodb+srv://vahitaras_mongodb:${mongoPassword}@meetup-list.jagjq.mongodb.net/${meetupsDatabase}?retryWrites=true&w=majority`;
        MongoClient.connect(mongoAtlasLink);
    }
};

export default handler;