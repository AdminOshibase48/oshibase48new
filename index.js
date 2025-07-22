document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navRight = document.querySelector(".nav-right");

  menuToggle.addEventListener("click", () => {
    navRight.classList.toggle("active");
  });

  // Optional: auto slide hero
  const slides = document.querySelectorAll(".slide");
let current = 0;

setInterval(() => {
  slides[current].classList.remove("show");
  current = (current + 1) % slides.length;
  slides[current].classList.add("show");
}, 4000);
