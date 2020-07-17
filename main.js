const collapse = document.getElementById('burger');

collapse.addEventListener('click', function () {
    const list = document.getElementById('navbar-list');
    list.classList.toggle('nav-active');
    const items = document.querySelectorAll('.navbar-item');
    items.forEach((item) => {
        item.classList.toggle('active');
    });
    const line2 = document.querySelector('.line2');
    line2.classList.toggle('burger-disactive');
    const line1 = document.querySelector('.line1');
    line1.classList.toggle('burger-active-line1');
    const line3 = document.querySelector('.line3');
    line3.classList.toggle('burger-active-line3');
    collapse.classList.toggle('burger-active');
});
