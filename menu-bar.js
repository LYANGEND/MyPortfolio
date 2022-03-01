const menubar = document.querySelector('.menu-bar');
const listItems = document.querySelectorAll('.navbarItems'); // list of all the items in the menu bar (navbarItems)
const closeicon = document.querySelector('#closeIcon');
const openicon = document.querySelector ('#openIcon');
const hamburgerMenu = document.querySelector('.header__nav-container__mobile_menu');
const closingMenu = document.querySelector('#hamburger');

function toggleMenu() {
  if (menubar.classList.contains('open-class')) {
    menubar.classList.remove('open-class');
    closeicon.style.display = 'none';
    openicon.style.display = 'block';
} else {
    menubar.classList.add('open-class');
    closeicon.style.display = 'block';
    openicon.style.display = 'none';
}
}


hamburgerMenu.addEventListener("click", toggleMenu);
closingMenu.addEventListener("click", toggleMenu);