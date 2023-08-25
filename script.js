
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-bar");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    navMenu.classList.toggle("nav-open");
    hamburger.classList.toggle("hamburger-open");
  }
