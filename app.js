// 1. Scroll-Triggered Glass Navbar
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        // When scrolled down, make it a sleek glass header
        navbar.classList.add('glass', 'py-3', 'border-gray-100');
        navbar.classList.remove('py-5', 'border-transparent');
    } else {
        // When at the top, revert to the clean, transparent look
        navbar.classList.remove('glass', 'py-3', 'border-gray-100');
        navbar.classList.add('py-5', 'border-transparent');
    }
});

// 2. Mobile Menu Logic
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-menu');
const mobileNav = document.getElementById('mobile-nav');
const mobileLinks = document.querySelectorAll('.mobile-link');

// Open Menu
menuBtn.addEventListener('click', () => {
    mobileNav.classList.add('active');
});

// Close Menu
closeBtn.addEventListener('click', () => {
    mobileNav.classList.remove('active');
});

// Close Menu automatically when a user clicks a link inside it
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileNav.classList.remove('active');
    });
});

// 3. High-Performance Scroll Reveal Engine (Intersection Observer)
// This is the $50k agency secret. It watches elements and animates them ONLY when they enter the viewport.

const observerOptions = {
    root: null, // use the browser viewport
    rootMargin: '0px',
    threshold: 0.15 // Trigger when 15% of the element is visible on screen
};

const scrollObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add the 'active' class to trigger the CSS animation we wrote in styles.css
            entry.target.classList.add('active');
            
            // Stop observing the element once it has animated in (so it doesn't repeat)
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Grab every element with the 'reveal-element' class and start watching it
const revealElements = document.querySelectorAll('.reveal-element');
revealElements.forEach(element => {
    scrollObserver.observe(element);
});
  
