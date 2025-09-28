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

//https://chatgpt.com/
window.addEventListener('load', function () {
  setTimeout(function () {
    const dialog = document.querySelector('dialog');
    if (dialog) {
      dialog.removeAttribute('hidden');     // Make it visible
      requestAnimationFrame(() => {
        dialog.classList.add('show');       // Trigger fade-in
      });
    }
  }, 2000); // 10 seconds
});

  document.addEventListener('DOMContentLoaded', function () {
    const closeBtn = document.querySelector('.close-dialog');
    const dialog = document.querySelector('dialog');

    if (closeBtn && dialog) {
      closeBtn.addEventListener('click', function () {
        dialog.classList.remove('show');              // Start fade-out
        setTimeout(() => {
          dialog.setAttribute('hidden', '');          // Hide after fade
        }, 600); // Match transition duration
      });
    }
  });
  


//Studenten assistent: Alyaman Alhijazi
//https://chatgpt.com/
document.addEventListener("DOMContentLoaded", switchContrast);

function switchContrast() {
  const toggle = document.querySelector(".toggleContrast");
  if (!toggle) return; 


  const headingsAndParagraphs = document.querySelectorAll("h1, h2, h3, p, a");


  const contrastEnabled = localStorage.getItem("contrast") === "on";
  toggle.checked = contrastEnabled;

  document.body.classList.toggle("contrast", contrastEnabled);
  headingsAndParagraphs.forEach(el => {
    el.classList.toggle("contrast", contrastEnabled);
  });

  toggle.addEventListener("change", () => {
    const enabled = toggle.checked;
    document.body.classList.toggle("contrast", enabled);
    headingsAndParagraphs.forEach(el => {
      el.classList.toggle("contrast", enabled);
    });
    localStorage.setItem("contrast", enabled ? "on" : "off");
  });
}
