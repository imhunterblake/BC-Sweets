// NAV scroll behavior
const nav = document.getElementById("nav");
window.addEventListener("scroll", () => {
  nav.classList.toggle("scrolled", window.scrollY > 60);
});

// Mobile menu
const navToggle = document.querySelector(".nav-toggle");
const mobileMenu = document.getElementById("mobileMenu");
const mobileClose = document.getElementById("mobileClose");
const mobileLinks = document.querySelectorAll(".mobile-link");

navToggle.addEventListener("click", () => mobileMenu.classList.add("open"));
mobileClose.addEventListener("click", () =>
  mobileMenu.classList.remove("open"),
);
mobileLinks.forEach((link) =>
  link.addEventListener("click", () => mobileMenu.classList.remove("open")),
);

// Scroll reveal
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 },
);

document
  .querySelectorAll(
    ".about-img-wrap, .about-text, .menu-card, .gallery-item, .contact-text, .cta-box, .sizes-banner",
  )
  .forEach((el) => {
    el.classList.add("fade-up");
    observer.observe(el);
  });

// Stagger menu cards
document.querySelectorAll(".menu-card").forEach((card, i) => {
  card.style.transitionDelay = `${i * 0.08}s`;
});

// Stagger gallery items
document.querySelectorAll(".gallery-item").forEach((item, i) => {
  item.style.transitionDelay = `${i * 0.06}s`;
});
