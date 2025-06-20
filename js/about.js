// about.js - About page fade-in animation

document.addEventListener('DOMContentLoaded', () => {
  const fadeElements = document.querySelectorAll('banner, .banner-image,.section, .tile, .banner-overlay, .collaboration-text');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Run only once
      }
    });
  }, {
    threshold: 0.1
  });

  fadeElements.forEach(el => observer.observe(el));
});
document.addEventListener("DOMContentLoaded", function () {
  const currentPath = window.location.pathname.split("/").pop(); // get current file name
  const links = document.querySelectorAll(".nav-links a");

  links.forEach(link => {
    const href = link.getAttribute("href");

    // Match the link if href matches current path
    if (href === currentPath || (href === "index.html" && currentPath === "")) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
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

