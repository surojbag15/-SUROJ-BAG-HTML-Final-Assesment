document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector(".menu-btn");
  const navLinks = document.querySelector(".nav-links"); // adjust if needed

  if (!menuBtn) return;

  menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("menu-active");

    if (navLinks) {
      navLinks.classList.toggle("active");
    }
  });
});
