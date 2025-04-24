const socket = io("https://kyle-server.onrender.com", {
  transports: ["websocket"],
});

function sendMessage() {
  const input = document.getElementById("msg");
  const msg = input.value;
  if (msg.trim()) {
    socket.emit("chat-message", msg);
    input.value = "";
  }
}

socket.on("chat-message", (msg) => {
  const chat = document.getElementById("chat");
  const p = document.createElement("p");
  p.textContent = msg;
  chat.appendChild(p);
  chat.scrollTop = chat.scrollHeight;
});
