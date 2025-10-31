// partnership.js

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
            if (this.textContent.includes('College Partner') || this.textContent.includes('For Colleges')) {
                showNotification('Redirecting to College Partnership information...', 'success');
            } else if (this.textContent.includes('Employer Partner') || this.textContent.includes('For Employers')) {
                showNotification('Redirecting to Employer Partnership information...', 'success');
            } else if (this.textContent.includes('Learn More')) {
                showNotification('Loading partnership details...', 'info');
            } else if (this.textContent.includes('Get Started')) {
                showNotification('Redirecting to registration...', 'info');
            } else if (this.textContent.includes('Contact Sales')) {
                showNotification('Opening contact form...', 'info');
            }
        });
    });

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
    const fadeElements = document.querySelectorAll('.partnership-card, .step, .benefit-card, .tier-card, .testimonial-card');

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
    const cards = document.querySelectorAll('.partnership-card, .benefit-card, .tier-card, .testimonial-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            this.style.transform = this.style.transform.replace(/translateY\([^)]+\)/, '') + ' translateY(-10px)';
        });

        card.addEventListener('mouseleave', function () {
            this.style.transform = this.style.transform.replace(/translateY\([^)]+\)/, '');
        });
    });
});