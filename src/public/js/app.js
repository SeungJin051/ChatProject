const socket = io(); // function io

const welcome = document.getElementById("welcome");
const form = document.querySelector("form");
const room = document.getElementById("room");

room.hidden = true;

let roomName;

function addMessage(message) {
  const ul = room.querySelector("ul");
  const li = document.createElement("li");
  li.innerText = message;
  ul.appendChild(li);
}

function handleMessageSubmit(event) {
  event.preventDefault();
  const input = room.querySelector("#msg input");
  socket.emit("new_message", input.value, roomName, () => {
    addMessage(`You: ${input.value}`);
  });
}

function handleNicknameSubmit(event) {
  event.preventDefault();
  const input = room.querySelector("#name input");
  const value = input.value;
  socket.emit("nickname", input.value);
}

function showRoom() {
  welcome.hidden = true;
  room.hidden = false;
  const h3 = document.querySelector("h3");
  h3.innerText = `Room = ${roomName}`;
  const msgForm = room.querySelector("#msg");
  const nameForm = room.querySelector("#name");
  msgForm.addEventListener("submit", handleMessageSubmit);
  nameForm.addEventListener("submit", handleNicknameSubmit);
}

function backEndDone(msg) {
  console.log("back-end : ", msg);
}

function handleRoomSubmit(event) {
  event.preventDefault();
  const input = welcome.querySelector("input");
  // let nowDate = new Date();
  // emit + send + send
  socket.emit(
    "enter_room",
    input.value,
    //nowDate.toDateString(),
    showRoom
  ); // socket.io ( send )
  roomName = input.value;
  input.value = "";
}

form.addEventListener("submit", handleRoomSubmit);

socket.on("welcome", (user) => {
  addMessage("누군가 들어왔습니다! 👋");
});

socket.on("bye", (left) => {
  addMessage(`${left} 퇴장했습니다! 👋`);
});

socket.on("new_message", (msg) => {
  addMessage(msg);
});
