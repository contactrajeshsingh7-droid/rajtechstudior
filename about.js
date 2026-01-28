// Count animation//

document.addEventListener("DOMContentLoaded", () => {
  const stats = document.querySelectorAll(".stat-box");

  stats.forEach((stat, index) => {
    const number = stat.querySelector("h2");
    const target = +number.getAttribute("data-target");

    setTimeout(() => {
      // Fade animation
      stat.style.transition = "opacity 0.6s ease, transform 0.6s ease";
      stat.style.opacity = "1";
      stat.style.transform = "translateY(0)";

      // Count animation
      let count = 0;
      const increment = target / 60;

      const updateCount = () => {
        if (count < target) {
          count += increment;
          number.innerText = Math.ceil(count) + "+";
          requestAnimationFrame(updateCount);
        } else {
          number.innerText = target + "+";
        }
      };

      updateCount();
    }, index * 200);
  });
});
