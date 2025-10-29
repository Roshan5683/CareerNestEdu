    document.addEventListener('DOMContentLoaded', function() {
            // Mobile menu toggle
            const mobileMenu = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    mobileMenu.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    this.querySelector('i').classList.toggle('fa-bars');
    this.querySelector('i').classList.toggle('fa-times');
            });

    // Form toggle functionality
    const loginToggle = document.getElementById('loginToggle');
    const signupToggle = document.getElementById('signupToggle');
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const switchToSignup = document.getElementById('switchToSignup');
    const switchToLogin = document.getElementById('switchToLogin');
    const currentAuthBtn = document.getElementById('currentAuthBtn');

    function showLoginForm() {
        loginToggle.classList.add('active');
    signupToggle.classList.remove('active');
    loginForm.style.display = 'block';
    signupForm.style.display = 'none';
    currentAuthBtn.textContent = 'Sign Up';
            }

    function showSignupForm() {
        loginToggle.classList.remove('active');
    signupToggle.classList.add('active');
    loginForm.style.display = 'none';
    signupForm.style.display = 'block';
    currentAuthBtn.textContent = 'Login';
            }

    loginToggle.addEventListener('click', showLoginForm);
    signupToggle.addEventListener('click', showSignupForm);
    switchToSignup.addEventListener('click', function(e) {
        e.preventDefault();
    showSignupForm();
            });
    switchToLogin.addEventListener('click', function(e) {
        e.preventDefault();
    showLoginForm();
            });

    // Link navbar button to forms
    currentAuthBtn.addEventListener('click', function() {
                if (this.textContent === 'Sign Up') {
        showSignupForm();
                } else {
        showLoginForm();
                }

    // Scroll to auth section
    document.querySelector('.auth-container').scrollIntoView({
        behavior: 'smooth' 
                });
            });

    // User type selection
    const userTypeBtns = document.querySelectorAll('.user-type-btn');
    const userTypeInput = document.getElementById('userType');
            
            userTypeBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            userTypeBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            userTypeInput.value = this.getAttribute('data-type');
        });
            });

    // Password toggle functionality
    function setupPasswordToggle(passwordId, toggleId) {
                const passwordInput = document.getElementById(passwordId);
    const passwordToggle = document.getElementById(toggleId);

    passwordToggle.addEventListener('click', function() {
                    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    this.querySelector('i').classList.toggle('fa-eye');
    this.querySelector('i').classList.toggle('fa-eye-slash');
                });
            }

    setupPasswordToggle('loginPassword', 'loginPasswordToggle');
    setupPasswordToggle('signupPassword', 'signupPasswordToggle');

    // Form validation
    function validateEmail(email) {
                const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
            }

    function validatePassword(password) {
                return password.length >= 8 && /[a-zA-Z]/.test(password) && /[0-9]/.test(password);
            }

    // Login form validation
    const loginFormElement = document.getElementById('loginFormElement');
    const loginEmail = document.getElementById('loginEmail');
    const loginPassword = document.getElementById('loginPassword');

    loginFormElement.addEventListener('submit', function(e) {
        e.preventDefault();
    let isValid = true;

    // Validate email
    if (!validateEmail(loginEmail.value)) {
        loginEmail.classList.add('error');
    isValid = false;
                } else {
        loginEmail.classList.remove('error');
                }

    // Validate password
    if (loginPassword.value.length < 8) {
        loginPassword.classList.add('error');
    isValid = false;
                } else {
        loginPassword.classList.remove('error');
                }

    if (isValid) {
        showNotification('Login successful! Redirecting...', 'success');
                    // In a real application, you would submit the form here
                    setTimeout(() => {
        window.location.href = 'careernest.html';
                    }, 1500);
                }
            });

    // Signup form validation
    const signupFormElement = document.getElementById('signupFormElement');
    const signupName = document.getElementById('signupName');
    const signupEmail = document.getElementById('signupEmail');
    const signupPassword = document.getElementById('signupPassword');
    const confirmPassword = document.getElementById('confirmPassword');
    const agreeTerms = document.getElementById('agreeTerms');

    signupFormElement.addEventListener('submit', function(e) {
        e.preventDefault();
    let isValid = true;

    // Validate name
    if (signupName.value.trim() === '') {
        signupName.classList.add('error');
    isValid = false;
                } else {
        signupName.classList.remove('error');
                }

    // Validate email
    if (!validateEmail(signupEmail.value)) {
        signupEmail.classList.add('error');
    isValid = false;
                } else {
        signupEmail.classList.remove('error');
                }

    // Validate password
    if (!validatePassword(signupPassword.value)) {
        signupPassword.classList.add('error');
    isValid = false;
                } else {
        signupPassword.classList.remove('error');
                }

    // Validate password confirmation
    if (signupPassword.value !== confirmPassword.value) {
        confirmPassword.classList.add('error');
    isValid = false;
                } else {
        confirmPassword.classList.remove('error');
                }

    // Validate terms agreement
    if (!agreeTerms.checked) {
        agreeTerms.parentElement.style.color = 'var(--secondary)';
    isValid = false;
                } else {
        agreeTerms.parentElement.style.color = '';
                }

    if (isValid) {
        showNotification('Account created successfully!', 'success');
                    // In a real application, you would submit the form here
                    setTimeout(() => {
        window.location.href = 'careernest.html';
                    }, 1500);
                }
            });

    // Real-time validation
    signupName.addEventListener('input', function() {
                if (this.value.trim() !== '') {
        this.classList.remove('error');
                }
            });

    signupEmail.addEventListener('input', function() {
                if (validateEmail(this.value)) {
        this.classList.remove('error');
                }
            });

    signupPassword.addEventListener('input', function() {
                if (validatePassword(this.value)) {
        this.classList.remove('error');
                }
            });

    confirmPassword.addEventListener('input', function() {
                if (this.value === signupPassword.value) {
        this.classList.remove('error');
                }
            });

    agreeTerms.addEventListener('change', function() {
                if (this.checked) {
        this.parentElement.style.color = '';
                }
            });

            // Social login buttons
            document.querySelectorAll('.social-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            const platform = this.classList.contains('google') ? 'Google' : 'LinkedIn';
            showNotification(`Redirecting to ${platform} authentication...`, 'info');
        });
            });

    // Forgot password
    document.querySelector('.forgot-password').addEventListener('click', function(e) {
        e.preventDefault();
    showNotification('Password reset instructions sent to your email!', 'info');
            });

    // Scroll to top button
    const scrollToTopBtn = document.querySelector('.scroll-to-top');

    window.addEventListener('scroll', function() {
                if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.add('active');
                } else {
        scrollToTopBtn.classList.remove('active');
                }
            });

    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
            });

    // Header scroll effect
    window.addEventListener('scroll', function() {
                const header = document.querySelector('header');
                if (window.scrollY > 100) {
        header.style.padding = '5px 0';
    header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
                } else {
        header.style.padding = '0';
    header.style.boxShadow = 'var(--shadow)';
                }
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
        });
