

const openBtn = document.querySelector(".open-menu");  
const closeBtn = document.querySelector(".close-menu"); 
const navBar = document.querySelector("nav");  



openBtn.onclick = openMenu;
closeBtn.onclick = closeMenu;

function openMenu() {
  navBar.classList.add("toonMenu"); 
}

function closeMenu() {
  navBar.classList.remove("toonMenu");  
}

//https://chatgpt.com/
window.addEventListener('load', function () {
  setTimeout(function () {
    const dialog = document.querySelector('dialog');
    if (dialog) {
      dialog.removeAttribute('hidden');  
      requestAnimationFrame(() => {
        dialog.classList.add('show');    
      });
    }
  }, 2000); 
});

  document.addEventListener('DOMContentLoaded', function () {
    const closeBtn = document.querySelector('.close-dialog');
    const dialog = document.querySelector('dialog');

    if (closeBtn && dialog) {
      closeBtn.addEventListener('click', function () {
        dialog.classList.remove('show');           
        setTimeout(() => {
          dialog.setAttribute('hidden', '');       
        }, 600); 
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
