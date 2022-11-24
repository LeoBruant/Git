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
const axios = require("axios");
const port = 8000;

console.log(io);
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
