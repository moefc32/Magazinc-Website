AOS.init();

$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
});

function navbar() {
    var checkBox = document.getElementById('menu-toggle');
    const body = document.body;
    if (checkBox.checked == true) {
        const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
        body.style.position = 'fixed';
        body.style.top = `-${scrollY}`;
    } else {
        const scrollY = body.style.top;
        body.style.position = '';
        body.style.top = '';
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }
}

window.addEventListener('scroll', () => {
    document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
});
