const togglerBtns = document.querySelectorAll(".toggler");
const settingsContainer = document.querySelector(".container .settings");

togglerBtns.forEach((btn) => btn.addEventListener("click", toggleNavbar));

function toggleNavbar() {
  console.log(settingsContainer.style.transform);
  if (
    settingsContainer.style.transform === "" ||
    settingsContainer.style.transform === "translateX(-325px)"
  ) {
    settingsContainer.style.transform = "translateX(0)";
    settingsContainer.style.width = "100vw";
  } else {
    settingsContainer.style.transform = "translateX(-325px)";
    settingsContainer.style.width = "320px";
  }
}
