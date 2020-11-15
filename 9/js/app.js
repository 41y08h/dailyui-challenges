const menuTogglers = document.querySelectorAll(".menuToggle");
const menu = document.querySelector(".sidebar");

menuTogglers.forEach((menuToggler) =>
  menuToggler.addEventListener("click", toggleMenu)
);

function toggleMenu(e) {
  menu.classList.toggle("slideSm");
}
