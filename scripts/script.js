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
  
  const photo1 = document.querySelector('#productThumbnails ol li:first-of-type');
  const photo2 = document.querySelector('#productThumbnails ol li:nth-of-type(2)');
  const photo3 = document.querySelector('#productThumbnails ol li:nth-of-type(3)');
  const photo4 = document.querySelector('#productThumbnails ol li:nth-of-type(4)');
  const photo5 = document.querySelector('#productThumbnails ol li:nth-of-type(5)');
  const photo6 = document.querySelector('#productThumbnails ol li:nth-of-type(6)');
  const photo7 = document.querySelector('#productThumbnails ol li:nth-of-type(7)');
  const photo8 = document.querySelector('#productThumbnails ol li:nth-of-type(8)');
  const photo9 = document.querySelector('#productThumbnails ol li:nth-of-type(9)');
  const photo10 = document.querySelector('#productThumbnails ol li:nth-of-type(10)');
  const photo11 = document.querySelector('#productThumbnails ol li:last-of-type');
  let productAfbeelding = document.getElementById('imageContainer');

  photo1.addEventListener("click", function(){
    productAfbeelding.style.backgroundImage =  "url('./images/product1.png')";
  })

  photo2.addEventListener("click", function(){
    productAfbeelding.style.backgroundImage = "url('./images/product2.png')";
  })

  photo3.addEventListener("click", function(){
    productAfbeelding.style.backgroundImage = "url('./images/product3.png')";
  })

  photo4.addEventListener("click", function(){
    productAfbeelding.style.backgroundImage = "url('./images/product4.png')";
  })

    photo5.addEventListener("click", function(){
    productAfbeelding.style.backgroundImage =  "url('./images/product5.png')";
  })

  photo6.addEventListener("click", function(){
    productAfbeelding.style.backgroundImage = "url('./images/product6.png')";
  })

  photo7.addEventListener("click", function(){
    productAfbeelding.style.backgroundImage = "url('./images/product7.png')";
  })

  photo8.addEventListener("click", function(){
    productAfbeelding.style.backgroundImage = "url('./images/product8.png')";
  })

    photo9.addEventListener("click", function(){
    productAfbeelding.style.backgroundImage = "url('./images/product9.png')";
  })

  photo10.addEventListener("click", function(){
    productAfbeelding.style.backgroundImage = "url('./images/product10.png')";
  })

  photo11.addEventListener("click", function(){
    productAfbeelding.style.backgroundImage = "url('./images/product11.png')";
  })

