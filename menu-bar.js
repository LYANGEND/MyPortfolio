const menubar = document.querySelector('.menu-bar');
const listItems = document.querySelectorAll('.navbarItems'); // list of all the items in the menu bar (navbarItems)
const closeicon = document.querySelector('#hambuger');
const openicon = document.querySelector ('#openIcon');
const hamburgerMenu = document.querySelector('.header__nav-container__mobile_menu');

function toggleMenu() {
  
    menubar.style.display = 'block';

}


hamburgerMenu.addEventListener("click", toggleMenu);