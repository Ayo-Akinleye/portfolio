// Header
const menuLinks = document.querySelector(".menu-links");
const navLinks = document.querySelector(".nav-links");
const logo = document.querySelector('.logo-joy');
const menuButton = document.querySelector('.menu-button');

const showMenu = () => {
    menuLinks.style.display = 'flex';
}

const closeMenu = () => {
    menuLinks.style.display = 'none';
}
// Project flip card
const previewBtn = document.querySelectorAll('.preview-btn');
const closeBtn = document.querySelectorAll('.close-btn');

previewBtn.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        btn.closest('.flip-container').classList.add('flipped');
    });
});

closeBtn.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        btn.closest('.flip-container').classList.remove('flipped');
    });
});

// Contact form submission
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', clearForm)

const clearForm = () => {
    setTimeout(() => {
        contactForm.reset();
    });
}