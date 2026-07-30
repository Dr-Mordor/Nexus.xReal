document.addEventListener("DOMContentLoaded", function () {
  var yearElement = document.getElementById("year");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear().toString();
  }

  var cards = document.querySelectorAll(".card");
  cards.forEach(function (card, index) {
    card.style.transition = "transform 220ms ease, box-shadow 220ms ease";
    card.addEventListener("mouseenter", function () {
      card.style.transform = "translateY(-4px)";
      card.style.boxShadow = "0 12px 24px rgba(0, 0, 0, 0.08)";
    });
    card.addEventListener("mouseleave", function () {
      card.style.transform = "translateY(0)";
      card.style.boxShadow = "none";
    });
    card.animate([
      { opacity: 0, transform: "translateY(8px)" },
      { opacity: 1, transform: "translateY(0)" },
    ], {
      duration: 420,
      delay: index * 120,
      fill: "forwards",
    });
  });

  var openButton = document.querySelector("[data-open-modal]");
  var closeButton = document.querySelector("[data-close-modal]");
  var modal = document.getElementById("contactModal");
  var form = modal ? modal.querySelector(".contact-form") : null;

  if (openButton && modal) {
    openButton.addEventListener("click", function () {
      modal.classList.add("is-open");
      modal.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
    });
  }

  if (closeButton && modal) {
    closeButton.addEventListener("click", function () {
      modal.classList.remove("is-open");
      modal.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
    });
  }

  if (modal) {
    modal.addEventListener("click", function (event) {
      if (event.target === modal) {
        modal.classList.remove("is-open");
        modal.setAttribute("aria-hidden", "true");
        document.body.style.overflow = "";
      }
    });
  }

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      alert("Thanks! We’ll get back to you soon.");
      if (modal) {
        modal.classList.remove("is-open");
        modal.setAttribute("aria-hidden", "true");
        document.body.style.overflow = "";
        form.reset();
      }
    });
  }
});
