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

// Contact form submission
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', clearForm)

const clearForm = () => {
    setTimeout(() => {
        contactForm.reset();
    }, 500);
}