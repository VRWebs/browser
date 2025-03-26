// Additional Animation Effects
document.addEventListener('DOMContentLoaded', () => {
    // Gradient text animation
    const gradientTexts = document.querySelectorAll('.title-line');
    
    gradientTexts.forEach((text, index) => {
        text.style.animationDelay = `${index * 0.2}s`;
    });
    
    // Floating card hover depth
    const floatingCards = document.querySelectorAll('.floating-card');
    
    floatingCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            card.style.transform = `perspective(1000px) rotateX(${(y - rect.height/2)/20}deg) rotateY(${(rect.width/2 - x)/20}deg)`;
            card.style.boxShadow = `${(x - rect.width/2)/10}px ${(y - rect.height/2)/10}px 30px rgba(0, 0, 0, 0.3)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
            card.style.boxShadow = 'var(--shadow-xl)';
        });
    });
    
    // Button ripple effect
    const buttons = document.querySelectorAll('.nexus-btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const ripple = document.createElement('span');
            ripple.className = 'ripple-effect';
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 1000);
        });
    });
    
    // Scroll progress indicator
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const scrollTop = document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const progress = (scrollTop / scrollHeight) * 100;
        
        progressBar.style.width = `${progress}%`;
    });
    
    // Dynamic background gradient
    const body = document.body;
    
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        body.style.background = `
            radial-gradient(
                circle at ${x * 100}% ${y * 100}%,
                rgba(138, 43, 226, 0.1) 0%,
                rgba(0, 0, 10, 1) 70%
            )
        `;
    });
});