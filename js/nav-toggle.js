let toggleMenu = () =>{
    // init
    const btn = document.querySelector('.nav-toggle');
    const menu = document.querySelector('.nav');
    const header = document.querySelector('.header');
    const body = document.querySelector('body');
    const menuItems = document.querySelectorAll('.nav a');
    btn.addEventListener('click', () =>{
        btn.classList.toggle('nav-toggle--active');
        header.classList.toggle('header--active');
        menu.classList.toggle('active');
        body.classList.toggle('stop-scrolling');


        if(menu.classList.contains('active')){
            menuItems.forEach(i => i.addEventListener('click', () => {
                menu.classList.remove('active');
                btn.classList.remove('nav-toggle--active');
                body.classList.remove('stop-scrolling');
                header.classList.remove('header--active');
            }));
        }
    });
}

toggleMenu();