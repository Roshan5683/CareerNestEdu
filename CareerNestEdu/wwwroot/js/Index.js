// careernest.js

document.addEventListener('DOMContentLoaded', function () {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Button click handlers
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', function () {
            if (this.textContent.includes('Looking for a Job') || this.textContent.includes('Create Your Profile')) {
                window.location.href = 'signup.html?type=jobseeker';
            } else if (this.textContent.includes('Hiring Talent') || this.textContent.includes('Post a Job')) {
                window.location.href = 'signup.html?type=employer';
            } else if (this.textContent.includes('College Partner') || this.textContent.includes('Partner Your College')) {
                window.location.href = 'signup.html?type=college';
            } else if (this.textContent.includes('View Programs') || this.textContent.includes('Explore Features')) {
                showNotification('Loading content...', 'info');
            } else if (this.textContent.includes('Learn More')) {
                window.location.href = 'signup.html?type=college';
            }
        });
    });

    // Animated counter for stats
    function animateCounter(element, finalValue, duration = 2000) {
        let startValue = 0;
        const increment = finalValue / (duration / 16);
        const timer = setInterval(() => {
            startValue += increment;
            if (startValue >= finalValue) {
                element.textContent = finalValue.toLocaleString();
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(startValue).toLocaleString();
            }
        }, 16);
    }

    // Initialize counters when stats section is in view
    const statsSection = document.querySelector('.stats');
    const stat1 = document.getElementById('stat1');
    const stat2 = document.getElementById('stat2');
    const stat3 = document.getElementById('stat3');
    const stat4 = document.getElementById('stat4');

    let countersAnimated = false;

    function checkScroll() {
        const sectionTop = statsSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight - 100 && !countersAnimated) {
            animateCounter(stat1, 15600);
            animateCounter(stat2, 11200);
            animateCounter(stat3, 185);
            animateCounter(stat4, 420);
            countersAnimated = true;
        }
    }

    window.addEventListener('scroll', checkScroll);
    checkScroll();

    // Scroll to top button
    const scrollToTopBtn = document.querySelector('.scroll-to-top');

    window.addEventListener('scroll', function () {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.add('active');
        } else {
            scrollToTopBtn.classList.remove('active');
        }
    });

    scrollToTopBtn.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Create particles for hero section
    function createParticles() {
        const particlesContainer = document.getElementById('particles');
        const particleCount = 30;

        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');

            // Random properties
            const size = Math.random() * 6 + 2;
            const posX = Math.random() * 100;
            const posY = Math.random() * 100;
            const delay = Math.random() * 5;
            const duration = Math.random() * 10 + 10;

            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.left = `${posX}%`;
            particle.style.top = `${posY}%`;
            particle.style.animation = `float ${duration}s ease-in-out ${delay}s infinite`;
            particle.style.opacity = Math.random() * 0.5 + 0.2;

            particlesContainer.appendChild(particle);
        }
    }

    createParticles();

    // Notification function
    function showNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
                <span>${message}</span>
            </div>
        `;

        // Add styles for notification
        const style = document.createElement('style');
        style.textContent = `
            .notification {
                position: fixed;
                top: 120px;
                right: 30px;
                background: white;
                padding: 18px 25px;
                border-radius: 12px;
                box-shadow: 0 8px 25px rgba(0,0,0,0.15);
                z-index: 10000;
                transform: translateX(400px);
                transition: transform 0.4s ease;
                border-left: 5px solid var(--primary);
                max-width: 350px;
            }
            .notification.success {
                border-left-color: var(--success);
            }
            .notification.info {
                border-left-color: var(--primary);
            }
            .notification-content {
                display: flex;
                align-items: center;
                gap: 12px;
            }
            .notification i {
                font-size: 22px;
            }
            .notification.success i {
                color: var(--success);
            }
            .notification.info i {
                color: var(--primary);
            }
        `;
        document.head.appendChild(style);

        // Add to page and animate in
        document.body.appendChild(notification);
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 10);

        // Remove after 3 seconds
        setTimeout(() => {
            notification.style.transform = 'translateX(400px)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 400);
        }, 3500);
    }

    // Add intersection observer for fade-in animations
    const fadeElements = document.querySelectorAll('.user-card, .feature-card, .college-card, .testimonial-card');

    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
                fadeObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    fadeElements.forEach(el => {
        el.style.opacity = '0';
        fadeObserver.observe(el);
    });

    // Add hover effects to cards
    const cards = document.querySelectorAll('.user-card, .feature-card, .college-card, .testimonial-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            this.style.transform = this.style.transform.replace(/translateY\([^)]+\)/, '') + ' translateY(-10px)';
        });

        card.addEventListener('mouseleave', function () {
            this.style.transform = this.style.transform.replace(/translateY\([^)]+\)/, '');
        });
    });
});