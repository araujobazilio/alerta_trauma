// Add smooth scrolling and enhanced interactions
document.addEventListener('DOMContentLoaded', function() {
    // Add click analytics (optional)
    const linkButtons = document.querySelectorAll('.link-button');
    
    linkButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Add a subtle click effect
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
            
            // Optional: Add analytics tracking here
            const linkText = this.querySelector('span').textContent;
            console.log(`Link clicked: ${linkText}`);
        });
        
        // Add hover sound effect (optional)
        button.addEventListener('mouseenter', function() {
            // You can add a subtle hover sound here if desired
        });
    });
    
    // Add loading animation
    const container = document.querySelector('.container');
    container.style.opacity = '0';
    container.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        container.style.transition = 'all 0.8s ease-out';
        container.style.opacity = '1';
        container.style.transform = 'translateY(0)';
    }, 100);
    
    // Add intersection observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
            }
        });
    }, observerOptions);
    
    // Observe all link buttons
    linkButtons.forEach(button => {
        observer.observe(button);
    });
    
    // Add keyboard navigation support
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
    });
    
    document.addEventListener('mousedown', function() {
        document.body.classList.remove('keyboard-navigation');
    });
});

// Add performance optimization
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        // Optional: Register service worker for offline functionality
        // navigator.serviceWorker.register('/sw.js');
    });
}

// Add touch feedback for mobile devices
if ('ontouchstart' in window) {
    const linkButtons = document.querySelectorAll('.link-button');
    
    linkButtons.forEach(button => {
        button.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.98)';
        });
        
        button.addEventListener('touchend', function() {
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
}