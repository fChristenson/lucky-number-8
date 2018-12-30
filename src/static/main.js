function randomNumber() {
  return Math.floor(Math.random() * 10);
}

const buttonElement = document.getElementById("button");
const numberElement = document.getElementById("number");
const winnerElement = document.getElementById("winner");

buttonElement.addEventListener("click", e => {
  const random = randomNumber();
  number.textContent = random;

  if (random === 8) {
    winnerElement.style.display = "initial";
  } else {
    winnerElement.style.display = "none";
  }
});
