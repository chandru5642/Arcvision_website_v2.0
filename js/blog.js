const elements = document.querySelectorAll('.banner, .banner-image, .banner-overlay, .service, .service-content, .service-text, .service-image');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.15 });

elements.forEach(el => observer.observe(el));