let accordionCollapse = () => {
    const accordionItem = document.querySelectorAll('[data-collapse]');

    accordionItem.forEach(item => item.addEventListener('click', e => {
        e.preventDefault();
        accordionItem.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
    }));
}

accordionCollapse();