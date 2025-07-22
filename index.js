document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navRight = document.querySelector(".nav-right");

  menuToggle.addEventListener("click", () => {
    navRight.classList.toggle("active");
  });

  // Optional: auto slide hero
  const slides = document.querySelectorAll(".slide");
  let index = 0;

  setInterval(() => {
    slides.forEach(s => s.classList.remove("show"));
    index = (index + 1) % slides.length;
    slides[index].classList.add("show");
  }, 4000);
});
