const themeToggle = document.getElementById("theme-toggle");
const lightTheme = document.getElementById("theme-light");

// Початково — темна тема
document.body.classList.remove("light-mode");
lightTheme.disabled = true;
themeToggle.textContent = "🌙"; // місяць для темної теми

themeToggle.addEventListener("click", () => {
  const isLight = !lightTheme.disabled;

  // Перемикаємо CSS файл
  lightTheme.disabled = isLight;
  document.body.classList.toggle("light-mode", !isLight);

  // Міняємо іконку
  themeToggle.textContent = isLight ? "🌙" : "🌞";
});
