// Next-Backend-Files-Folder-For-API-Functions-Reserved-Name-Folder-Called-api-Folder
// This file is treated as a backend server file in Next.js.
// Only POST requests triggered in this api file.

import { MongoClient } from "mongodb";

// Often time, the function name is called handler but the name is up to you
const handler = async (req, res) => {
    if (req.method = 'POST') {
        const data = req.body;

        // Next-Env-Variables-For-Server-Side
        // Next-MongoDB-Atlas
        // In the root of the project env file is named as ".env.local"
        // Make sure that file is excluded in ".gitignore" file.
        // Remember that this environmental variable can only be accessed in backend.
        const mongoUser=process.env.MONGODB_ATLAS_USER;
        const mongoPassword=process.env.MONGODB_ATLAS_PASSWORD;

        // Next-MongoDB-Atlas
        const meetupsDatabase = 'meetups';

        // Next-MongoDB-Atlas
        // The link is taken from MongoDB Atlas and the content is adjusted
        const mongoAtlasLink = `mongodb+srv://${mongoUser}:${mongoPassword}@meetup-list.jagjq.mongodb.net/${meetupsDatabase}?retryWrites=true&w=majority`;
        
        // Next-MongoDB-Atlas
        // Since connect returns a promise, parent function should be an async function
        const client = await MongoClient.connect(mongoAtlasLink);

        // Next-MongoDB-Atlas
        // We get the meetups database here. If it does not exist, it will be created on the fly.
        const db = client.db();

        // Next-MongoDB-Atlas
        // We get the collections database here. If it does not exist, it will be created on the fly.
        const meetupsCollection = db.collection('meetups');

        // Next-MongoDB-Atlas
        // we can add a try and catch for error handling if we want to
        // I will skip it in here.
        const result = await meetupsCollection.insertOne(data);

        // Next-MongoDB-Atlas
        console.log(result);

        // Next-MongoDB-Atlas
        client.close();

        res.status(201).json({ message: 'Meetup Inserted!' });
    }
};

export default handler;