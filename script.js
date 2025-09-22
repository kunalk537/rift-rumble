// Mobile Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
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

// Active navigation highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Form submission handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const subject = this.querySelector('input[placeholder="Subject"]').value;
        const message = this.querySelector('textarea').value;
        
        // Simple validation
        if (!name || !email || !message) {
            alert('Please fill in all required fields.');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }
        
        // Simulate form submission
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            alert('Thank you for your message! We\'ll get back to you soon.');
            this.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 2000);
    });
}

// Download App button functionality
document.querySelectorAll('.btn-primary').forEach(btn => {
    btn.addEventListener('click', function() {
        const buttonText = this.textContent.trim();
        
        if (buttonText === 'DOWNLOAD APP') {
            // Simulate app download
            alert('Downloading Rift Rumble app... This would start the actual app download.');
            // window.open('https://your-app-store-link.com', '_blank');
        }
    });
});

// Business Plan: allow setting a Google Doc URL via query param for quick testing
(function setupBusinessPlan() {
    const params = new URLSearchParams(window.location.search);
    const docUrl = params.get('plan');
    const planLink = document.getElementById('planLink');
    const planFrame = document.getElementById('planFrame');
    if (!planLink || !planFrame) return;

    if (docUrl) {
        planLink.href = docUrl;
        // If given a normal docs link, convert to preview/embed when possible
        let embed = docUrl;
        if (docUrl.includes('/edit')) embed = docUrl.replace('/edit', '/preview');
        planFrame.src = embed;
    } else {
        // Keep blank; user can set later
        planLink.href = '#';
        planFrame.src = '';
    }
})();

// 3D model placeholder interaction
const modelPlaceholder = document.querySelector('.model-placeholder');
if (modelPlaceholder) {
    modelPlaceholder.addEventListener('click', function() {
        alert('3D Model Viewer would open here. This could integrate with a 3D model viewer like Three.js or similar.');
    });
    
    modelPlaceholder.addEventListener('mouseenter', function() {
        this.style.borderColor = 'rgba(255, 255, 255, 0.6)';
        this.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
    });
    
    modelPlaceholder.addEventListener('mouseleave', function() {
        this.style.borderColor = 'rgba(255, 107, 53, 0.3)';
        this.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
    });
}

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        navMenu.classList.remove('active');
    }
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and sections for animation
document.querySelectorAll('.feature-card, .team-member, .testimonial-card, .section-title, .curriculum-content, .contact-content').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Theme switching functionality
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;
let currentTheme = localStorage.getItem('theme') || 'dark';

// Set initial theme
html.setAttribute('data-theme', currentTheme);
updateThemeIcon();

themeToggle.addEventListener('click', () => {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', currentTheme);
    localStorage.setItem('theme', currentTheme);
    updateThemeIcon();
});

function updateThemeIcon() {
    const icon = themeToggle.querySelector('i');
    if (currentTheme === 'dark') {
        icon.className = 'fas fa-moon';
    } else {
        icon.className = 'fas fa-sun';
    }
}

// Font size toggle functionality
const fontSizeToggle = document.getElementById('fontSizeToggle');
let currentFontSize = localStorage.getItem('fontSize') || 'normal';

// Set initial font size
document.body.style.fontSize = getFontSizeValue(currentFontSize);

fontSizeToggle.addEventListener('click', () => {
    const sizes = ['small', 'normal', 'large'];
    const currentIndex = sizes.indexOf(currentFontSize);
    const nextIndex = (currentIndex + 1) % sizes.length;
    currentFontSize = sizes[nextIndex];
    
    document.body.style.fontSize = getFontSizeValue(currentFontSize);
    localStorage.setItem('fontSize', currentFontSize);
    updateFontSizeIcon();
});

function getFontSizeValue(size) {
    switch(size) {
        case 'small': return '14px';
        case 'large': return '18px';
        default: return '16px';
    }
}

function updateFontSizeIcon() {
    const icon = fontSizeToggle.querySelector('i');
    switch(currentFontSize) {
        case 'small':
            icon.className = 'fas fa-text-height';
            break;
        case 'large':
            icon.className = 'fas fa-text-height';
            break;
        default:
            icon.className = 'fas fa-text-height';
    }
}

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});
