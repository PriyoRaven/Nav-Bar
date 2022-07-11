const nav = document.querySelector('.nav-links');
const openNavBtn = document.querySelector ('#nav-toggle-open');
const closeNavBtn = document.querySelector ('#nav-toggle-close');

//function to open nav menu
const openNav = () => {
    nav.style.display = 'flex';
    openNavBtn.style.display = 'none';
    closeNavBtn.style.display = 'inline-block';
}

openNavBtn.addEventListener('click', openNav)

//function to close nav menu
const closeNav = () => {
    nav.style.display = 'none';
    openNavBtn.style.display = 'inline-block';
    closeNavBtn.style.display = 'none';
}

closeNavBtn.addEventListener('click', closeNav)

//refer: https://www.youtube.com/watch?v=VOIJKrYa1iI&ab_channel=EGATOR