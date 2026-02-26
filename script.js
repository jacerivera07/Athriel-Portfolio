// Dark Mode Toggle
function toggleDarkMode() {
    if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    }
}

// Check for saved theme preference or prefer-color-scheme
if (localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
}

// Mobile Menu Toggle
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const icon = document.getElementById('mobile-menu-icon');
    
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        icon.setAttribute('data-lucide', 'x');
    } else {
        menu.classList.add('hidden');
        icon.setAttribute('data-lucide', 'menu');
    }
    lucide.createIcons();
}

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('shadow-md');
    } else {
        navbar.classList.remove('shadow-md');
    }
});

// Smooth Scroll for Anchor Links
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

// Project Filtering
function filterProjects(category) {
    const projects = document.querySelectorAll('.project-card');
    const buttons = document.querySelectorAll('[data-filter]');
    
    // Update active button
    buttons.forEach(btn => {
        if (btn.dataset.filter === category) {
            btn.classList.remove('bg-gray-200', 'dark:bg-gray-800', 'text-gray-700', 'dark:text-gray-300');
            btn.classList.add('bg-blue-600', 'text-white');
        } else {
            btn.classList.add('bg-gray-200', 'dark:bg-gray-800', 'text-gray-700', 'dark:text-gray-300');
            btn.classList.remove('bg-blue-600', 'text-white');
        }
    });
    
    // Filter projects with animation
    projects.forEach(project => {
        if (category === 'all' || project.dataset.category === category) {
            project.style.display = 'block';
            setTimeout(() => {
                project.style.opacity = '1';
                project.style.transform = 'scale(1)';
            }, 10);
        } else {
            project.style.opacity = '0';
            project.style.transform = 'scale(0.9)';
            setTimeout(() => {
                project.style.display = 'none';
            }, 300);
        }
    });
}

// Animate skill bars on scroll
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const skillBars = entry.target.querySelectorAll('.skill-bar');
            skillBars.forEach(bar => {
                const width = bar.style.width;
                bar.style.width = '0';
                setTimeout(() => {
                    bar.style.width = width;
                }, 100);
            });
        }
    });
}, observerOptions);

// Observe skills section
const skillsSection = document.getElementById('skills');
if (skillsSection) {
    observer.observe(skillsSection);
}

// Contact Form Handler
function handleSubmit(e) {
    e.preventDefault();
    
    // Get form values
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Create email body
    const emailBody = `Name: ${firstName} ${lastName}\nEmail: ${email}\n\nMessage:\n${message}`;
    
    // Create Gmail compose URL
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=jaceaysonr@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
    
    // Open Gmail in new tab
    window.open(gmailUrl, '_blank');
    
    // Show success message
    const toast = document.getElementById('toast');
    toast.classList.remove('translate-y-20', 'opacity-0');
    
    // Reset form
    e.target.reset();
    
    // Hide toast after 3 seconds
    setTimeout(() => {
        toast.classList.add('translate-y-20', 'opacity-0');
    }, 3000);
}

// Intersection Observer for fade-in animations
const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
        }
    });
}, {
    threshold: 0.1
});

// Observe elements for fade-in
document.querySelectorAll('.project-card, .bg-white, .bg-gray-50').forEach(el => {
    fadeObserver.observe(el);
});

// Typing effect for hero section (optional enhancement)
const heroText = document.querySelector('h1');
if (heroText) {
    heroText.style.opacity = '0';
    setTimeout(() => {
        heroText.style.transition = 'opacity 0.5s ease-in';
        heroText.style.opacity = '1';
    }, 100);
}


// LB Portal Modal Functions
function openLbModal() {
    const modal = document.getElementById('lbModal');
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    // Reinitialize Lucide icons for modal content
    setTimeout(() => lucide.createIcons(), 100);
}

function closeLbModal(event) {
    // Only close if clicking the backdrop or close button
    if (!event || event.target.id === 'lbModal' || event.target.closest('button')) {
        const modal = document.getElementById('lbModal');
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }
}

// AIDE Modal Functions
function openAideModal() {
    const modal = document.getElementById('aideModal');
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    // Reinitialize Lucide icons for modal content
    setTimeout(() => lucide.createIcons(), 100);
}

function closeAideModal(event) {
    // Only close if clicking the backdrop or close button
    if (!event || event.target.id === 'aideModal' || event.target.closest('button')) {
        const modal = document.getElementById('aideModal');
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }
}

// ALP Modal Functions
function openAlpModal() {
    const modal = document.getElementById('alpModal');
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    // Reinitialize Lucide icons for modal content
    setTimeout(() => lucide.createIcons(), 100);
}

function closeAlpModal(event) {
    // Only close if clicking the backdrop or close button
    if (!event || event.target.id === 'alpModal' || event.target.closest('button')) {
        const modal = document.getElementById('alpModal');
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }
}

// Image Zoom Modal Functions
function openImageModal(imageSrc) {
    const modal = document.getElementById('imageModal');
    const img = document.getElementById('zoomedImage');
    img.src = imageSrc;
    modal.classList.remove('hidden');
    // Reinitialize Lucide icons
    setTimeout(() => lucide.createIcons(), 100);
}

function closeImageModal() {
    const modal = document.getElementById('imageModal');
    modal.classList.add('hidden');
}

// Close modals with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeLbModal();
        closeAideModal();
        closeAlpModal();
        closeImageModal();
    }
});
