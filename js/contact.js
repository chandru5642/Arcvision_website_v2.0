// contact.js - Form validation and banner animation

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const requiredFields = ["name", "email", "organization", "enquiry"];

  // Initialize field borders
  requiredFields.forEach(id => {
    const field = document.getElementById(id);
    if (field) {
      field.style.border = "1px solid #ccc";
      field.style.borderRadius = "6px";
    }
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    let isValid = true;

    // Validate required fields
    requiredFields.forEach(id => {
      const field = document.getElementById(id);
      if (field && !field.value.trim()) {
        field.style.borderColor = "red";
        isValid = false;
      } else if (field) {
        field.style.borderColor = "#ccc";
      }
    });

    // Validate email format
    const emailField = document.getElementById("email");
    if (emailField && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailField.value)) {
      emailField.style.borderColor = "red";
      isValid = false;
    }

    if (!isValid) {
      alert("Please fill in all required fields correctly.");
      return;
    }

    alert("Thank you! Your enquiry has been received.");
    form.reset();
  });

  const emailField = document.getElementById("email");
  if (emailField) {
    emailField.addEventListener("input", function () {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.value)) {
        this.style.borderColor = "red";
      } else {
        this.style.borderColor = "#ccc";
      }
    });
  }

const elements = document.querySelectorAll('.banner, .banner-image, .banner-overlay, .service, .service-content, .service-text, .service-image');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.15 });

elements.forEach(el => observer.observe(el));

});
