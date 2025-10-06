document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", async function (event) {
    event.preventDefault();

    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: { Accept: "application/json" },
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
