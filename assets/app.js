let hiddenMenu = document.querySelector('#hidden-menu');
let hiddenExit = document.querySelector('#hidden-exit');
let navHidden = document.querySelectorAll('.nav-child')[0];
let hiddenClick = document.querySelectorAll('.nav-child a');
let nav = document.querySelector('nav');
let logo = document.querySelector('.logo');
logo.addEventListener('click', () => {
    hiddenMenu.classList.remove('hidden');
    hiddenExit.classList.add('hidden');
    navHidden.classList.remove('active');
    nav.classList.remove('main-active');
})
hiddenClick.forEach((item) => {
    item.addEventListener('click', () => {
        hiddenMenu.classList.remove('hidden');
        hiddenExit.classList.add('hidden');
        navHidden.classList.remove('active');
        nav.classList.remove('main-active');
    })
})
hiddenMenu.addEventListener('click', () => {
    hiddenMenu.classList.add('hidden');
    hiddenExit.classList.remove('hidden');
    navHidden.classList.add('active');
    navHidden.style.display = 'block';
    nav.classList.add('main-active');
})
hiddenExit.addEventListener('click', () => {
    hiddenMenu.classList.remove('hidden');
    hiddenExit.classList.add('hidden');
    navHidden.classList.remove('active');
    nav.classList.remove('main-active');
})
window.onscroll = () => {
    document.getElementById('Home').style.color = "black";
}


