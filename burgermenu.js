document.addEventListener("DOMContentLoaded", function () {
  const burgerMenu = document.querySelector(".burger-menu");
  const menu = document.querySelector(".menu");
  const bars = document.querySelectorAll(".bar");

  burgerMenu.addEventListener("click", function () {
    menu.classList.toggle("show");
    bars.forEach((bar) => bar.classList.toggle("change"));
  });
});
