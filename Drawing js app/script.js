const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const clear = document.getElementById("clear");
const sizeSpan = document.getElementById("size");
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");
const colorInput = document.getElementById("color");

let size = 10;
let isPressed = false;
let color = "black";
let x;
let y;

canvas.addEventListener("mousedown", (e) => {
  isPressed = true;

  x = e.offsetX;
  y = e.offsetY;
});

canvas.addEventListener("mouseup", (e) => {
  isPressed = false;
  x = undefined;
  y = undefined;
});

canvas.addEventListener("mousemove", (e) => {
  if (isPressed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;
    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);
    x = x2;
    y = y2;
  }
});

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;
  ctx.stroke();
}

function clearCanvas() {
  size = 10;
  sizeSpan.textContent = size;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

clear.addEventListener("click", clearCanvas);

function colorChange() {
  color = colorInput.value;
}
colorInput.addEventListener("input", (e) => {
  color = e.target.value;
});

function increaseSizeOfCursor() {
  if (size < 20) {
    size++;
    ctx.lineWidth = size;
    sizeSpan.textContent = size;
  }
}

increase.addEventListener("click", increaseSizeOfCursor);

function decreaseSizeOfCursor() {
  if (size > 0) {
    size--;
    ctx.lineWidth = size;
    sizeSpan.textContent = size;
  }
}

decrease.addEventListener("click", decreaseSizeOfCursor);
