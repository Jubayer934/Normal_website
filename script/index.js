const menuIcon = document.getElementById("menuicon");
const menu = document.getElementById("menu-icon");

menuIcon.addEventListener("click", () => {
  if (menu.className === "menu") {
    menu.classList.remove("menu");
  } else {
    menu.classList.add("menu");
  }
});
