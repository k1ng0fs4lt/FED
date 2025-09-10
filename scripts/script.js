// JavaScript for opening and closing the menu

const openBtn = document.querySelector(".open-menu");  // Open button selector
const closeBtn = document.querySelector(".close-menu");  // Close button selector
const navBar = document.querySelector("nav");  // Target the nav element

openBtn.onclick = openMenu;
closeBtn.onclick = closeMenu;

function openMenu() {
  navBar.classList.add("toonMenu");  // Show the menu
}

function closeMenu() {
  navBar.classList.remove("toonMenu");  // Hide the menu
}