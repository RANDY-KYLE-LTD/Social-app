const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const path = require("path");

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

require("./socketHandler")(io);

app.use(express.static(path.join(__dirname, "..")));

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
