// THEME TOGGLE
const btn = document.getElementById("themeToggle");

btn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  // Update button text
  btn.textContent = document.body.classList.contains("dark")
    ? "☀️ Light Mode"
    : "🌙 Dark Mode";
});

// FADE-IN DELAY FOR EACH CARD
document.querySelectorAll(".card").forEach((card, index) => {
  card.style.animationDelay = `${index * 0.2}s`;
});
