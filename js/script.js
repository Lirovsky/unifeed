const btnMobileImg = document.getElementById('btnMobile');

function toggleMenu() {
    const nav = document.getElementById('navLinks');
    // toggle: adicione caso não tenha, remova caso tenha
    nav.classList.toggle('active');
}

btnMobileImg.addEventListener('click', toggleMenu);
