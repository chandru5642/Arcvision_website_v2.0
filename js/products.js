
    document.addEventListener("DOMContentLoaded", () => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-visible");
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.1
      });

      document.querySelectorAll(".animate-on-scroll").forEach(el => {
        observer.observe(el);
      });
    });

    const elements = document.querySelectorAll('.banner, .banner-image, .banner-overlay, .service, .service-content, .service-text, .service-image');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.15 });

elements.forEach(el => observer.observe(el));
  // Burger Menu Toggle
  const burger = document.getElementById('burger-toggle');
  const navMenu = document.getElementById('main-nav');

  burger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });