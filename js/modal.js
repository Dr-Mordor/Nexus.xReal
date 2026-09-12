// Contact modal: open/close, focus handling, and demo form submission.
export function initModal() {
  const modal = document.getElementById("contactModal");
  if (!modal) return;

  const openers = document.querySelectorAll("[data-open-modal]");
  const closers = modal.querySelectorAll("[data-close-modal]");
  const form = modal.querySelector("#contactForm");
  let lastFocused = null;

  const open = () => {
    lastFocused = document.activeElement;
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    const firstField = modal.querySelector("input, textarea");
    if (firstField) firstField.focus();
  };

  const close = () => {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    if (lastFocused instanceof HTMLElement) lastFocused.focus();
  };

  openers.forEach((btn) => btn.addEventListener("click", open));
  closers.forEach((btn) => btn.addEventListener("click", close));

  modal.addEventListener("click", (event) => {
    if (event.target === modal) close();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("is-open")) close();
  });

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      window.alert("Thanks! We’ll get back to you soon.");
      form.reset();
      close();
    });
  }
}
