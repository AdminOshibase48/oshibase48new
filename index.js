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

// GALERI animasi dari bawah saat scroll
gsap.from(".galeri-slide", {
  scrollTrigger: {
    trigger: "#galeri",
    start: "top 80%",
  },
  opacity: 0,
  y: 50,
  duration: 1,
  stagger: 0.2,
  ease: "power2.out"
});

                          <script>
  function toggleMenu() {
    document.querySelector('.nav-right').classList.toggle('show');
  }
</script>
