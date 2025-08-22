// DOM Elements
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navbar = document.querySelector('.navbar');
const contactForm = document.getElementById('contact-form');
const projectModal = document.getElementById('project-modal');

// Navigation functionality
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Contact form handling
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Show loading state
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;
    
    // Simulate form submission (replace with your actual form handling)
    setTimeout(() => {
        // Show success message
        showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
        
        // Reset form
        contactForm.reset();
        
        // Reset button
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    }, 2000);
});

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
        ${message}
        <button class="notification-close" onclick="this.parentElement.remove()">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    document.body.appendChild(notification);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 5000);
}

// Project modal functionality
const projectData = {
    1: {
        title: "Password Generator",
        subtitle: "Python Security Tool",
        overview: "A secure password generator application built with Python that creates strong, customizable passwords with various complexity options and security features to help users maintain better digital security.",
        problem: "Many users struggle with creating strong, unique passwords for their accounts, often resorting to weak or repeated passwords that compromise their security. Manual password creation is time-consuming and often results in predictable patterns.",
        approach: "I developed a user-friendly Python application that generates cryptographically secure passwords with customizable parameters including length, character sets, and complexity requirements.",
        challenges: [
            "Ensuring true randomness for cryptographic security",
            "Creating an intuitive user interface with Tkinter",
            "Implementing various password strength requirements",
            "Balancing security with usability for different user needs"
        ],
        solutions: [
            "Used Python's secrets module for cryptographically secure random generation",
            "Designed a clean Tkinter GUI with clear options and real-time preview",
            "Implemented configurable character sets and length parameters",
            "Added password strength indicators and copy-to-clipboard functionality"
        ],
        technologies: ["Python 3.x", "Tkinter", "Secrets Module", "String Manipulation", "GUI Design", "Cryptography"],
        results: [
            "Generated cryptographically secure passwords with customizable parameters",
            "Implemented user-friendly interface for easy password generation",
            "Added features for different password complexity requirements",
            "Created a tool that enhances digital security practices"
        ],
        images: [
            "assets/project1-1.jpg",
            "assets/project1-2.jpg",
            "assets/project1-3.jpg"
        ],
        liveUrl: "https://www.linkedin.com/posts/sameerkhan252004_python-activity-7339948607023828992-sdzi?utm_source=share&utm_medium=member_desktop",
        githubUrl: "https://github.com/Sameer200425"
    },
    2: {
        title: "Rock Paper Scissors Game",
        subtitle: "Interactive Python Game",
        overview: "An engaging Rock Paper Scissors game built with Python featuring an intuitive GUI, score tracking, and interactive gameplay mechanics that provide entertainment while demonstrating programming concepts.",
        problem: "Creating an interactive game that's both fun and educational, while implementing proper game logic, user interface design, and score management in a desktop application.",
        approach: "I developed a complete game application using Python and Tkinter, focusing on clean code structure, user experience, and implementing proper game mechanics with visual feedback.",
        challenges: [
            "Designing an engaging user interface with Tkinter",
            "Implementing fair random choice generation for computer moves",
            "Creating smooth game flow and score tracking system",
            "Adding visual feedback and animations for better user experience"
        ],
        solutions: [
            "Created an intuitive GUI with clear buttons and visual game elements",
            "Used Python's random module for unbiased computer choice generation",
            "Implemented persistent score tracking with reset functionality",
            "Added visual indicators for wins, losses, and draws with appropriate messaging"
        ],
        technologies: ["Python 3.x", "Tkinter", "Random Module", "GUI Programming", "Event Handling", "Game Logic"],
        results: [
            "Built a fully functional interactive game with smooth gameplay",
            "Implemented comprehensive score tracking and game statistics",
            "Created an engaging user interface with visual feedback",
            "Demonstrated object-oriented programming and GUI development skills"
        ],
        images: [
            "assets/project2-1.jpg",
            "assets/project2-2.jpg",
            "assets/project2-3.jpg"
        ],
        liveUrl: "https://www.linkedin.com/posts/sameerkhan252004_python-codsoft-activity-7338093517409329153-auFR?utm_source=share&utm_medium=member_desktop",
        githubUrl: "https://github.com/Sameer200425"
    },
    3: {
        title: "Contact Book Application",
        subtitle: "Python Contact Management System",
        overview: "A comprehensive contact management application built with Python that allows users to efficiently store, search, edit, delete, and organize their personal and professional contacts with a user-friendly interface.",
        problem: "Managing contacts manually can be time-consuming and prone to errors. Users needed a reliable, easy-to-use digital solution for organizing contact information with search and edit capabilities.",
        approach: "I developed a complete contact management system using Python with a focus on data persistence, user-friendly interface design, and comprehensive CRUD (Create, Read, Update, Delete) operations.",
        challenges: [
            "Implementing efficient data storage and retrieval mechanisms",
            "Creating a user-friendly interface for contact management",
            "Ensuring data persistence and backup capabilities",
            "Implementing search functionality across multiple contact fields"
        ],
        solutions: [
            "Used SQLite database for reliable data storage and quick retrieval",
            "Designed an intuitive Tkinter interface with clear navigation and forms",
            "Implemented automatic data backup and validation systems",
            "Created comprehensive search functionality with multiple filter options"
        ],
        technologies: ["Python 3.x", "Tkinter", "SQLite Database", "File I/O", "Data Validation", "GUI Design"],
        results: [
            "Built a fully functional contact management system with database integration",
            "Implemented comprehensive CRUD operations with data validation",
            "Created an intuitive user interface for easy contact management",
            "Added search and filter capabilities for efficient contact retrieval"
        ],
        images: [
            "assets/project3-1.jpg",
            "assets/project3-2.jpg",
            "assets/project3-3.jpg"
        ],
        liveUrl: "https://www.linkedin.com/posts/sameerkhan252004_codsoft-python-codsoft-activity-7337750692419248128-vPbG?utm_source=share&utm_medium=member_desktop",
        githubUrl: "https://github.com/Sameer200425"
    }
};

function openProjectModal(projectId) {
    const project = projectData[projectId];
    if (!project) return;
    
    const modalBody = document.getElementById('modal-body');
    modalBody.innerHTML = `
        <div class="project-modal-content">
            <div class="project-modal-header">
                <h1 class="project-modal-title">${project.title}</h1>
                <p class="project-modal-subtitle">${project.subtitle}</p>
                <div class="project-modal-links">
                    <a href="${project.liveUrl}" target="_blank" class="btn btn-primary">
                        <i class="fas fa-external-link-alt"></i> View Live
                    </a>
                    <a href="${project.githubUrl}" target="_blank" class="btn btn-secondary">
                        <i class="fab fa-github"></i> View Code
                    </a>
                </div>
            </div>
            
            <div class="project-modal-section">
                <h3>Project Overview</h3>
                <p>${project.overview}</p>
            </div>
            
            <div class="project-modal-section">
                <h3>Problem Statement</h3>
                <p>${project.problem}</p>
            </div>
            
            <div class="project-modal-section">
                <h3>My Approach</h3>
                <p>${project.approach}</p>
            </div>
            
            <div class="project-modal-section">
                <h3>Challenges & Solutions</h3>
                <div class="challenges-solutions">
                    <div class="challenges">
                        <h4>Key Challenges:</h4>
                        <ul>
                            ${project.challenges.map(challenge => `<li>${challenge}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="solutions">
                        <h4>Solutions Implemented:</h4>
                        <ul>
                            ${project.solutions.map(solution => `<li>${solution}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            </div>
            
            <div class="project-modal-section">
                <h3>Technologies Used</h3>
                <div class="tech-stack">
                    ${project.technologies.map(tech => `<span class="tech-tag-large">${tech}</span>`).join('')}
                </div>
            </div>
            
            <div class="project-modal-section">
                <h3>Results & Impact</h3>
                <ul class="results-list">
                    ${project.results.map(result => `<li><i class="fas fa-check-circle"></i> ${result}</li>`).join('')}
                </ul>
            </div>
        </div>
    `;
    
    projectModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
    projectModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
projectModal.addEventListener('click', (e) => {
    if (e.target === projectModal) {
        closeProjectModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && projectModal.style.display === 'block') {
        closeProjectModal();
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.project-card, .about-content, .contact-content');
    animateElements.forEach(el => observer.observe(el));
});

// Typing animation for hero section
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Initialize typing animation when page loads
document.addEventListener('DOMContentLoaded', () => {
    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle) {
        const originalText = heroSubtitle.textContent;
        typeWriter(heroSubtitle, originalText, 50);
    }
});

// Add CSS styles for notifications and modal content
const additionalStyles = `
<style>
.notification {
    position: fixed;
    top: 100px;
    right: 20px;
    background: white;
    padding: 1rem 1.5rem;
    border-radius: 8px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    gap: 0.5rem;
    z-index: 3000;
    transform: translateX(400px);
    animation: slideIn 0.3s ease forwards;
}

.notification-success {
    border-left: 4px solid #28a745;
    color: #28a745;
}

.notification-close {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    margin-left: auto;
    color: #999;
}

@keyframes slideIn {
    to {
        transform: translateX(0);
    }
}

.project-modal-content {
    max-width: none;
}

.project-modal-header {
    text-align: center;
    margin-bottom: 2rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid #eee;
}

.project-modal-title {
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 0.5rem;
}

.project-modal-subtitle {
    font-size: 1.2rem;
    color: #666;
    margin-bottom: 2rem;
}

.project-modal-links {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
}

.project-modal-section {
    margin-bottom: 2.5rem;
}

.project-modal-section h3 {
    font-size: 1.5rem;
    color: #333;
    margin-bottom: 1rem;
    border-bottom: 2px solid #667eea;
    padding-bottom: 0.5rem;
}

.project-modal-section p {
    line-height: 1.7;
    color: #666;
    margin-bottom: 1rem;
}

.challenges-solutions {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
}

.challenges h4, .solutions h4 {
    color: #333;
    margin-bottom: 1rem;
}

.challenges ul, .solutions ul {
    padding-left: 1.5rem;
}

.challenges li, .solutions li {
    margin-bottom: 0.5rem;
    color: #666;
    line-height: 1.6;
}

.tech-stack {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
}

.tech-tag-large {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 8px 16px;
    border-radius: 20px;
    font-size: 14px;
    font-weight: 500;
}

.results-list {
    list-style: none;
    padding: 0;
}

.results-list li {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1rem;
    color: #666;
    line-height: 1.6;
}

.results-list i {
    color: #28a745;
    font-size: 1.1rem;
}

@media (max-width: 768px) {
    .challenges-solutions {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }
    
    .project-modal-title {
        font-size: 2rem;
    }
    
    .project-modal-links {
        flex-direction: column;
        align-items: center;
    }
}
</style>
`;

document.head.insertAdjacentHTML('beforeend', additionalStyles);
