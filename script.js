const burgerBtn = document.querySelector('.burger-menu');
const mobileMenu = document.getElementById('mobileMenu');
const closeBtn = document.getElementById('closeMobileMenu');
const menuLinks = mobileMenu.querySelectorAll('a'); // Всі посилання в мобільному меню

// Відкриття меню при кліку на бургер
burgerBtn.addEventListener('click', () => {
  mobileMenu.classList.add('open');
});

// Закриття меню при кліку на хрестик
closeBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('open');
});

// Закриття меню при кліку поза межами меню
window.addEventListener('click', (event) => {
  if (
    mobileMenu.classList.contains('open') &&
    !mobileMenu.contains(event.target) &&
    !burgerBtn.contains(event.target)
  ) {
    mobileMenu.classList.remove('open');
  }
});

// Закриття меню при кліку на пункт меню
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
  });
});

// очищення форми відправки початок
document.addEventListener('contextmenu', function(event) {
  event.preventDefault();
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", async function (event) {
    event.preventDefault();

    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        alert("Дякуємо! Ваше повідомлення надіслано.");
        form.reset();
      } else {
        alert("Помилка при відправленні. Спробуйте ще раз.");
      }
    } catch (error) {
      alert("Сталася помилка. Перевірте з'єднання з інтернетом.");
    }
  });
});

// очищення форми відправки кінець