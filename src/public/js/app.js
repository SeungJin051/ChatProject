const socket = io(); // function io

const welcome = document.getElementById("welcome");
const form = document.querySelector("form");

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
    backEndDone // 종료는 항상 마지막에 !
  ); // socket.io ( send )
  input.value = "";
}

form.addEventListener("submit", handleRoomSubmit);
