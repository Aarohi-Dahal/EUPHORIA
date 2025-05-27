// Home page specific JavaScript

document.addEventListener('DOMContentLoaded', function() {
  // Auto-scroll testimonials
  const testimonialSlider = document.querySelector('.testimonial-slider');
  
  if (testimonialSlider && testimonialSlider.children.length > 1) {
    let scrolling = false;
    let scrollTimeout;
    let currentIndex = 0;
    const testimonials = testimonialSlider.querySelectorAll('.testimonial');
    
    const scrollToTestimonial = (index) => {
      if (index >= testimonials.length) index = 0;
      if (index < 0) index = testimonials.length - 1;
      
      currentIndex = index;
      testimonials[index].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      });
    };
    
    // Auto-scroll every 5 seconds
    const startAutoScroll = () => {
      scrollTimeout = setInterval(() => {
        if (!scrolling) {
          scrollToTestimonial(currentIndex + 1);
        }
      }, 5000);
    };
    
    startAutoScroll();
    
    // Pause auto-scroll when user interacts with slider
    testimonialSlider.addEventListener('mouseenter', () => {
      clearInterval(scrollTimeout);
    });
    
    testimonialSlider.addEventListener('mouseleave', () => {
      startAutoScroll();
    });
    
    // Track when user is manually scrolling
    testimonialSlider.addEventListener('scroll', () => {
      scrolling = true;
      clearTimeout(scrolling);
      scrollTimeout = setTimeout(() => {
        scrolling = false;
      }, 200);
    });
  }
  
  // Add hover effects for category cards
  const categoryCards = document.querySelectorAll('.category-card');
  
  categoryCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      card.style.transform = 'translateY(-4px)';
      card.style.boxShadow = 'var(--shadow-md)';
    });
    
    card.addEventListener('mouseleave', function() {
      card.style.transform = '';
      card.style.boxShadow = 'var(--shadow-sm)';
    });
  });
});