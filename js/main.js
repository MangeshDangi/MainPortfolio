// Update Projects Data
const projects = [
    {
        title: 'RecycleBin with Reward System',
        description: 'IoT-based smart recycling bin that rewards users for proper waste disposal.',
        image: 'https://assets-metrostyle.abs-cbn.com/prod/metrostyle/attachments/ef02db70-cec8-4dcf-bdf5-062b3c2660cf_donate%20banner.jpg',
        category: 'web',
        technologies: ['IoT', 'Arduino', 'Node.js'],
        github: 'https://github.com/username/recyclebin',
        demo: 'https://recyclebin1.onrender.com',
        features: [
            'Automatic waste detection and classification system',
            'Real-time reward points calculation and tracking',
            'User authentication and profile management',
            'Mobile-responsive dashboard for monitoring',
            'Integration with local recycling centers'
        ]
    }
];

// Update Populate Projects Function
function populateProjects(filter = 'all') {
    const projectsGrid = document.querySelector('.projects-grid');
    projectsGrid.innerHTML = '';
    
    const filteredProjects = filter === 'all' 
        ? projects 
        : projects.filter(project => project.category === filter);

    filteredProjects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.innerHTML = `
            <div class="project-image-container">
                <img src="${project.image}" alt="${project.title}">
                <span class="project-category">${project.category.toUpperCase()}</span>
            </div>
            <div class="project-info">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-features">
                    <h4>Key Features:</h4>
                    <ul>
                        ${project.features.map(feature => `
                            <li><i class="fas fa-check-circle"></i> ${feature}</li>
                        `).join('')}
                    </ul>
                </div>
                <div class="project-tech">
                    ${project.technologies.map(tech => `
                        <span class="tech-tag">${tech}</span>
                    `).join('')}
                </div>
                <div class="project-links">
                    <a href="${project.demo}" class="project-link demo" target="_blank">
                        <i class="fas fa-external-link-alt"></i> Live Demo
                    </a>
                    <a href="${project.github}" class="project-link github" target="_blank">
                        <i class="fab fa-github"></i> GitHub
                    </a>
                </div>
            </div>
        `;
        projectsGrid.appendChild(card);
    });
}

// Update Skills Data
const skills = {
    frontend: [
        { name: 'HTML/CSS', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'React', level: 80 },
        { name: 'Responsive Design', level: 85 }
    ],
    backend: [
        { name: 'Node.js', level: 80 },
        { name: 'Express.js', level: 75 },
        { name: 'MongoDB', level: 70 },
        { name: 'RESTful APIs', level: 80 }
    ],
    data: [
        { name: 'Python', level: 85 },
        { name: 'Data Analysis', level: 85 },
        { name: 'SQL', level: 75 },
        { name: 'Visualization', level: 80 }
    ],
    iot: [
        { name: 'Arduino', level: 80 },
        { name: 'Sensors', level: 75 },
        { name: 'Embedded C', level: 70 },
        { name: 'IoT Protocols', level: 75 }
    ],
    ai: [
        { name: 'Machine Learning', level: 75 },
        { name: 'Deep Learning', level: 70 },
        { name: 'Natural Language Processing', level: 75 },
        { name: 'Computer Vision', level: 70 }
    ]
};

// Update Populate Skills Function
function populateSkills() {
    Object.keys(skills).forEach(category => {
        const container = document.querySelector(`.skills-list.${category}`);
        if (!container) return;

        skills[category].forEach(skill => {
            const skillItem = document.createElement('div');
            skillItem.className = 'skill-item';
            skillItem.innerHTML = `
                <div class="skill-info">
                    <div class="skill-name">${skill.name}</div>
                    <div class="skill-progress">
                        <div class="skill-progress-bar" style="width: 0%"></div>
                    </div>
                    <div class="skill-level">${skill.level}%</div>
                </div>
            `;
            container.appendChild(skillItem);
        });
    });
}

// Add animation for skill bars
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress-bar');
    skillBars.forEach(bar => {
        const parent = bar.closest('.skill-item');
        const level = parent.querySelector('.skill-level').textContent;
        bar.style.width = level;
    });
}

// Update Experience Data
const experience = [
    {
        role: 'Freelance Web Developer',
        company: 'Self-Employed',
        period: 'July 2024 – Present',
        location: '📍 Remote',
        responsibilities: [
            'Developed 10+ cost-effective websites for small businesses and startups, delivering high-value solutions within budget constraints.',
            'Implemented responsive designs and SEO best practices, resulting in improved mobile traffic and search rankings.',
            'Provided end-to-end web development services from design to deployment, ensuring client satisfaction.',
            'Managed client relationships and project timelines efficiently while maintaining quality standards.',
            'Specialized in creating affordable e-commerce solutions and business landing pages using modern technologies.'
        ]
    },
    // {
    //     role: 'Operations Executive',
    //     company: 'Frais Farms',
    //     period: 'January 2024 – Present',
    //     location: '📍 Mumbai, India',
    //     responsibilities: [
    //         'Oversee day-to-day farm operations, ensuring efficiency in production and supply chain management.',
    //         'Manage inventory, logistics, and resource allocation to optimize workflow.',
    //         'Implement data-driven strategies to improve operational performance and reduce costs.',
    //         'Collaborate with teams to enhance quality control and sustainability practices.'
    //     ]
    // }
];

// Update Populate Experience Function
function populateExperience() {
    const timeline = document.querySelector('.timeline');
    experience.forEach(exp => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        timelineItem.innerHTML = `
            <div class="timeline-dot"></div>
            <div class="timeline-content">
                <span class="timeline-date">${exp.period}</span>
                <h3 class="timeline-role">${exp.role}</h3>
                <div class="timeline-company">
                    <i class="fas fa-building"></i>
                    ${exp.company}
                </div>
                <div class="timeline-location">${exp.location}</div>
                <ul class="timeline-points">
                    ${exp.responsibilities.map(point => `
                        <li>${point}</li>
                    `).join('')}
                </ul>
            </div>
        `;
        timeline.appendChild(timelineItem);
    });
}

// Enhanced Contact Form Handler
const contactForm = document.getElementById('contact-form');
const submitBtn = contactForm.querySelector('.submit-btn');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    try {
        // Add loading state
        submitBtn.classList.add('loading');
        submitBtn.disabled = true;
        
        const formData = new FormData(e.target);
        const formValues = Object.fromEntries(formData);
        
        // Test server connection without credentials
        try {
            const testResponse = await fetch('http://localhost:3000/api/test');
            if (!testResponse.ok) {
                throw new Error('Server not responding');
            }
        } catch (error) {
            console.error('Server connection error:', error);
            throw new Error('Cannot connect to server. Please make sure the server is running.');
        }
        
        const response = await fetch('http://localhost:3000/api/contact/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formValues),
        });
        
        if (response.ok) {
            const data = await response.json();
            showNotification('Message sent successfully!', 'success');
            e.target.reset();
        } else {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Failed to send message');
        }
    } catch (error) {
        console.error('Form submission error:', error);
        showNotification(error.message, 'error');
    } finally {
        // Reset button state
        submitBtn.classList.remove('loading');
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<span>Send Message</span><i class="fas fa-paper-plane"></i>';
    }
});

// Add notification system
function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
        <span>${message}</span>
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => notification.classList.add('show'), 10);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add floating label functionality
document.querySelectorAll('.form-group input, .form-group textarea').forEach(field => {
    field.addEventListener('focus', () => {
        field.nextElementSibling.classList.add('active');
    });
    
    field.addEventListener('blur', () => {
        if (!field.value) {
            field.nextElementSibling.classList.remove('active');
        }
    });
});

// Enhanced Mobile Menu Functionality
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const body = document.body;

function toggleMenu() {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
    body.classList.toggle('menu-open');
    
    // Toggle aria-expanded
    const isExpanded = hamburger.classList.contains('active');
    hamburger.setAttribute('aria-expanded', isExpanded);
}

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        if (navLinks.classList.contains('active')) {
            toggleMenu();
        }
    }
});

// Handle keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navLinks.classList.contains('active')) {
        toggleMenu();
    }
});

// Prevent scroll when menu is open
function toggleScroll() {
    body.style.overflow = body.style.overflow === 'hidden' ? '' : 'hidden';
}

hamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu();
    toggleScroll();
});

// Close menu and enable scroll when clicking menu items
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
            toggleMenu();
            toggleScroll();
        }
    });
});

// Scroll animations
const observerOptions = {
    threshold: 0.3
};

// Stats counter animation
function animateStats() {
    const stats = document.querySelectorAll('.stat-number');
    stats.forEach(stat => {
        const target = parseInt(stat.textContent);
        let current = 0;
        const increment = target / 30; // Divide by number of steps
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                stat.textContent = target + '+';
                clearInterval(timer);
            } else {
                stat.textContent = Math.ceil(current) + '+';
            }
        }, 50);
    });
}

// Update the observer callback
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            if (entry.target.id === 'about') {
                animateStats();
            }
            if (entry.target.id === 'skills') {
                animateSkillBars();
            }
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    section.classList.add('fade-in');
    observer.observe(section);
});

// Update active nav link on scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a'); // Add this line
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {  // Changed from navLinksItems to navLinks
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Theme Toggle
const themeToggle = document.querySelector('.theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    const icon = themeToggle.querySelector('i');
    if (document.body.classList.contains('dark-theme')) {
        icon.classList.replace('fa-moon', 'fa-sun');
    } else {
        icon.classList.replace('fa-sun', 'fa-moon');
    }
});

// Update Mobile Menu
const navContainer = document.querySelector('.nav-container');
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navContainer.classList.toggle('active');
    body.classList.toggle('menu-open');
});

// Close menu when clicking links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navContainer.classList.remove('active');
        body.classList.remove('menu-open');
    });
});

// Active link indicator
function updateActiveLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionBottom = sectionTop + section.offsetHeight;
        const currentScroll = window.scrollY;
        
        if (currentScroll >= sectionTop && currentScroll < sectionBottom) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${section.id}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', updateActiveLink);
window.addEventListener('load', updateActiveLink);

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    populateProjects();
    populateSkills();
    populateExperience();

    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            populateProjects(btn.dataset.filter);
        });
    });
    typeEffect();

    // Check if particlesJS is loaded
    if (typeof particlesJS !== 'undefined') {
        // Particle animation configuration
        particlesJS('particles-js', {
            particles: {
                number: { value: 80, density: { enable: true, value_area: 800 } },
                color: { value: '#ffffff' },
                shape: { type: 'circle' },
                opacity: { value: 0.5, random: true },
                size: { value: 3, random: true },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#ffffff',
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: 'none',
                    random: true,
                    out_mode: 'out'
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: { enable: true, mode: 'grab' },
                    onclick: { enable: true, mode: 'push' },
                    resize: true
                }
            }
        });
    }
    initThemeToggle();
});

// Typing Animation
const titles = ['Web Developer', 'Data Analyst', 'IoT Enthusiast'];
let titleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const typedText = document.querySelector('.typed-text');
    const currentTitle = titles[titleIndex];
    
    if (isDeleting) {
        typedText.textContent = currentTitle.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typedText.textContent = currentTitle.substring(0, charIndex + 1);
        charIndex++;
    }
    
    if (!isDeleting && charIndex === currentTitle.length) {
        setTimeout(() => isDeleting = true, 1500);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        titleIndex = (titleIndex + 1) % titles.length;
    }
    
    const typingSpeed = isDeleting ? 100 : 200;
    setTimeout(typeEffect, typingSpeed);
}

// Add this after your existing code

// Service Data
const services = [
    {
        id: 'basic-website',
        title: 'Basic Static Website',
        description: 'Ideal for portfolios, landing pages, or simple informational sites.',
        features: [
            'Responsive Design for all devices',
            'SEO Optimization',
            'Contact Form Integration',
            'Social Media Integration',
            'Google Analytics Setup',
            'Basic Security Features'
        ],
        included: [
            'Up to 5 Pages',
            'Mobile-Friendly Design',
            '2 Rounds of Revisions',
            '1 Month Free Support'
        ],
        timeline: '1-2 weeks',
        priceRange: '₹5,000 – ₹15,000'
    },
    {
        id: 'business-website',
        title: 'Small Business Website',
        description: 'Suitable for businesses requiring 5-10 pages with basic features.',
        features: [
            'Custom Design & Branding',
            'Content Management System',
            'Image Gallery & Sliders',
            'Contact Forms & Maps',
            'Newsletter Integration',
            'Performance Optimization'
        ],
        included: [
            'Up to 10 Pages',
            'CMS Integration',
            '3 Rounds of Revisions',
            '3 Months Free Support'
        ],
        timeline: '2-3 weeks',
        priceRange: '₹15,000 – ₹30,000'
    },
    {
        id: 'ecommerce-website',
        title: 'E-commerce Website',
        description: 'Complete online store with product management and payment integration.',
        features: [
            'Product Management System',
            'Payment Gateway Integration',
            'Order Tracking System',
            'Inventory Management',
            'Customer Accounts',
            'Advanced Security'
        ],
        included: [
            'Unlimited Products',
            'Payment Gateway Setup',
            '4 Rounds of Revisions',
            '6 Months Free Support'
        ],
        timeline: '4-6 weeks',
        priceRange: '₹30,000 – ₹70,000+'
    },
    {
        id: 'custom-webapp',
        title: 'Custom Web Application',
        description: 'Complex features like dashboards, data visualization, or IoT integration.',
        features: [
            'Custom Backend Development',
            'Database Design & Integration',
            'API Development',
            'Real-time Features',
            'Advanced Analytics',
            'Custom Security Implementation'
        ],
        included: [
            'Full Custom Development',
            'Documentation',
            'Testing & QA',
            '12 Months Free Support'
        ],
        timeline: '8-12 weeks',
        priceRange: '₹50,000 – ₹1,50,000+'
    },
    {
        id: 'ai-website',
        title: 'AI-Powered Website',
        description: 'Smart websites with integrated AI features for enhanced user experience.',
        features: [
            'AI Chatbot Integration',
            'Smart Content Recommendations',
            'Voice Search & Commands',
            'Personalized User Experience',
            'Natural Language Processing',
            'Automated Data Analysis'
        ],
        included: [
            'Custom AI Model Integration',
            'API Implementation',
            '4 Rounds of Revisions',
            '6 Months Free Support',
            'AI Analytics Dashboard',
            'Regular Model Updates'
        ],
        timeline: '6-8 weeks',
        priceRange: '₹80,000 – ₹2,00,000+'
    }
];

// Initialize service modal functionality
document.addEventListener('DOMContentLoaded', function() {
    const serviceModal = document.getElementById('serviceModal');
    const modalClose = document.querySelector('.modal-close');
    const serviceCards = document.querySelectorAll('.service-card');

    function openServiceModal(serviceId) {
        const service = services.find(s => s.id === serviceId);
        if (!service) return;

        const modalBody = document.querySelector('.service-details');
        modalBody.dataset.serviceId = serviceId; // Add this line
        modalBody.innerHTML = `
            <h2>${service.title}</h2>
            <div class="detail-section">
                <p>${service.description}</p>
                <span class="price-tag">${service.priceRange}</span>
            </div>
            <div class="detail-section">
                <h3>Key Features</h3>
                <ul class="detail-list">
                    ${service.features.map(feature => `
                        <li><i class="fas fa-check"></i>${feature}</li>
                    `).join('')}
                </ul>
            </div>
            <div class="detail-section">
                <h3>What's Included</h3>
                <ul class="detail-list">
                    ${service.included.map(item => `
                        <li><i class="fas fa-check"></i>${item}</li>
                    `).join('')}
                </ul>
            </div>
            <div class="detail-section">
                <h3>Timeline</h3>
                <p>Estimated delivery: ${service.timeline}</p>
            </div>
        `;

        serviceModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeServiceModal() {
        serviceModal.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Add click event listeners to service cards
    serviceCards.forEach(card => {
        card.addEventListener('click', () => {
            const serviceId = card.getAttribute('data-service-id');
            console.log('Service clicked:', serviceId); // Debug line
            openServiceModal(serviceId);
        });
    });

    // Close modal events
    modalClose.addEventListener('click', closeServiceModal);
    serviceModal.addEventListener('click', (e) => {
        if (e.target === serviceModal) {
            closeServiceModal();
        }
    });

    // Handle ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && serviceModal.classList.contains('active')) {
            closeServiceModal();
        }
    });

    // Handle order form submission
    const orderForm = document.getElementById('orderForm');
    if (orderForm) {
        orderForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = new FormData(orderForm);
            const formValues = Object.fromEntries(formData);
            
            try {
                const submitBtn = orderForm.querySelector('.submit-btn');
                submitBtn.classList.add('loading');
                
                // Add service details to form data
                const serviceId = document.querySelector('.service-details').dataset.serviceId;
                const serviceName = document.querySelector('.service-details h2').textContent;
                
                const response = await fetch("https://mainportfolio-bjtu.onrender.com/api/orders/submit", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        ...formValues,
                        serviceId,
                        serviceName
                    }),
                });
                
                if (response.ok) {
                    showNotification('Order placed successfully!', 'success');
                    closeServiceModal();
                    orderForm.reset();
                } else {
                    const errorData = await response.json();
                    throw new Error(errorData.message || 'Failed to place order');
                }
            } catch (error) {
                showNotification(error.message, 'error');
            } finally {
                const submitBtn = orderForm.querySelector('.submit-btn');
                submitBtn.classList.remove('loading');
            }
        });
    }
});

// Theme Toggle Implementation
function initThemeToggle() {
    const themeToggle = document.querySelector('.theme-toggle');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Get theme from localStorage or system preference
    const currentTheme = localStorage.getItem('theme') || 
                        (prefersDarkScheme.matches ? 'dark' : 'light');
    
    // Set initial theme
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateThemeIcon(currentTheme);
    
    themeToggle.addEventListener('click', () => {
        const newTheme = document.documentElement.getAttribute('data-theme') === 'dark' 
            ? 'light' 
            : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
        
        // Add animation class

        themeToggle.classList.add('rotate');
        setTimeout(() => themeToggle.classList.remove('rotate'), 300);
    });
    
    // Listen for system theme changes
    prefersDarkScheme.addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
            const newTheme = e.matches ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', newTheme);
            updateThemeIcon(newTheme);
        }
    });
}

function updateThemeIcon(theme) {
    const icon = document.querySelector('.theme-toggle i');
    if (theme === 'dark') {
        icon.classList.replace('fa-moon', 'fa-sun');
    } else {
        icon.classList.replace('fa-sun', 'fa-moon');
    }
}

// Add to your DOMContentLoaded event listener
document.addEventListener('DOMContentLoaded', () => {
    // ...existing code...
    initThemeToggle();
    // ...existing code...
});
