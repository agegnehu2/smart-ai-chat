const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "Smart AI Chat API Running"
    });
});

app.post("/api/chat", (req, res) => {

    const { message } = req.body;

    res.json({
        success: true,
        userMessage: message,
        reply: "Hello from Smart AI Chat Server"
    });

});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
