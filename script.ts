document.addEventListener("DOMContentLoaded", () => {
  const yearElement = document.getElementById("year");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear().toString();
  }

  const cards = document.querySelectorAll<HTMLElement>(".card");

  cards.forEach((card, index) => {
    card.style.transition = "transform 220ms ease, box-shadow 220ms ease";
    card.addEventListener("mouseenter", () => {
      card.style.transform = "translateY(-4px)";
      card.style.boxShadow = "0 12px 24px rgba(0, 0, 0, 0.08)";
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "translateY(0)";
      card.style.boxShadow = "none";
    });

    card.animate(
      [
        { opacity: 0, transform: "translateY(8px)" },
        { opacity: 1, transform: "translateY(0)" },
      ],
      {
        duration: 420,
        delay: index * 120,
        fill: "forwards",
      },
    );
  });
});
