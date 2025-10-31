// Enhanced JavaScript for Partnership Process Pages
document.addEventListener('DOMContentLoaded', function () {
    // Button navigation handlers
    document.getElementById('begin-process-btn').addEventListener('click', function () {
        document.querySelector('.process-timeline').scrollIntoView({ behavior: 'smooth' });
    });

    document.getElementById('view-process-btn').addEventListener('click', function () {
        document.querySelector('.process-timeline').scrollIntoView({ behavior: 'smooth' });
    });

    document.getElementById('schedule-consultation-btn').addEventListener('click', function () {
        showNotification('Redirecting to consultation scheduling...', 'info');
    });

    document.getElementById('review-agreement-btn').addEventListener('click', function () {
        showNotification('Opening agreement template...', 'info');
    });

    document.getElementById('get-started-btn').addEventListener('click', function () {
        showNotification('Redirecting to registration page...', 'info');
    });

    document.getElementById('start-process-btn').addEventListener('click', function () {
        showNotification('Redirecting to registration page...', 'info');
    });

    document.getElementById('process-demo-btn').addEventListener('click', function () {
        showNotification('Redirecting to demo scheduling...', 'info');
    });

    // Create particles for hero sections
    function createParticles(containerId) {
        const particlesContainer = document.getElementById(containerId);
        if (!particlesContainer) return;

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

    // Create particles for all hero sections
    createParticles('particles1');

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
                top: 30px;
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
    const fadeElements = document.querySelectorAll('.benefit-card, .process-step');

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
});