const socket = io(); // function io

const welcome = document.getElementById("welcome");
const form = document.querySelector("form");
const room = document.getElementById("room");

room.hidden = true;

let roomName;

function showRoom() {
  welcome.hidden = true;
  room.hidden = false;
  const h3 = document.querySelector(".roomName");
  h3.innerText = `현재:${roomName}방에 있습니다.`;
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
