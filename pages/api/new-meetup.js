// Next-Backend-Files-Folder-For-API-Functions-Reserved-Name-Folder-Called-api-Folder

// Only POST requests triggered in this code here.

// Often time, the function name is called handler but the name is up to you
const handler = (req, res) => {
    if (req.method = 'POST') {
        const data = req.body;

        const { title, image, address, description } = data;
    }
};

export default handler;