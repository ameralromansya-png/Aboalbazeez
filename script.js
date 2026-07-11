const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.14 });

document.querySelectorAll('.menu-item, .stats article, .story-card, .hours-card, .booking').forEach((element) => {
  element.classList.add('reveal');
  observer.observe(element);
});

const style = document.createElement('style');
style.textContent = `
  .reveal { opacity: 0; transform: translateY(22px); transition: opacity .7s ease, transform .7s ease; }
  .reveal.visible { opacity: 1; transform: translateY(0); }
`;
document.head.appendChild(style);
