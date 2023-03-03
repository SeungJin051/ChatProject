const messageList = document.querySelector("ul");
const messageForm = document.querySelector("#message");
const nickNameForm = document.querySelector("#nickName");
const socket = new WebSocket(`ws://${window.location.host}`);

// JSON object -> string -> object
function makeMessage(type, payload) {
  const msg = { type, payload };
  return JSON.stringify(msg);
}

// 익명 함수
socket.addEventListener("open", () => {
  console.log("서버 연결 성공!");
});

socket.addEventListener("message", (message) => {
  console.log("새로운 메세지 :", message.data, "를 서버로 부터 받아왔습니다.");
  const li = document.createElement("li");
  li.innerText = message.data;
  messageList.append(li);
  //
  const likesBtn = document.createElement("button");
  let count = 0;
  likesBtn.innerText = count;
  messageList.append(likesBtn);
  likesBtn.addEventListener("click", () => {
    likesBtn.innerText = count++;
  });
});

socket.addEventListener("close", () => {
  console.log("서버 연결 해제!");
});

// 메세지 폼 send back-end //
function handleSubmit(event) {
  event.preventDefault();
  const messageInput = messageForm.querySelector("input");
  socket.send(makeMessage("new_message", messageInput.value));
  messageInput.value = "";
}

// 닉네임 폼 //
function handleNickNameSubmit(event) {
  event.preventDefault();
  const NickNameInput = nickNameForm.querySelector("input");
  // socket.send(NickNameInput.value);
  // json 형식으로
  socket.send(makeMessage("nick_name", NickNameInput.value));
}

messageForm.addEventListener("submit", handleSubmit);
nickNameForm.addEventListener("submit", handleNickNameSubmit);
