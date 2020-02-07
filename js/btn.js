var menuButton = document.querySelector('.menu-btn');
var menu = document.querySelector('.header');
menuButton.addEventListener('click', function() {
    menu.classList.toggle('header-active');
    menuButton.classList.toggle('menu-btn-active');
});