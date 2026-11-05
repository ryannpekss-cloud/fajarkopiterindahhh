
// ANIMASI MASUK WEBSITE
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(
    ".hero-content, .section-title, .card, .panel, footer"
  );

  elements.forEach((el, index) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(25px)";
    el.style.transition =
      "opacity 0.8s ease, transform 0.8s ease";

    setTimeout(() => {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, 150 + index * 100);
  });
});
