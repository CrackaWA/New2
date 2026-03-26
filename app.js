// Waits for the HTML to fully load before trying to animate anything
document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Scroll-Triggered Glass Navbar
    const navbar = document.getElementById('navbar');

    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('glass', 'py-3', 'border-gray-100');
                navbar.classList.remove('py-5', 'border-transparent');
            } else {
                navbar.classList.remove('glass', 'py-3', 'border-gray-100');
                navbar.classList.add('py-5', 'border-transparent');
            }
        });
    }

    // 2. Mobile Menu Logic
    const menuBtn = document.getElementById('menu-btn');
    const closeBtn = document.getElementById('close-menu');
    const mobileNav = document.getElementById('mobile-nav');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    if (menuBtn && closeBtn && mobileNav) {
        menuBtn.addEventListener('click', () => mobileNav.classList.add('active'));
        closeBtn.addEventListener('click', () => mobileNav.classList.remove('active'));
        
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => mobileNav.classList.remove('active'));
        });
    }

    // 3. High-Performance Scroll Reveal Engine (FIXED)
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.10 // Triggers slightly earlier to prevent mobile blank screens
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal-element');
    revealElements.forEach(element => {
        scrollObserver.observe(element);
    });

});
