const btnPlus = document.querySelector(".btnplus");
const btnMinus = document.querySelector(".btnminus");
const number = document.querySelector(".number");

let realNumber = 0;

btnPlus.addEventListener("click", () => {
  if (realNumber < 10) {
    realNumber++;
    number.textContent = realNumber;
  }
});

btnMinus.addEventListener("click", () => {
  if (realNumber > 0) {
    realNumber--;
    number.textContent = realNumber;
  }
});
