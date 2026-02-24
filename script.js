const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', clearForm)

const clearForm = () => {
    setTimeout(() => {
        contactForm.reset();
    }, 500);
}