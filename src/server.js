import http from "http";
import WebSocket from "ws";
import express from "express";
import { type } from "os";

const app = express();

app.set("view engine", "pug");
app.set("views", __dirname + "/public/views");
app.use("/public", express.static(__dirname + "/public"));
// url 선언, 유저가 url로 가면, req & res를 받고 response를 보냄
app.get("/", (req, res) => res.render("home"));
app.get("*", (req, res) => res.redirect("/"));

const handleListen = () => console.log(`Listening on http://localhost:3000`); // 그래서 동일한 포트에서 두 개를 처리 가능!

// -- same server http 서버에 접근 & http 위에 ws 서버를 만듬
const server = http.createServer(app); // http server
const wss = new WebSocket.Server({ server }); // ws server { 전달 server }

const socketsPax = [];
// 연결을 해서 socket을 알 수 있음. / backend와 연결된 브라우저에 대해 작동
// wss = back-end
wss.on("connection", (socket) => {
  socketsPax.push(socket);
  socket["nick_name"] = "익명인";
  console.log("서버 연결 성공!");
  socket.on("close", () => console.log("브라우저 연결 해제!"));
  socket.on("message", (msg) => {
    //console.log(message.toString("utf-8"));
    const message = JSON.parse(msg);
    switch (message.type) {
      case "new_message":
        socketsPax.forEach((aSocket) =>
          aSocket.send(`${socket.nick_name}: ${message.payload}`)
        );
        break;

      case "nick_name":
        socket["nick_name"] = message.payload;
        break;
    }
  });
});

server.listen(3000, handleListen);

{
  type: "message";
  payload: "hello everyone";
}

{
  type: "nickname";
  payload: "jin";
}
