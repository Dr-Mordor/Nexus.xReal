// Sticky nav shade-on-scroll, mobile menu, and smooth anchor scrolling.
export function initNavigation() {
  const nav = document.getElementById("nav");
  const toggle = document.getElementById("navToggle");
  const mobile = document.getElementById("navMobile");

  if (nav) {
    const setScrolled = () => nav.classList.toggle("is-scrolled", window.scrollY > 8);
    setScrolled();
    window.addEventListener("scroll", setScrolled, { passive: true });
  }

  if (toggle && mobile) {
    const closeMenu = () => {
      toggle.setAttribute("aria-expanded", "false");
      mobile.classList.remove("is-open");
    };

    toggle.addEventListener("click", () => {
      const isOpen = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!isOpen));
      mobile.classList.toggle("is-open", !isOpen);
    });

    mobile.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("click", closeMenu);
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");
      const target = targetId && targetId.length > 1 ? document.querySelector(targetId) : null;
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}
