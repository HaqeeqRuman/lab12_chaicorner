// Shared JavaScript for Chai Corner Lab 12
const navToggle = document.getElementById("navToggle");
const siteNav = document.getElementById("siteNav");

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const opened = siteNav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(opened));
  });
}

// Front-end demonstration only: this form does not send or store data.
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const feedback = document.getElementById("feedback");

    if (!name || !email || !message) {
      feedback.textContent = "Please complete all fields.";
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      feedback.textContent = "Please enter a valid email address.";
      return;
    }
    feedback.textContent = `Thank you, ${name}! This is a demo form; no message was sent.`;
    contactForm.reset();
  });
}
