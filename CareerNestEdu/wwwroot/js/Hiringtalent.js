document.addEventListener('DOMContentLoaded', function () {
    // FAQ accordion functionality
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', function () {
            const answer = this.nextElementSibling;
            const isActive = answer.classList.contains('active');

            // Close all answers
            document.querySelectorAll('.faq-answer').forEach(ans => {
                ans.classList.remove('active');
            });

            // Reset all icons
            document.querySelectorAll('.faq-question i').forEach(icon => {
                icon.classList.remove('fa-chevron-up');
                icon.classList.add('fa-chevron-down');
            });

            // If this answer wasn't active, open it
            if (!isActive) {
                answer.classList.add('active');
                this.querySelector('i').classList.remove('fa-chevron-down');
                this.querySelector('i').classList.add('fa-chevron-up');
            }
        });
    });

    // Page navigation functionality
    const mainHiringPage = document.getElementById('main-hiring-page');
    const postJobPage = document.getElementById('post-job-page');
    const browseCandidatesPage = document.getElementById('browse-candidates-page');
    const scheduleDemoModal = document.getElementById('scheduleDemoModal');

    // Show Post Job Page
    document.getElementById('postJobBtn').addEventListener('click', () => {
        mainHiringPage.style.display = 'none';
        postJobPage.style.display = 'block';
        browseCandidatesPage.style.display = 'none';
        window.scrollTo(0, 0);
    });

    document.getElementById('postJobActionBtn').addEventListener('click', () => {
        mainHiringPage.style.display = 'none';
        postJobPage.style.display = 'block';
        browseCandidatesPage.style.display = 'none';
        window.scrollTo(0, 0);
    });

    document.getElementById('ctaPostJobBtn').addEventListener('click', () => {
        mainHiringPage.style.display = 'none';
        postJobPage.style.display = 'block';
        browseCandidatesPage.style.display = 'none';
        window.scrollTo(0, 0);
    });

    // Show Browse Candidates Page
    document.getElementById('browseCandidatesBtn').addEventListener('click', () => {
        mainHiringPage.style.display = 'none';
        postJobPage.style.display = 'none';
        browseCandidatesPage.style.display = 'block';
        window.scrollTo(0, 0);
    });

    document.getElementById('browseCandidatesActionBtn').addEventListener('click', () => {
        mainHiringPage.style.display = 'none';
        postJobPage.style.display = 'none';
        browseCandidatesPage.style.display = 'block';
        window.scrollTo(0, 0);
    });

    document.getElementById('ctaBrowseCandidatesBtn').addEventListener('click', () => {
        mainHiringPage.style.display = 'none';
        postJobPage.style.display = 'none';
        browseCandidatesPage.style.display = 'block';
        window.scrollTo(0, 0);
    });

    // Schedule Demo Modal
    document.getElementById('scheduleDemoBtn').addEventListener('click', () => {
        scheduleDemoModal.classList.add('active');
    });

    document.getElementById('scheduleDemoActionBtn').addEventListener('click', () => {
        scheduleDemoModal.classList.add('active');
    });

    document.getElementById('closeScheduleDemoModal').addEventListener('click', () => {
        scheduleDemoModal.classList.remove('active');
    });

    // Close modals when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === scheduleDemoModal) {
            scheduleDemoModal.classList.remove('active');
        }
    });

    // Button click handlers for other actions
    document.getElementById('starterPlanBtn').addEventListener('click', () => {
        showNotification('Redirecting to Starter plan registration...', 'success');
    });

    document.getElementById('professionalPlanBtn').addEventListener('click', () => {
        showNotification('Redirecting to Professional plan registration...', 'success');
    });

    document.getElementById('enterprisePlanBtn').addEventListener('click', () => {
        showNotification('Redirecting to Enterprise plan contact form...', 'success');
    });

    // Job Post Form Submission
    document.getElementById('jobPostForm').addEventListener('submit', (e) => {
        e.preventDefault();
        showNotification('Job posted successfully!', 'success');
        // In a real application, you would submit the form data to a server here
    });

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
    const fadeElements = document.querySelectorAll('.feature-card, .step, .pricing-card, .testimonial-card, .action-card, .candidate-card');

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