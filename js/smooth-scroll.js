let smoothScroll = () =>{
    let attr = document.querySelectorAll('[data-scroll]');
    let blockId = '';
    let currentBlock = '';
  

    attr.forEach(item =>{
        item.addEventListener('click', (event) => {
            event.preventDefault();
            Array.from(document.querySelectorAll('.nav a')).forEach(i => i.classList.remove('active'));
            item.classList.add('active');
            blockId = item.getAttribute('data-scroll');
            currentblock = document.querySelector(blockId);
            currentblock.scrollIntoView({behavior: "smooth"});
            // console.log(item);
        });
    });

}

smoothScroll();