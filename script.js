const btn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu-items');
const menuList = document.querySelectorAll('.menu-item');

btn.addEventListener('click', openMenu);

function openMenu () {
    menu.classList.toggle('active');
    menuList.forEach((item) => {
        item.addEventListener('click', function() {
            menu.classList.remove('active');
        })
    }) 
}