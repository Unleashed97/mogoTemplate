let smoothScroll = () =>{
    let attr = document.querySelectorAll('[data-scroll]');
    let blockId = '';
    let clickedBlock = '';
    // let scrollOffset = 0;
  

    attr.forEach(item =>{
        item.addEventListener('click', (event) => {
            event.preventDefault();
            Array.from(document.querySelectorAll('.nav a')).forEach(i => i.classList.remove('active'));
            item.classList.add('active');
            blockId = item.getAttribute('data-scroll');
            clickedBlock = document.querySelector(blockId);
            clickedBlock.scrollIntoView({behavior: "smooth"});
        });
    });

}

smoothScroll();