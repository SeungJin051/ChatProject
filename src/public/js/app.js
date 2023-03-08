const socket = io(); // function io

const welcome = document.getElementById("welcome");
const form = document.querySelector("form");
const room = document.getElementById("room");

room.hidden = true;

let roomName;

function addMessage(message) {
  const ul = room.querySelector("#chatList");
  const li = document.createElement("li");
  li.innerText = message;
  ul.appendChild(li);
}

function showRoom() {
  welcome.hidden = true;
  room.hidden = false;
  const h3 = document.querySelector(".roomName");
  h3.innerText = `Room = ${roomName}`;
}

function backEndDone(msg) {
  console.log("back-end : ", msg);
}

function handleRoomSubmit(event) {
  event.preventDefault();
  const input = form.querySelector("input");
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

socket.on("welcome", () => {
  addMessage("누군가 들어왔습니다!");
});
