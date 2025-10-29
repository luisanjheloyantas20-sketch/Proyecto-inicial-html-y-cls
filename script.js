// ======== FORMULARIO ========
const form = document.getElementById("contact-form");
const msgBox = document.getElementById("form-status");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();

  if (!name || !email) {
    msgBox.textContent = "Por favor completa todos los campos requeridos.";
    msgBox.className = "status-msg error";
    return;
  }

  msgBox.textContent = "✅ Mensaje enviado correctamente. ¡Gracias por contactarnos!";
  msgBox.className = "status-msg success";
  form.reset();
});

document.getElementById("reset-btn").addEventListener("click", () => {
  form.reset();
  msgBox.textContent = "Formulario limpiado.";
  msgBox.className = "status-msg";
});

// ======== MODO OSCURO ========
const themeBtn = document.getElementById("theme-toggle");
const body = document.body;

// Cargar tema guardado
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
  themeBtn.textContent = "☀️ Modo claro";
}

// Alternar tema
themeBtn.addEventListener("click", () => {
  body.classList.toggle("dark");
  const isDark = body.classList.contains("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  themeBtn.textContent = isDark ? "☀️ Modo claro" : "🌙 Modo oscuro";
});

// ======== ANIMACIÓN DE TABLA ========
const rows = document.querySelectorAll("#tabla-body tr");
rows.forEach((row, i) => {
  row.style.animationDelay = `${0.2 * (i + 1)}s`;
});