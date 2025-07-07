document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector(".nav");
  const navLinks = document.querySelectorAll(".nav-list a");

  // Alterna a classe 'active' ao clicar no hambúrguer
  hamburger.addEventListener("click", () => {
    nav.classList.toggle("active");
  });

  // Fecha o menu ao clicar em qualquer link
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("active");
    });
  });

  // (Opcional) Fecha o menu ao clicar fora dele
  document.addEventListener("click", (e) => {
    if (!nav.contains(e.target) && !hamburger.contains(e.target)) {
      nav.classList.remove("active");
    }
  });
});