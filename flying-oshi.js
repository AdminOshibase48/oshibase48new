const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let width = window.innerWidth;
let height = window.innerHeight * 0.8;
canvas.width = width;
canvas.height = height;

let oshiImg = new Image();
oshiImg.src = "assets/img/oshi.png";

let bgImg = new Image();
bgImg.src = "assets/img/bg.png";

let oshi = { x: 80, y: height / 2, width: 48, height: 48, velocity: 0 };
let gravity = 0.5;
let jumpStrength = -8;
let pipes = [];
let score = 0;
let lives = 3;
let gameStarted = false;

function jump() {
  oshi.velocity = jumpStrength;
  gameStarted = true;
}

document.addEventListener("keydown", e => {
  if (e.code === "Space") jump();
});

function setVolume(value) {
  document.getElementById("bgm").volume = value;
}

function drawPipe(pipe) {
  ctx.fillStyle = "#f5b860";
  ctx.fillRect(pipe.x, 0, pipe.width, pipe.top);
  ctx.fillRect(pipe.x, pipe.bottom, pipe.width, height - pipe.bottom);
}

function draw() {
  ctx.clearRect(0, 0, width, height);
  ctx.drawImage(bgImg, 0, 0, width, height);

  // Pipes
  pipes.forEach(pipe => {
    pipe.x -= 3;
    drawPipe(pipe);
  });

  if (gameStarted) {
    oshi.velocity += gravity;
    oshi.y += oshi.velocity;
  }

  ctx.drawImage(oshiImg, oshi.x, oshi.y, oshi.width, oshi.height);

  // Remove old pipes & check score
  pipes = pipes.filter(pipe => {
    if (pipe.x + pipe.width < oshi.x && !pipe.passed) {
      score++;
      pipe.passed = true;
    }
    return pipe.x + pipe.width > 0;
  });

  // Collision
  pipes.forEach(pipe => {
    if (
      oshi.x < pipe.x + pipe.width &&
      oshi.x + oshi.width > pipe.x &&
      (oshi.y < pipe.top || oshi.y + oshi.height > pipe.bottom)
    ) {
      lives--;
      oshi.y = height / 2;
      oshi.velocity = 0;
      pipes = [];
    }
  });

  // Ground check
  if (oshi.y + oshi.height > height) {
    lives--;
    oshi.y = height / 2;
    oshi.velocity = 0;
    pipes = [];
  }

  // Draw UI
  ctx.fillStyle = "#fff";
  ctx.font = "bold 20px Poppins";
  ctx.fillText("Skor: " + score, 20, 30);
  ctx.fillText("Nyawa: " + lives, 20, 60);

  if (lives > 0) requestAnimationFrame(draw);
  else ctx.fillText("Game Over!", width / 2 - 50, height / 2);
}

setInterval(() => {
  if (!gameStarted || lives <= 0) return;
  let gap = 140;
  let top = Math.random() * (height - gap - 100) + 50;
  pipes.push({
    x: width,
    width: 50,
    top: top,
    bottom: top + gap,
    passed: false
  });
}, 2000);

draw();
