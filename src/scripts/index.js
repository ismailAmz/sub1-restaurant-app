import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.css";
import "../styles/responsive.css";
import "../scripts/component/app-bar.js";
import "../scripts/component/hero-element.js";
import "../scripts/component/restaurant-list.js";
import "../scripts/component/footer.js";

// navigation drawer
const navToggle = document.querySelector("#nav-toggle");
const navMenu = document.querySelector("#nav-menu");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});
