const menu = document.querySelector('#menu');
const mobileNav = document.querySelector('.mobileNav');
const menuList = document.querySelectorAll('#nav li a');

function toggleMenu() {
  if (mobileNav.style.display === 'none') {
    mobileNav.style.display = 'block';
    menu.src = 'images/x.png';
  } else {
    mobileNav.style.display = 'none';
    menu.src = 'images/menu.png';
  }
}
menu.addEventListener('click', toggleMenu);

function hideMenu() {
  mobileNav.style.display = 'none';
  menu.src = './images/menu.png';
}

menuList.forEach((event) => {
  event.addEventListener('click', hideMenu);
});