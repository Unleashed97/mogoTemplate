let headerFix = () =>{
    let scrollOffset = 0;
    let introHeight = document.querySelector('.intro').offsetHeight;
    let header = document.querySelector('.header');

    window.addEventListener('scroll', () => {
        scrollOffset = window.scrollY;

        if(scrollOffset > introHeight) {
            header.classList.add('header--fixed');
        }
        else {
            header.classList.remove('header--fixed');
        }
    });
}

headerFix();