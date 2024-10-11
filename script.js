const button = document.getElementById("myButton");
const message = document.getElementById("message");
let count = 0;

button.addEventListener("click", () => {
  count++;
  message.textContent = `You clicked the button ${count} times!`;
});