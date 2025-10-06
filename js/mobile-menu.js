const burgerBtn = document.querySelector(".burger-menu");
const mobileMenu = document.getElementById("mobileMenu");
const closeBtn = document.getElementById("closeMobileMenu");
const menuLinks = mobileMenu.querySelectorAll("a"); // Всі посилання в мобільному меню

// Відкриття меню при кліку на бургер
burgerBtn.addEventListener("click", () => {
  mobileMenu.classList.add("open");
});

// Закриття меню при кліку на хрестик
closeBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("open");
});

// Закриття меню при кліку поза межами меню
window.addEventListener("click", (event) => {
  if (
    mobileMenu.classList.contains("open") &&
    !mobileMenu.contains(event.target) &&
    !burgerBtn.contains(event.target)
  ) {
    mobileMenu.classList.remove("open");
  }
});

// Закриття меню при кліку на пункт меню
menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
  });
});
