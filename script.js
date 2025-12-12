const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 50);
});

// Mobile Menu Toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Dark / Light Mode
const themeBtn = document.getElementById("theme-toggle");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");

  themeBtn.textContent =
    document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// Default theme
document.body.classList.add("light");