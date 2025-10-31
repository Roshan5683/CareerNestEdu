// Job data with industries
const jobData = [
    {
        id: 1,
        title: "Frontend Developer",
        company: "TechCorp India",
        location: "Bangalore, Karnataka",
        type: "Full Time",
        experience: "2-4 years",
        salary: "₹8,50,000 - ₹11,00,000",
        tags: ["React", "JavaScript", "CSS"],
        industry: "technology",
        featured: true,
        posted: "2 days ago"
    },
    {
        id: 2,
        title: "Hotel Manager",
        company: "Grand Hotels India",
        location: "Mumbai, Maharashtra",
        type: "Full Time",
        experience: "5+ years",
        salary: "₹6,50,000 - ₹8,50,000",
        tags: ["Hospitality", "Management", "Customer Service"],
        industry: "hospitality",
        featured: false,
        posted: "5 days ago"
    },
    {
        id: 3,
        title: "Financial Analyst",
        company: "Finance Innovations",
        location: "Delhi NCR",
        type: "Full Time",
        experience: "3-5 years",
        salary: "₹7,00,000 - ₹9,50,000",
        tags: ["Excel", "Analysis", "Reporting"],
        industry: "finance",
        featured: false,
        posted: "1 week ago"
    },
    {
        id: 4,
        title: "Marketing Executive",
        company: "MarketEdge India",
        location: "Remote (India)",
        type: "Remote",
        experience: "2+ years",
        salary: "₹5,50,000 - ₹7,50,000",
        tags: ["Digital Marketing", "SEO", "Social Media"],
        industry: "marketing",
        featured: false,
        posted: "3 days ago"
    },
    {
        id: 5,
        title: "Registered Nurse",
        company: "HealthCare Plus",
        location: "Chennai, Tamil Nadu",
        type: "Full Time",
        experience: "1+ years",
        salary: "₹4,00,000 - ₹6,00,000",
        tags: ["Patient Care", "Medical", "Healthcare"],
        industry: "healthcare",
        featured: false,
        posted: "1 day ago"
    },
    {
        id: 6,
        title: "Software Engineer",
        company: "Software Experts",
        location: "Hyderabad, Telangana",
        type: "Full Time",
        experience: "3+ years",
        salary: "₹9,00,000 - ₹12,00,000",
        tags: ["Java", "Spring Boot", "SQL"],
        industry: "technology",
        featured: true,
        posted: "4 days ago"
    },
    {
        id: 7,
        title: "Sales Manager",
        company: "SalesPro India",
        location: "Delhi NCR",
        type: "Full Time",
        experience: "4+ years",
        salary: "₹8,00,000 - ₹10,00,000",
        tags: ["Sales", "Business Development", "CRM"],
        industry: "sales",
        featured: false,
        posted: "2 days ago"
    },
    {
        id: 8,
        title: "HR Recruiter",
        company: "TalentFinders",
        location: "Pune, Maharashtra",
        type: "Full Time",
        experience: "2+ years",
        salary: "₹4,50,000 - ₹6,50,000",
        tags: ["Recruitment", "HR", "Talent Acquisition"],
        industry: "hr",
        featured: false,
        posted: "3 days ago"
    },
    {
        id: 9,
        title: "Teacher",
        company: "Bright Future School",
        location: "Kolkata, West Bengal",
        type: "Full Time",
        experience: "3+ years",
        salary: "₹3,50,000 - ₹5,00,000",
        tags: ["Education", "Teaching", "Curriculum"],
        industry: "education",
        featured: false,
        posted: "1 week ago"
    },
    {
        id: 10,
        title: "Production Manager",
        company: "ManufacturePro",
        location: "Ahmedabad, Gujarat",
        type: "Full Time",
        experience: "5+ years",
        salary: "₹7,50,000 - ₹9,50,000",
        tags: ["Manufacturing", "Production", "Operations"],
        industry: "manufacturing",
        featured: false,
        posted: "5 days ago"
    }
];

// Keyword to industry mapping
const keywordIndustryMap = {
    // Technology keywords
    "software": "technology",
    "developer": "technology",
    "engineer": "technology",
    "programming": "technology",
    "coding": "technology",
    "java": "technology",
    "python": "technology",
    "javascript": "technology",
    "react": "technology",
    "node": "technology",
    "full stack": "technology",
    "frontend": "technology",
    "backend": "technology",
    "devops": "technology",
    "database": "technology",
    "cloud": "technology",
    "ai": "technology",
    "machine learning": "technology",
    "data science": "technology",

    // Healthcare keywords
    "nurse": "healthcare",
    "doctor": "healthcare",
    "medical": "healthcare",
    "healthcare": "healthcare",
    "hospital": "healthcare",
    "pharmacy": "healthcare",
    "patient": "healthcare",
    "care": "healthcare",
    "clinical": "healthcare",
    "therapist": "healthcare",

    // Finance keywords
    "finance": "finance",
    "financial": "finance",
    "accounting": "finance",
    "accountant": "finance",
    "banking": "finance",
    "investment": "finance",
    "analyst": "finance",
    "audit": "finance",
    "tax": "finance",

    // Hospitality keywords
    "hotel": "hospitality",
    "hospitality": "hospitality",
    "restaurant": "hospitality",
    "chef": "hospitality",
    "cook": "hospitality",
    "manager": "hospitality",
    "service": "hospitality",
    "tourism": "hospitality",
    "travel": "hospitality",

    // Education keywords
    "teacher": "education",
    "education": "education",
    "professor": "education",
    "instructor": "education",
    "trainer": "education",
    "school": "education",
    "college": "education",
    "university": "education",
    "curriculum": "education",
    "teaching": "education",

    // Manufacturing keywords
    "manufacturing": "manufacturing",
    "production": "manufacturing",
    "engineer": "manufacturing",
    "quality": "manufacturing",
    "assembly": "manufacturing",
    "factory": "manufacturing",
    "operator": "manufacturing",
    "technician": "manufacturing",

    // Marketing keywords
    "marketing": "marketing",
    "digital": "marketing",
    "seo": "marketing",
    "social media": "marketing",
    "content": "marketing",
    "brand": "marketing",
    "advertising": "marketing",
    "campaign": "marketing",

    // Sales keywords
    "sales": "sales",
    "business development": "sales",
    "account executive": "sales",
    "representative": "sales",
    "client": "sales",
    "customer": "sales",
    "revenue": "sales",

    // HR keywords
    "hr": "hr",
    "human resources": "hr",
    "recruiter": "hr",
    "talent": "hr",
    "acquisition": "hr",
    "people": "hr",
    "employee": "hr"
};

document.addEventListener('DOMContentLoaded', function () {
    // Button click handlers
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', function () {
            if (this.textContent.includes('Apply Now')) {
                showNotification('Applying to job...', 'info');
            } else if (this.textContent.includes('Load More Jobs')) {
                loadMoreJobs();
            } else if (this.textContent.includes('Search Jobs')) {
                // Handled by form submission
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

    // Modal functionality
    const modals = document.querySelectorAll('.modal');
    const openResumeBuilder = document.getElementById('open-resume-builder');
    const openCareerAdvice = document.getElementById('open-career-advice');
    const openInterviewPractice = document.getElementById('open-interview-practice');
    const openCreateProfile = document.getElementById('open-create-profile');
    const openUploadResume = document.getElementById('open-upload-resume');
    const closeButtons = document.querySelectorAll('.close-modal');

    // Open modals
    openResumeBuilder.addEventListener('click', () => {
        document.getElementById('resume-builder-modal').style.display = 'block';
    });

    openCareerAdvice.addEventListener('click', () => {
        document.getElementById('career-advice-modal').style.display = 'block';
    });

    openInterviewPractice.addEventListener('click', () => {
        document.getElementById('interview-practice-modal').style.display = 'block';
    });

    openCreateProfile.addEventListener('click', () => {
        document.getElementById('create-profile-modal').style.display = 'block';
    });

    openUploadResume.addEventListener('click', () => {
        document.getElementById('upload-resume-modal').style.display = 'block';
    });

    // Close modals
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            modals.forEach(modal => {
                modal.style.display = 'none';
            });
        });
    });

    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        modals.forEach(modal => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    });

    // Job search functionality
    const jobSearchForm = document.getElementById('job-search-form');
    const jobGrid = document.getElementById('job-grid');
    const industryFilter = document.getElementById('industry');
    const jobTitleInput = document.getElementById('job-title');

    // Initial job rendering
    renderJobs(jobData);

    // Job search form submission
    jobSearchForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const jobTitle = jobTitleInput.value.toLowerCase();
        const location = document.getElementById('location').value;
        const jobType = document.getElementById('job-type').value;

        // Auto-detect industry from keywords
        let detectedIndustry = '';
        for (const [keyword, industry] of Object.entries(keywordIndustryMap)) {
            if (jobTitle.includes(keyword)) {
                detectedIndustry = industry;
                break;
            }
        }

        // Set the industry filter if detected
        if (detectedIndustry) {
            industryFilter.value = detectedIndustry;
            showNotification(`Industry automatically set to: ${detectedIndustry.charAt(0).toUpperCase() + detectedIndustry.slice(1)}`, 'info');
        }

        filterJobs();
    });

    // Filter change handlers
    const filters = document.querySelectorAll('.filter-select');
    filters.forEach(filter => {
        filter.addEventListener('change', function () {
            filterJobs();
        });
    });

    // Job title input for real-time industry detection
    jobTitleInput.addEventListener('input', function () {
        const jobTitle = this.value.toLowerCase();

        // Auto-detect industry from keywords
        for (const [keyword, industry] of Object.entries(keywordIndustryMap)) {
            if (jobTitle.includes(keyword)) {
                industryFilter.value = industry;
                showNotification(`Industry automatically set to: ${industry.charAt(0).toUpperCase() + industry.slice(1)}`, 'info');
                break;
            }
        }
    });

    function filterJobs() {
        const jobTitle = jobTitleInput.value.toLowerCase();
        const location = document.getElementById('location').value;
        const jobType = document.getElementById('job-type').value;
        const industry = industryFilter.value;
        const experience = document.getElementById('experience').value;
        const salary = document.getElementById('salary').value;
        const datePosted = document.getElementById('date-posted').value;

        const filteredJobs = jobData.filter(job => {
            // Title filter
            if (jobTitle && !job.title.toLowerCase().includes(jobTitle) &&
                !job.company.toLowerCase().includes(jobTitle) &&
                !job.tags.some(tag => tag.toLowerCase().includes(jobTitle))) {
                return false;
            }

            // Location filter
            if (location && !job.location.toLowerCase().includes(location)) {
                return false;
            }

            // Job type filter
            if (jobType && job.type !== jobType) {
                return false;
            }

            // Industry filter
            if (industry && job.industry !== industry) {
                return false;
            }

            // Experience filter
            if (experience) {
                if (experience === 'entry' && !job.experience.includes('0-2') && !job.experience.includes('1+')) {
                    return false;
                } else if (experience === 'mid' && !job.experience.includes('2-5') && !job.experience.includes('3-5')) {
                    return false;
                } else if (experience === 'senior' && !job.experience.includes('5+')) {
                    return false;
                }
            }

            // Salary filter (simplified)
            if (salary) {
                const jobSalary = parseInt(job.salary.replace(/[^0-9]/g, ''));
                if (salary === '0-300000' && jobSalary > 300000) return false;
                if (salary === '300000-600000' && (jobSalary < 300000 || jobSalary > 600000)) return false;
                if (salary === '600000-1200000' && (jobSalary < 600000 || jobSalary > 1200000)) return false;
                if (salary === '1200000+' && jobSalary < 1200000) return false;
            }

            return true;
        });

        renderJobs(filteredJobs);

        if (filteredJobs.length === 0) {
            jobGrid.innerHTML = `
                <div style="grid-column: 1 / -1; text-align: center; padding: 40px;">
                    <i class="fas fa-search" style="font-size: 60px; color: var(--gray); margin-bottom: 20px;"></i>
                    <h3 style="color: var(--dark); margin-bottom: 10px;">No jobs found</h3>
                    <p style="color: var(--gray);">Try adjusting your filters or search terms</p>
                </div>
            `;
        }
    }

    function renderJobs(jobs) {
        jobGrid.innerHTML = '';

        jobs.forEach(job => {
            const jobCard = document.createElement('div');
            jobCard.className = `job-card ${job.featured ? 'featured' : ''}`;
            jobCard.innerHTML = `
                <div class="job-header">
                    <div class="job-company">
                        <div class="company-logo">${job.company.substring(0, 2)}</div>
                        <div class="job-info">
                            <h3>${job.title}</h3>
                            <p>${job.company}</p>
                        </div>
                    </div>
                    <span class="job-type">${job.type}</span>
                </div>
                <div class="job-details">
                    <p><i class="fas fa-map-marker-alt"></i> ${job.location}</p>
                    <p><i class="fas fa-clock"></i> Posted ${job.posted}</p>
                    <p><i class="fas fa-briefcase"></i> ${job.experience} experience</p>
                </div>
                <div class="job-tags">
                    ${job.tags.map(tag => `<span class="job-tag">${tag}</span>`).join('')}
                </div>
                <div class="job-actions">
                    <div class="job-salary">${job.salary}</div>
                    <button class="btn btn-primary">Apply Now</button>
                </div>
            `;

            jobGrid.appendChild(jobCard);
        });

        // Add event listeners to new Apply Now buttons
        jobGrid.querySelectorAll('.btn-primary').forEach(button => {
            button.addEventListener('click', function () {
                showNotification('Applying to job...', 'info');
            });
        });
    }

    function loadMoreJobs() {
        // In a real app, this would fetch more jobs from an API
        // For this demo, we'll just show a notification
        showNotification('Loading more jobs...', 'info');

        // Simulate loading delay
        setTimeout(() => {
            showNotification('No more jobs to load at this time', 'info');
        }, 1500);
    }

    // Resume Builder functionality
    const resumeInputs = document.querySelectorAll('#resume-builder-modal input, #resume-builder-modal textarea');

    resumeInputs.forEach(input => {
        input.addEventListener('input', updateResumePreview);
    });

    // Profile picture upload
    const profilePictureInput = document.getElementById('profile-picture');
    const profilePreview = document.getElementById('profile-preview');
    const previewProfile = document.getElementById('preview-profile');

    profilePictureInput.addEventListener('change', function (e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                profilePreview.innerHTML = `<img src="${e.target.result}" alt="Profile Picture">`;
                previewProfile.innerHTML = `<img src="${e.target.result}" alt="Profile Picture">`;
            };
            reader.readAsDataURL(file);
        }
    });

    // Video recording functionality
    const recordBtn = document.getElementById('record-btn');
    const stopBtn = document.getElementById('stop-btn');
    const videoPreview = document.getElementById('video-preview');
    let mediaRecorder;
    let recordedChunks = [];

    recordBtn.addEventListener('click', async function () {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
            mediaRecorder = new MediaRecorder(stream);

            mediaRecorder.ondataavailable = function (e) {
                if (e.data.size > 0) {
                    recordedChunks.push(e.data);
                }
            };

            mediaRecorder.onstop = function () {
                const blob = new Blob(recordedChunks, { type: 'video/webm' });
                const videoURL = URL.createObjectURL(blob);
                videoPreview.innerHTML = `<video src="${videoURL}" controls></video>`;
            };

            recordedChunks = [];
            mediaRecorder.start();
            recordBtn.disabled = true;
            stopBtn.disabled = false;

            // Auto stop after 60 seconds
            setTimeout(() => {
                if (mediaRecorder.state === 'recording') {
                    mediaRecorder.stop();
                    recordBtn.disabled = false;
                    stopBtn.disabled = true;
                }
            }, 60000);

        } catch (error) {
            console.error('Error accessing camera:', error);
            showNotification('Error accessing camera. Please check permissions.', 'error');
        }
    });

    stopBtn.addEventListener('click', function () {
        if (mediaRecorder && mediaRecorder.state === 'recording') {
            mediaRecorder.stop();
            recordBtn.disabled = false;
            stopBtn.disabled = true;

            // Stop all tracks
            mediaRecorder.stream.getTracks().forEach(track => track.stop());
        }
    });

    function updateResumePreview() {
        const name = document.getElementById('full-name').value || 'Your Name';
        const title = document.getElementById('job-title').value || 'Professional Title';
        const email = document.getElementById('email').value || 'email@example.com';
        const phone = document.getElementById('phone').value || '+91 9876543210';
        const address = document.getElementById('address').value || 'City, State';

        const degree = document.getElementById('degree').value || 'Degree';
        const university = document.getElementById('university').value || 'University';
        const year = document.getElementById('graduation-year').value || 'Year';

        const company = document.getElementById('company').value || 'Company';
        const position = document.getElementById('position').value || 'Position';
        const responsibilities = document.getElementById('responsibilities').value || 'Responsibilities description';

        const skills = document.getElementById('skills').value || 'Skill 1, Skill 2, Skill 3';

        document.getElementById('preview-name').textContent = name;
        document.getElementById('preview-title').textContent = title;
        document.getElementById('preview-contact').textContent = `${email} | ${phone} | ${address}`;
        document.getElementById('preview-education').textContent = `${degree}, ${university}, ${year}`;
        document.getElementById('preview-experience').textContent = `${position} at ${company}`;
        document.getElementById('preview-responsibilities').textContent = responsibilities;
        document.getElementById('preview-skills').textContent = skills;
    }

    // Generate Resume button
    document.getElementById('generate-resume').addEventListener('click', function () {
        showNotification('Resume generated successfully!', 'success');
        document.getElementById('resume-preview').style.display = 'block';
        document.querySelector('.download-section').style.display = 'block';
    });

    // Download Resume button
    document.getElementById('download-resume').addEventListener('click', function () {
        showNotification('Downloading your resume as PDF...', 'info');
        // In a real implementation, this would generate and download a PDF
        // For this demo, we'll just show a success message after a delay
        setTimeout(() => {
            showNotification('Resume downloaded successfully!', 'success');
        }, 2000);
    });

    // Create Profile functionality
    document.getElementById('complete-profile').addEventListener('click', function () {
        const name = document.getElementById('profile-name').value;
        const email = document.getElementById('profile-email').value;

        if (!name || !email) {
            showNotification('Please fill in all required fields', 'error');
            return;
        }

        showNotification('Profile created successfully!', 'success');
        setTimeout(() => {
            document.getElementById('create-profile-modal').style.display = 'none';
        }, 1500);
    });

    // Upload Resume functionality
    const resumeFileInput = document.getElementById('resume-file');
    const uploadedResume = document.getElementById('uploaded-resume');
    const resumeFileName = document.getElementById('resume-file-name');
    const resumeFileSize = document.getElementById('resume-file-size');

    resumeFileInput.addEventListener('change', function (e) {
        const file = e.target.files[0];
        if (file) {
            // Validate file type
            const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
            if (!validTypes.includes(file.type)) {
                showNotification('Please upload a PDF, DOC, or DOCX file', 'error');
                return;
            }

            // Validate file size (5MB)
            if (file.size > 5 * 1024 * 1024) {
                showNotification('File size must be less than 5MB', 'error');
                return;
            }

            // Display file info
            resumeFileName.textContent = file.name;
            resumeFileSize.textContent = `${(file.size / (1024 * 1024)).toFixed(1)} MB`;
            uploadedResume.classList.add('show');
        }
    });

    document.getElementById('save-resume').addEventListener('click', function () {
        if (!resumeFileInput.files[0]) {
            showNotification('Please select a resume file to upload', 'error');
            return;
        }

        showNotification('Resume uploaded successfully!', 'success');
        setTimeout(() => {
            document.getElementById('upload-resume-modal').style.display = 'none';
        }, 1500);
    });

    // Career Advice functionality
    const adviceCategories = document.querySelectorAll('.advice-category');
    const adviceContent = document.getElementById('advice-content');

    const adviceData = {
        resume: [
            {
                title: "Tailor Your Resume for Each Job",
                content: "Customize your resume for each position you apply to. Highlight the skills and experiences most relevant to the job description."
            },
            {
                title: "Use Action Verbs",
                content: "Start each bullet point with a strong action verb like 'developed', 'managed', 'implemented', or 'analyzed' to make your experience stand out."
            },
            {
                title: "Quantify Your Achievements",
                content: "Use numbers to demonstrate your impact. For example: 'Increased sales by 25%' or 'Reduced processing time by 30 minutes'."
            }
        ],
        interview: [
            {
                title: "Research the Company",
                content: "Learn about the company's mission, values, products, and recent news before your interview. This shows genuine interest."
            },
            {
                title: "Prepare Your Stories",
                content: "Have 3-5 stories ready that demonstrate your skills and achievements. Use the STAR method (Situation, Task, Action, Result) to structure your answers."
            },
            {
                title: "Ask Insightful Questions",
                content: "Prepare thoughtful questions to ask the interviewer about the role, team, company culture, and growth opportunities."
            }
        ],
        career: [
            {
                title: "Set Clear Goals",
                content: "Define both short-term and long-term career goals. Break them down into actionable steps with deadlines."
            },
            {
                title: "Continuous Learning",
                content: "Stay updated with industry trends and continuously develop new skills through courses, certifications, and self-study."
            },
            {
                title: "Seek Feedback",
                content: "Regularly ask for feedback from managers, peers, and mentors to identify areas for improvement and growth opportunities."
            }
        ],
        networking: [
            {
                title: "Build Genuine Relationships",
                content: "Focus on building authentic connections rather than just collecting contacts. Offer value before asking for help."
            },
            {
                title: "Leverage LinkedIn",
                content: "Optimize your LinkedIn profile and actively engage with content in your industry. Connect with professionals you admire."
            },
            {
                title: "Attend Industry Events",
                content: "Participate in conferences, workshops, and meetups to expand your professional network and learn from others in your field."
            }
        ]
    };

    adviceCategories.forEach(category => {
        category.addEventListener('click', () => {
            const categoryType = category.getAttribute('data-category');
            displayAdvice(categoryType);
        });
    });

    function displayAdvice(category) {
        const adviceItems = adviceData[category];
        let html = '';

        adviceItems.forEach(item => {
            html += `
                <div class="advice-item">
                    <h4>${item.title}</h4>
                    <p>${item.content}</p>
                </div>
            `;
        });

        adviceContent.innerHTML = html;
    }

    // Interview Practice functionality
    const practiceOptions = document.querySelectorAll('.practice-option');
    const questionList = document.getElementById('question-list');

    const practiceData = {
        technical: [
            {
                question: "Explain the concept of object-oriented programming.",
                tips: "Focus on the four main principles: encapsulation, inheritance, polymorphism, and abstraction."
            },
            {
                question: "How would you optimize a slow database query?",
                tips: "Discuss indexing, query restructuring, database normalization, and caching strategies."
            },
            {
                question: "What is the difference between let, const, and var in JavaScript?",
                tips: "Explain scope, hoisting, and reassignment capabilities for each declaration type."
            }
        ],
        behavioral: [
            {
                question: "Tell me about a time you faced a significant challenge at work and how you handled it.",
                tips: "Use the STAR method: Situation, Task, Action, Result. Focus on your problem-solving process."
            },
            {
                question: "Describe a situation where you had to work with a difficult team member.",
                tips: "Emphasize communication, conflict resolution, and maintaining professionalism."
            },
            {
                question: "Give an example of a time you made a mistake. How did you handle it?",
                tips: "Be honest but focus on what you learned and how you prevented similar mistakes in the future."
            }
        ],
        hr: [
            {
                question: "Why do you want to work for our company?",
                tips: "Connect your skills and values with the company's mission, culture, and recent achievements."
            },
            {
                question: "Where do you see yourself in 5 years?",
                tips: "Show ambition while demonstrating how you plan to grow with the company."
            },
            {
                question: "What are your salary expectations?",
                tips: "Research industry standards and be prepared to provide a range based on your experience and the role requirements."
            }
        ]
    };

    practiceOptions.forEach(option => {
        option.addEventListener('click', () => {
            const practiceType = option.getAttribute('data-type');
            displayQuestions(practiceType);
        });
    });

    function displayQuestions(type) {
        const questions = practiceData[type];
        let html = '';

        questions.forEach((item, index) => {
            html += `
                <div class="question-item">
                    <h4>Question ${index + 1}: ${item.question}</h4>
                    <p><strong>Tips:</strong> ${item.tips}</p>
                    <textarea class="answer-input" placeholder="Type your answer here..."></textarea>
                </div>
            `;
        });

        questionList.innerHTML = html;
    }

    // Notification function
    function showNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
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
            .notification.error {
                border-left-color: var(--secondary);
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
            .notification.error i {
                color: var(--secondary);
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
    const fadeElements = document.querySelectorAll('.job-card, .resource-card, .testimonial-card');

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