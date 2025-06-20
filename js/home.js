document.addEventListener('DOMContentLoaded', () => {
  // ------------------ Burger Menu Toggle ------------------
  const burger = document.getElementById('burger-toggle');
  const navMenu = document.getElementById('main-nav');
  burger?.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });

  // ------------------ Lazy Load Images ------------------
  const lazyImages = document.querySelectorAll('img[data-src]');
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.onerror = () => console.warn('Image failed to load:', img.dataset.src);
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

  // ------------------ Hero Section Slider ------------------
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.dot');
  const prevBtn = document.querySelector('.nav-arrow.left');
  const nextBtn = document.querySelector('.nav-arrow.right');

  let currentIndex = 0;
  let heroInterval;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
      dots[i]?.classList.toggle('active', i === index);
    });
    currentIndex = index;
  }

  function nextSlide() {
    const newIndex = (currentIndex + 1) % slides.length;
    showSlide(newIndex);
  }

  function prevSlide() {
    const newIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(newIndex);
  }

  nextBtn?.addEventListener('click', nextSlide);
  prevBtn?.addEventListener('click', prevSlide);
  dots.forEach((dot, i) => dot.addEventListener('click', () => showSlide(i)));

  function startAutoSlide() {
    heroInterval = setInterval(nextSlide, 8000);
  }

  function stopAutoSlide() {
    clearInterval(heroInterval);
  }

  startAutoSlide();

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      stopAutoSlide();
    } else {
      startAutoSlide();
    }
  });

  // ------------------ Scroll-Based Animations ------------------
  const animatedElements = document.querySelectorAll(
    '.animate-on-scroll, .animate-slide-left, .animate-slide-right, .slide-in-left, .slide-in-right, .product-tile'
  );

  const animationObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        if (
          el.classList.contains('animate-on-scroll') ||
          el.classList.contains('slide-in-left') ||
          el.classList.contains('slide-in-right') ||
          el.classList.contains('product-tile')
        ) {
          el.classList.add('visible');
        }
        if (
          el.classList.contains('animate-slide-left') ||
          el.classList.contains('animate-slide-right') ||
          el.classList.contains('animate-on-scroll')
        ) {
          el.classList.add('animate');
        }
        observer.unobserve(el); // Animate once
      }
    });
  }, { threshold: 0.2 });

  animatedElements.forEach(el => animationObserver.observe(el));
});

document.addEventListener('DOMContentLoaded', () => {
  const animatedElements = document.querySelectorAll(
    '.animate-slide-left, .animate-slide-right'
  );

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  animatedElements.forEach(el => observer.observe(el));
});



//product scroll logics

const wrapper = document.querySelector('.carousel-track-wrapper');
const track = document.querySelector('.carousel-track');
const btnLeft = document.querySelector('.carousel-btn.left');
const btnRight = document.querySelector('.carousel-btn.right');

const scrollStep = 320;

btnRight.addEventListener('click', () => {
  wrapper.scrollBy({ left: scrollStep, behavior: 'smooth' });
});

btnLeft.addEventListener('click', () => {
  wrapper.scrollBy({ left: -scrollStep, behavior: 'smooth' });
});

