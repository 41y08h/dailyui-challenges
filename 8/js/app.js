var toggleMenuBtns = document.querySelectorAll(".toggleMenu");
var menu = document.querySelector("#menu");

toggleMenuBtns.forEach((btn) => btn.addEventListener("click", displayMenu));

function displayMenu() {
  if (menu.classList.contains("show")) {
    menu.classList.remove("show");
  } else {
    menu.classList.add("show");
  }
}
