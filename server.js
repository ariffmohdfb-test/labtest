const express = require('express');
const cors = require('cors'); 
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

let globalFeed = [
    { id: 1, username: "System", message: "Welcome to MILA University!" }
];

app.listen(PORT, () => {
    console.log(`API Server is running on port ${PORT}`);
});
