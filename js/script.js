document.addEventListener("DOMContentLoaded", function() {
    // Hamburger menu functionality
    let hamburgerIconOpen = document.querySelector('.nav-menu-icon.open');
    let hamburgerIconClose = document.querySelector('.nav-menu-icon.close');
    let navAdaptation = document.querySelector('.nav-adaptation');

    if (hamburgerIconOpen) {
        hamburgerIconOpen.addEventListener('click', function() {
            navAdaptation.style.display = 'flex';
            hamburgerIconClose.style.display = 'flex';
            this.style.display = 'none';
        });
    }

    if (hamburgerIconClose) {
        hamburgerIconClose.addEventListener('click', function() {
            navAdaptation.style.display = 'none';
            hamburgerIconOpen.style.display = 'flex';
            this.style.display = 'none';
        });
    }
});

document.querySelectorAll('.nav-menu-item').forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
    });
});

