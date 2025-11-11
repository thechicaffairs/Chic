// Mobile Navigation Toggle
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {
    // Toggle Nav
    nav.classList.toggle('active');
    
    // Animate Links
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `fadeInUp 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });
    
    // Burger Animation
    burger.classList.toggle('toggle');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        burger.classList.remove('toggle');
    });
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for Scroll Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and sections
document.querySelectorAll('.service-card, .info-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Form Submission Handler
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('contactName').value;
        const email = document.getElementById('contactEmail').value;
        const phone = document.getElementById('contactPhone').value;
        const message = document.getElementById('contactMessage').value;
        
        // Construct mailto URL with pre-filled data
        const subject = encodeURIComponent(`Quote Request from ${name}`);
        const body = encodeURIComponent(
            `Name: ${name}\n` +
            `Email: ${email}\n` +
            `Phone: ${phone}\n\n` +
            `Event Details / Requirements:\n${message}\n\n` +
            `---\n` +
            `This is an automated quote request from Chic Events website.`
        );
        
        const mailtoLink = `mailto:thechicaffairs@gmail.com?subject=${subject}&body=${body}`;
        
        // Open default email client
        window.location.href = mailtoLink;
        
        // Optional: Reset form after a short delay
        setTimeout(() => {
            contactForm.reset();
        }, 500);
    });
}

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Print Quotation Function
function printQuotation() {
    window.print();
}

// Add print button functionality if needed
document.addEventListener('DOMContentLoaded', () => {
    // Highlight table rows on hover for better readability
    const tableRows = document.querySelectorAll('.quotation-table tbody tr');
    tableRows.forEach(row => {
        if (!row.classList.contains('category-row') && 
            !row.classList.contains('total-row') && 
            !row.classList.contains('grand-total-row')) {
            row.addEventListener('mouseenter', function() {
                this.style.backgroundColor = '#f0f7ff';
            });
            row.addEventListener('mouseleave', function() {
                this.style.backgroundColor = '';
            });
        }
    });
});

// Lightbox Functions for Image Gallery
let currentRotation = 0;

function openLightbox(imageSrc, caption) {
    const lightbox = document.getElementById('lightboxModal');
    const lightboxImg = document.getElementById('lightboxImage');
    const lightboxCaption = document.querySelector('.lightbox-caption');
    
    lightboxImg.src = imageSrc;
    lightboxCaption.textContent = caption;
    currentRotation = 0; // Reset rotation when opening new image
    lightboxImg.style.transform = `rotate(0deg)`;
    lightbox.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightboxModal');
    lightbox.style.display = 'none';
    document.body.style.overflow = 'auto';
    currentRotation = 0; // Reset rotation when closing
}

function rotateImage(degrees) {
    currentRotation += degrees;
    const lightboxImg = document.getElementById('lightboxImage');
    lightboxImg.style.transform = `rotate(${currentRotation}deg)`;
}

// Close lightbox when clicking outside the image
document.addEventListener('click', function(event) {
    const lightbox = document.getElementById('lightboxModal');
    const lightboxImg = document.getElementById('lightboxImage');
    const controls = document.querySelector('.lightbox-controls');
    
    // Don't close if clicking on image or controls
    if (event.target === lightbox && event.target !== lightboxImg && !controls.contains(event.target)) {
        closeLightbox();
    }
});

// Close lightbox with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeLightbox();
    }
});

