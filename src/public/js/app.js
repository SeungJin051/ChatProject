const socket = new WebSocket(`ws://${window.location.host}`);

socket.addEventListener("open", () => {
  console.log("서버 연결 성공!");
});

socket.addEventListener("message", (message) => {
  console.log("새로운 메세지 :", message.data, "를 서버로 부터 받아왔습니다.");
});

socket.addEventListener("close", () => {
  console.log("서버 연결 해제!");
});

setTimeout(() => {
  socket.send("브라우저 : Hello. ");
}, 10000);
