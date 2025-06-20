// -------------------- base.js --------------------
document.addEventListener('DOMContentLoaded', function() {


  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        window.scrollTo({
          top: targetElement.offsetTop - 100,
          behavior: 'smooth'
        });
      }
    });
  });
});

// --------------------------------------------------
// -------------------- NEXT FILE -------------------
// --------------------------------------------------

// -------------------- layout.js --------------------
document.addEventListener('DOMContentLoaded', function () {
  const sections = document.querySelectorAll('section');
  const navItems = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', function () {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (pageYOffset >= sectionTop - 300) {
        current = section.getAttribute('id');
      }
    });

    navItems.forEach(item => {
      item.classList.remove('active');
      if (item.getAttribute('href').includes(current)) {
        item.classList.add('active');
      }
    });
  });

  const lazyImages = document.querySelectorAll('img[data-src]');
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          observer.unobserve(img);
        }
      });
    });
    lazyImages.forEach(img => imageObserver.observe(img));
  } else {
    lazyImages.forEach(img => {
      img.src = img.dataset.src;
    });
  }

  const fadeElements = document.querySelectorAll('.section, .tile, .banner-overlay, .collaboration-text');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  fadeElements.forEach(el => observer.observe(el));
});


// --------------------------------------------------
// -------------------- NEXT FILE -------------------
// --------------------------------------------------

// -------------------- main.js --------------------
document.addEventListener('DOMContentLoaded', () => {
  console.log("Arcvision site script loaded");

});

//---------header-----------//
document.addEventListener("DOMContentLoaded", function () {
 
  // Highlight active link
  const currentPath = window.location.pathname.split("/").pop().toLowerCase();
  const links = document.querySelectorAll(".nav-links a");

  links.forEach(link => {
    const href = link.getAttribute("href").toLowerCase();
    const isHome = (href === "index.html" && (currentPath === "" || currentPath === "index.html"));

    if (isHome || href === currentPath) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});


  // Burger Menu Toggle
  const burger = document.getElementById('burger-toggle');
  const navMenu = document.getElementById('main-nav');

  burger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });