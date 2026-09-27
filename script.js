const menuButton = document.querySelector("[data-menu-toggle]");
const nav = document.querySelector("[data-nav]");

function closeMenu() {
  menuButton?.setAttribute("aria-expanded", "false");
  nav?.classList.remove("is-open");
  document.body.classList.remove("menu-open");
}

menuButton?.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isOpen));
  nav?.classList.toggle("is-open", !isOpen);
  document.body.classList.toggle("menu-open", !isOpen);
});

nav?.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMenu();
});

document.querySelector("[data-year]").textContent = new Date().getFullYear();

const newsletter = document.querySelector("[data-newsletter]");
newsletter?.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = newsletter.elements.email.value.trim();

  if (!newsletter.reportValidity()) return;

  const subject = encodeURIComponent("Join the Dot e-store mailing list");
  const body = encodeURIComponent(`Please add ${email} to the Dot e-store mailing list.`);
  window.location.href = `mailto:hello@dottrade.co.uk?subject=${subject}&body=${body}`;
});
