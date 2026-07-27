const root = document.documentElement;
const themeToggle = document.querySelector(".theme-toggle");
const themeColor = document.querySelector('meta[name="theme-color"]');

function setTheme(theme) {
  root.dataset.theme = theme;
  localStorage.setItem("theme", theme);
  themeColor?.setAttribute("content", theme === "dark" ? "#111418" : "#f5f3ee");
}

themeToggle?.addEventListener("click", () => {
  setTheme(root.dataset.theme === "dark" ? "light" : "dark");
});

const menuToggle = document.querySelector(".menu-toggle");
const mobileNav = document.querySelector(".mobile-nav");

menuToggle?.addEventListener("click", () => {
  const open = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!open));
  mobileNav?.classList.toggle("is-open", !open);
});

mobileNav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuToggle?.setAttribute("aria-expanded", "false");
    mobileNav.classList.remove("is-open");
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 },
);

document.querySelectorAll(".observe").forEach((item) => observer.observe(item));

const dialog = document.querySelector(".lightbox");
const dialogImage = dialog?.querySelector("img");

document.querySelectorAll("[data-work-image]").forEach((card) => {
  const image = card.querySelector("img");
  image?.addEventListener("error", () => card.classList.add("is-placeholder"));
  image?.addEventListener("load", () => card.classList.remove("is-placeholder"));

  card.addEventListener("click", () => {
    if (card.classList.contains("is-placeholder") || !dialog || !dialogImage) return;
    dialogImage.src = card.dataset.workImage;
    dialogImage.alt = card.dataset.workAlt || "";
    dialog.showModal();
  });
});

dialog?.querySelector(".lightbox-close")?.addEventListener("click", () => dialog.close());
dialog?.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});

document.querySelector("[data-year]").textContent = new Date().getFullYear();
