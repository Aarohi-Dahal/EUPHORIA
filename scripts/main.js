// Main JavaScript file for shared functionality

// Mobile navigation toggle
document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function() {
      navLinks.classList.toggle('active');
      document.body.classList.toggle('menu-open');
    });
  }
  
  // Close menu when clicking outside
  document.addEventListener('click', function(event) {
    if (
      navLinks && 
      navLinks.classList.contains('active') && 
      !event.target.closest('.nav-links') && 
      !event.target.closest('.hamburger')
    ) {
      navLinks.classList.remove('active');
      document.body.classList.remove('menu-open');
    }
  });

  // Handle active navigation state
  const currentLocation = window.location.href;
  const navItems = document.querySelectorAll('.nav-links a');
  
  navItems.forEach(item => {
    if (currentLocation.includes(item.href)) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
});

// Scroll animations for elements
const animateOnScroll = function() {
  const elements = document.querySelectorAll('.animate-on-scroll');
  
  elements.forEach(element => {
    const elementPosition = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    
    if (elementPosition < windowHeight - 100) {
      element.classList.add('animated');
    }
  });
};

// Add animate-on-scroll class to specific elements
document.addEventListener('DOMContentLoaded', function() {
  const elementsToAnimate = document.querySelectorAll('.about-content > *, .testimonial');
  
  elementsToAnimate.forEach(element => {
    element.classList.add('animate-on-scroll');
  });
  
  // Initial check
  animateOnScroll();
  
  // Listen for scroll events
  window.addEventListener('scroll', animateOnScroll);
});