const openBtn = document.getElementById("openBtn");
const closeBtn = document.querySelector(".closeBtn");
const sideMenu = document.querySelector("#side-menu");

openBtn.addEventListener("click", openSideMenu);
closeBtn.addEventListener("click", closeSideMenu);
window.addEventListener("click", outsideClick);

function openSideMenu() {
  sideMenu.style.width = "40%";
}

function closeSideMenu() {
  sideMenu.style.width = "0";
}

function outsideClick(e) {
  if (e.target == document.querySelector("body")) {
    sideMenu.style.width = "0%";
  }
}
