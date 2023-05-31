let hiddenMenu = document.querySelector('#hidden-menu');
let hiddenExit = document.querySelector('#hidden-exit');
let navHidden = document.querySelectorAll('.nav-child')[0];
let hiddenClick = document.querySelectorAll('.nav-child a');
hiddenClick.forEach((item) => {
    item.addEventListener('click', () => {
        hiddenMenu.classList.remove('hidden');
        hiddenExit.classList.add('hidden');
        navHidden.classList.add('hidden');
    })
})
hiddenMenu.addEventListener('click', () => {
    hiddenMenu.classList.add('hidden');
    hiddenExit.classList.remove('hidden');
    navHidden.classList.remove('hidden');
    navHidden.style.display = 'block';
})
hiddenExit.addEventListener('click', () => {
    hiddenMenu.classList.remove('hidden');
    hiddenExit.classList.add('hidden');
    navHidden.classList.add('hidden');
})


