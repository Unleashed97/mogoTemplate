let toggleMenu = () =>{
    // init
    const btn = document.querySelector('.nav-toggle');
    const menu = document.querySelector('.nav');
    const header = document.querySelector('.header');
    const body = document.querySelector('body');
    btn.addEventListener('click', () =>{
        btn.classList.toggle('nav-toggle--active');
        header.classList.toggle('header--active');
        menu.style.opacity = (menu.style.opacity === "1") ? "0" : "1";
        body.classList.toggle('stop-scrolling');

    });
}

toggleMenu();