const elements = document.querySelectorAll('.banner, .banner-image, .banner-overlay, .service, .service-content, .service-text, .service-image');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.15 });

elements.forEach(el => observer.observe(el));

function scrollArticles(direction) {
  const wrapper = document.getElementById('articlesWrapper');
  const scrollAmount = 340; // Adjust this depending on your card width + gap

  if (direction === 'left') {
    wrapper.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  } else if (direction === 'right') {
    wrapper.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  }}