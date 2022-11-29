const express = require("express");
const options = {
    cors: {
        origin: ["http://localhost:3000"],
        methods: ["GET", "POST"],
    },
};
const app = express();
const httpServer = require("http").createServer(app);
const io = require("socket.io")(httpServer, options);
const port = 8000;
console.log(io);

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get('/calcul', (req, res) => {
  const a = 1
    const b = 2
    const result = a + b
    res.send('The result is : ' + result)});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
