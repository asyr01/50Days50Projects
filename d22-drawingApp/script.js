const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let size = 20;
let isPressed = false;
let color = 'black';
let x;
let y;

// when clicked on the canvas takes position of the mouse
canvas.addEventListener('mousedown', (e) => {
  isPressed = true;
  x = e.offsetX;
  y = e.offsetY;
});

// when mouse click on release
canvas.addEventListener('mouseup', (e) => {
  isPressed = false;
  x = undefined;
  y = undefined;
});

// to draw line, take the position on the x and y axis
canvas.addEventListener('mousemove', (e) => {
  if (isPressed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;
    // If mouse moves fast there are cirlces with spaces so use drawLine
    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);
    x = x2;
    y = y2;
  }
});

// creates a shape -circle- with given values
function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2, true);
  ctx.fillStyle = color;
  ctx.fillStyle = color;
  ctx.fill();
}

// draws a line with given values
function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;
  ctx.stroke();
}
