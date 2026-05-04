const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

let globalFeed = [
    { id: 1, username: "System", message: "Welcome to MILA University!" }
];

app.get('/api/feed', (req, res) => {
    res.json(globalFeed);
});

app.post('/api/feed', (req, res) => {
    const { username, message } = req.body;

    if (!username || !message) {
        return res.status(400).json({ error: "Required: Username and Message" });
    }

    globalFeed.push({
        id: Date.now(),
        username: username,
        message: message
    });

    res.status(201).json({ message: "Message Created Successfully" });
});

app.listen(PORT, () => {
    console.log(`API Server is running on port ${PORT}`);
});