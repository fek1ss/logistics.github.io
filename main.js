document.addEventListener("DOMContentLoaded", () => {
  console.log("Website loaded successfully");

  // Add smooth scroll for navigation links
  const links = document.querySelectorAll("nav ul li a");
  links.forEach(link => {
      link.addEventListener("click", event => {
          event.preventDefault();
          const target = document.querySelector(link.getAttribute("href"));
          if (target) {
              target.scrollIntoView({ behavior: "smooth" });
          }
      });
  });

  // Add a simple fade-in effect for hero content
  const heroContent = document.querySelector(".hero-content");
  heroContent.style.opacity = 0;
  setTimeout(() => {
      heroContent.style.transition = "opacity 2s";
      heroContent.style.opacity = 1;
  }, 500);
});
