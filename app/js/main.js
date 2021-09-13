const header = document.querySelector('header');

document.getElementById('btn-hamMenu').onclick = function() {
    this.classList.toggle('open');
    header.classList.toggle('open');
    document.querySelector('body').classList.toggle('noscroll');

    let overlay = document.getElementById('overlay');
    let mobileMenu = document.getElementById('fadeInOutMenu');

    if (document.getElementById('btn-hamMenu').classList.contains('open')) {
        overlay.classList.remove('fade-out');
        overlay.classList.add('fade-in');

        mobileMenu.classList.remove('fade-out');
        mobileMenu.classList.add('fade-in');
    } else {
        overlay.classList.remove('fade-in');
        overlay.classList.add('fade-out');

        mobileMenu.classList.add('fade-out');
        mobileMenu.classList.remove('fade-in');
    }
}