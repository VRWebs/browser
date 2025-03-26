// Main Application Script
document.addEventListener('DOMContentLoaded', () => {
    // Initialize components
    initTheme();
    initMobileMenu();
    initScrollAnimations();
    initInteractiveElements();
    initDemoControls();
});

// Theme Management
function initTheme() {
    const themeToggle = document.querySelector('.theme-toggle');
    const savedTheme = localStorage.getItem('nexus-theme') || 'dark';
    
    // Apply saved theme
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    // Set up toggle
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('nexus-theme', newTheme);
    });
}

// Mobile Menu Toggle
function initMobileMenu() {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
}

// Scroll Animations
function initScrollAnimations() {
    const animateElements = document.querySelectorAll('[data-animate]');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.setAttribute('data-animate', 'fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    animateElements.forEach(el => observer.observe(el));
}

// Interactive Elements
function initInteractiveElements() {
    // Floating card hover effects
    const cards = document.querySelectorAll('.floating-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const angleX = (y - centerY) / 20;
            const angleY = (centerX - x) / 20;
            
            card.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'rotateX(0) rotateY(0)';
        });
    });
    
    // Cursor effects
    const cursorDot = document.createElement('div');
    cursorDot.className = 'cursor-dot';
    document.body.appendChild(cursorDot);
    
    document.addEventListener('mousemove', (e) => {
        cursorDot.style.left = `${e.clientX}px`;
        cursorDot.style.top = `${e.clientY}px`;
    });
    
    // Interactive buttons
    const buttons = document.querySelectorAll('.nexus-btn');
    
    buttons.forEach(button => {
        button.addEventListener('mousemove', (e) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            button.style.setProperty('--mouse-x', `${x}px`);
            button.style.setProperty('--mouse-y', `${y}px`);
        });
    });
}

// Demo Controls
function initDemoControls() {
    const param1 = document.getElementById('demo-param1');
    const param2 = document.getElementById('demo-param2');
    const quantumOrb = document.querySelector('.quantum-orb');
    
    const updateDemo = () => {
        const energy = param1.value / 100;
        const entanglement = param2.value / 100;
        
        quantumOrb.style.width = `${200 + (energy * 100)}px`;
        quantumOrb.style.height = `${200 + (energy * 100)}px`;
        quantumOrb.style.filter = `blur(${20 + (entanglement * 10)}px)`;
    };
    
    param1.addEventListener('input', updateDemo);
    param2.addEventListener('input', updateDemo);
    
    // Initial update
    updateDemo();
}