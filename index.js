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

                          // === HERO SLIDER ===
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlides() {
  slides.forEach((slide, i) => {
    slide.classList.remove('show');
  });
  slideIndex = (slideIndex + 1) % slides.length;
  slides[slideIndex].classList.add('show');
}
setInterval(showSlides, 4000); // Ganti slide tiap 4 detik

// === SCROLL ANIMATIONS ===
gsap.registerPlugin(ScrollTrigger);

// Fade-in section saat muncul
gsap.utils.toArray("section").forEach(section => {
  gsap.from(section, {
    scrollTrigger: {
      trigger: section,
      start: "top 85%",
    },
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power2.out"
  });
});
