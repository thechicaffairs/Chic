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

// Service Modal Functions
function openServiceModal(serviceType) {
    console.log('Opening modal for:', serviceType);
    const modal = document.getElementById('serviceModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    
    console.log('Modal element:', modal);
    console.log('Modal title:', modalTitle);
    console.log('Modal body:', modalBody);
    
    // Get the quotation data based on service type
    const serviceData = getServiceQuotationData(serviceType);
    
    console.log('Service data:', serviceData);
    
    modalTitle.textContent = serviceData.title;
    modalBody.innerHTML = serviceData.content;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    console.log('Modal display set to:', modal.style.display);
}

function closeServiceModal() {
    const modal = document.getElementById('serviceModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside of it
document.addEventListener('click', function(event) {
    const modal = document.getElementById('serviceModal');
    if (event.target === modal) {
        closeServiceModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeServiceModal();
    }
});

// Get quotation data for each service type
function getServiceQuotationData(serviceType) {
    const data = {
        lighting: {
            title: 'Lighting Equipment Details',
            content: `
                <table>
                    <thead>
                        <tr>
                            <th>SI. No</th>
                            <th>Particulars</th>
                            <th>Size</th>
                            <th>Qty</th>
                            <th>Rate</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="modal-category-header">
                            <td colspan="6"><strong>LIGHTING EQUIPMENT</strong></td>
                        </tr>
                        <tr><td>2</td><td>Par cans</td><td>-</td><td>24</td><td>Rs. 400</td><td>Rs. 9,600</td></tr>
                        <tr><td>3</td><td>LED Par cans</td><td>-</td><td>32</td><td>Rs. 450</td><td>Rs. 14,400</td></tr>
                        <tr><td>4</td><td>2 Eye Blinder</td><td>-</td><td>8</td><td>Rs. 1,750</td><td>Rs. 14,000</td></tr>
                        <tr><td>5</td><td>4 Eye Blinder</td><td>-</td><td>4</td><td>Rs. 850</td><td>Rs. 3,400</td></tr>
                        <tr><td>6</td><td>Dimmer pack</td><td>-</td><td>1</td><td>Rs. 2,600</td><td>Rs. 2,600</td></tr>
                        <tr><td>7</td><td>Green Metal lights</td><td>-</td><td>50</td><td>Rs. 800</td><td>Rs. 40,000</td></tr>
                        <tr><td>8</td><td>Serial lights entrance</td><td>-</td><td>300</td><td>Rs. 90</td><td>Rs. 27,000</td></tr>
                        <tr><td>9</td><td>Avolite board</td><td>-</td><td>1</td><td>Rs. 7,000</td><td>Rs. 7,000</td></tr>
                        <tr><td>10</td><td>Lighting Engineer</td><td>-</td><td>1</td><td>-</td><td>Rs. 15,000</td></tr>
                    </tbody>
                </table>
            `
        },
        audio: {
            title: 'Audio System Details - 1000 PAX',
            content: `
                <table>
                    <thead>
                        <tr>
                            <th>SI. No</th>
                            <th>Particulars</th>
                            <th>Size</th>
                            <th>Qty</th>
                            <th>Rate</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="modal-category-header">
                            <td colspan="6"><strong>AUDIO SYSTEM - 1000 PAX</strong></td>
                        </tr>
                        <tr><td>12</td><td>Top speakers</td><td>-</td><td>8</td><td>-</td><td rowspan="7">Rs. 85,000</td></tr>
                        <tr><td>13</td><td>Sub woofers</td><td>-</td><td>4</td><td>-</td></tr>
                        <tr><td>14</td><td>Mixer</td><td>-</td><td>1</td><td>-</td></tr>
                        <tr><td>15</td><td>Amplifier</td><td>-</td><td>1</td><td>-</td></tr>
                        <tr><td>16</td><td>Monitor</td><td>-</td><td>4</td><td>-</td></tr>
                        <tr><td>17</td><td>Cordless mic</td><td>-</td><td>4</td><td>-</td></tr>
                        <tr><td>18</td><td>Cord mic</td><td>-</td><td>2</td><td>-</td></tr>
                        <tr><td>19</td><td>Audio Engineer</td><td>-</td><td>1</td><td>-</td><td>Rs. 15,000</td></tr>
                    </tbody>
                </table>
            `
        },
        led: {
            title: 'LED Wall Display Details',
            content: `
                <table>
                    <thead>
                        <tr>
                            <th>SI. No</th>
                            <th>Particulars</th>
                            <th>Size</th>
                            <th>Qty</th>
                            <th>Rate</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="modal-category-header">
                            <td colspan="6"><strong>LED WALL DISPLAY</strong></td>
                        </tr>
                        <tr><td>20</td><td>LED wall</td><td>26×12</td><td>1</td><td>Rs. 225</td><td>Rs. 70,200</td></tr>
                        <tr><td>21</td><td>LED wall side pillars</td><td>4×12</td><td>2</td><td>-</td><td>Rs. 16,000</td></tr>
                        <tr><td>22</td><td>LED wall riser</td><td>24×4</td><td>1</td><td>Rs. 65</td><td>Rs. 6,240</td></tr>
                        <tr><td>23</td><td>LED wall VJ</td><td>-</td><td>1</td><td>-</td><td>Rs. 15,000</td></tr>
                    </tbody>
                </table>
            `
        },
        stage: {
            title: 'Stage, Truss, Masking & Carpet Details',
            content: `
                <table>
                    <thead>
                        <tr>
                            <th>SI. No</th>
                            <th>Particulars</th>
                            <th>Size</th>
                            <th>Qty</th>
                            <th>Rate</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="modal-category-header">
                            <td colspan="6"><strong>STAGE</strong></td>
                        </tr>
                        <tr><td>1</td><td>Stage Black masking</td><td>56*32*4H</td><td>1</td><td>-</td><td>Rs. 50,000</td></tr>
                        
                        <tr class="modal-category-header">
                            <td colspan="6"><strong>TRUSS SYSTEM</strong></td>
                        </tr>
                        <tr><td>11</td><td>Aluminium Box Truss</td><td>40×30×24 H</td><td>-</td><td>-</td><td>Rs. 73,000</td></tr>
                        
                        <tr class="modal-category-header">
                            <td colspan="6"><strong>CARPET</strong></td>
                        </tr>
                        <tr><td>24</td><td>Red carpet</td><td>50×35</td><td>1</td><td>Rs. 6</td><td>Rs. 10,500</td></tr>
                        <tr><td>25</td><td>VIP area carpet</td><td>30×30</td><td>1</td><td>Rs. 6</td><td>Rs. 5,400</td></tr>
                        <tr><td>26</td><td>Red carpet for pathway</td><td>50×16</td><td>1</td><td>Rs. 6</td><td>Rs. 4,800</td></tr>
                        <tr><td>27</td><td>Grey carpet for stage</td><td>70×8</td><td>1</td><td>Rs. 6</td><td>Rs. 3,360</td></tr>
                        
                        <tr class="modal-category-header">
                            <td colspan="6"><strong>MASKING</strong></td>
                        </tr>
                        <tr><td>28</td><td>Black masking</td><td>47×3</td><td>1</td><td>Rs. 25</td><td>Rs. 3,525</td></tr>
                        <tr><td>29</td><td>Black masking</td><td>30×4</td><td>1</td><td>-</td><td>Rs. 3,000</td></tr>
                        <tr><td>30</td><td>Black masking</td><td>12×5</td><td>1</td><td>-</td><td>Rs. 1,500</td></tr>
                        <tr><td>31</td><td>Black masking</td><td>8×8</td><td>1</td><td>-</td><td>Rs. 1,600</td></tr>
                        <tr><td>32</td><td>Stage Skirting</td><td>70×3</td><td>1</td><td>Rs. 35</td><td>Rs. 7,350</td></tr>
                        <tr><td>33</td><td>Stage Skirting</td><td>8×3</td><td>2</td><td>-</td><td>Rs. 1,680</td></tr>
                    </tbody>
                </table>
            `
        },
        power: {
            title: 'Power Generation Details (2 Days)',
            content: `
                <table>
                    <thead>
                        <tr>
                            <th>SI. No</th>
                            <th>Particulars</th>
                            <th>Size</th>
                            <th>Qty</th>
                            <th>Rate</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="modal-category-header">
                            <td colspan="6"><strong>POWER GENERATION (2 DAYS)</strong></td>
                        </tr>
                        <tr><td>34</td><td>Genset 125 KVA</td><td>-</td><td>1</td><td>-</td><td>Rs. 14,000</td></tr>
                        <tr><td>35</td><td>Genset 62 KVA</td><td>-</td><td>1</td><td>-</td><td>Rs. 10,000</td></tr>
                        <tr><td>36</td><td>Genset transport charges</td><td>-</td><td>-</td><td>-</td><td>Rs. 6,000</td></tr>
                    </tbody>
                </table>
            `
        },
        logistics: {
            title: 'Logistics Details',
            content: `
                <table>
                    <thead>
                        <tr>
                            <th>SI. No</th>
                            <th>Particulars</th>
                            <th>Size</th>
                            <th>Qty</th>
                            <th>Rate</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="modal-category-header">
                            <td colspan="6"><strong>LOGISTICS</strong></td>
                        </tr>
                        <tr><td>37</td><td>Transport charges</td><td>-</td><td>-</td><td>-</td><td>Rs. 70,000</td></tr>
                    </tbody>
                </table>
            `
        }
    };
    
    return data[serviceType] || { title: 'Service Details', content: '<p>No data available</p>' };
}

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

