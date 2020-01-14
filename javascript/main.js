const toggle = document.getElementById("toggle");
const navLinks = document.querySelector(".nav__links");
const hero = document.querySelector(".hero");

const actionNavbar = () => {
    navLinks.classList.toggle("activeNav")
    hero.classList.toggle("activeHero");
}
toggle.addEventListener("click", actionNavbar);