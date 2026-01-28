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

                                                                       /* Check Out The Easy Way To Get Our Services*/


document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");

  // Fade-up animation
  cards.forEach((card, index) => {
    setTimeout(() => {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }, index * 200);
  });

  // Click animation + active color
  cards.forEach(card => {
    card.addEventListener("click", () => {
      // Remove active from all cards
      cards.forEach(c => c.classList.remove("active"));

      // Add active to clicked card
      card.classList.add("active");

      // Zoom animation
      card.classList.remove("zoom");
      void card.offsetWidth; // reset animation
      card.classList.add("zoom");
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".service-card");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add("show");
                    }, index * 150); // stagger delay
                }
            });
        },
        { threshold: 0.2 }
    );

    cards.forEach(card => observer.observe(card));
});

  document.body.style.minHeight = "100vh";



  // //

    const cards = document.querySelectorAll(".service-card");

    cards.forEach(card => {
        card.addEventListener("click", () => {

            // Remove active from all
            cards.forEach(c => c.classList.remove("active"));

            // Add active to clicked
            card.classList.add("active");

            // Remove animation after 200ms
            setTimeout(() => {
                card.classList.remove("active");
            }, 200);
        });
    });
