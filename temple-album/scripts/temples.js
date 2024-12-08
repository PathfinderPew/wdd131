// Update the footer with the current year and last modified date
document.getElementById('currentYear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;

// Hamburger menu functionality
const hamburger = document.getElementById('hamburger');
const menuLinks = document.getElementById('menu-links');

hamburger.addEventListener('click', () => {
    menuLinks.classList.toggle('active');
    menuLinks.classList.toggle('hidden');
    hamburger.textContent = menuLinks.classList.contains('active') ? 'X' : '☰';
});
