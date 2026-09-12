import { initNavigation } from "./js/navigation.js";
import { initScrollAnimation } from "./js/scrollAnimation.js";
import { initModal } from "./js/modal.js";
import { initFooterYear } from "./js/footer.js";

document.addEventListener("DOMContentLoaded", () => {
  initNavigation();
  initScrollAnimation();
  initModal();
  initFooterYear();
});
