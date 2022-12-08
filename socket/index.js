// By using the documentation of Socket.io
//https://socket.io/get-started/chat

const express = require("express");
const app = express();
const server = require("http").createServer(app);
//const io = require("socket.io").listen(server);
// having error with listen function so removing it
const io = require("socket.io")(server);
const port = 3000;

io.on("connection", socket => {
  console.log("User Connected");
  socket.on("chatmessage", message => {
    console.log(message);
    io.emit("chatmessage", message);
  });
  // socket.on("Message : ", message => {s
  //   console.log(message);
  //   io.emit("Message : ", message);
  // });
});

server.listen(
    port, () => console.log("Server Running Port Number : " + port)
    );