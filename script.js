// FORMULARIO
const form = document.getElementById("contact-form");
const msgBox = document.getElementById("form-status");

// 🔹 Arreglo para almacenar los nombres ingresados
let listaUsuarios = [];

// 🔹 Método de entrada y salida: prompt y alert
alert("Bienvenido al formulario de contacto");

// Evento para enviar formulario
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();

  // 🔹 Estructura de control: condicional if-else y operador lógico
  if (!name || !email) {
    msgBox.textContent = "❌ Por favor completa todos los campos requeridos.";
    msgBox.className = "status-msg error";
    return;
  } else if (!email.includes("@")) {
    msgBox.textContent = "⚠️ El correo electrónico no es válido.";
    msgBox.className = "status-msg error";
    return;
  } else {
    // Guardar nombre en el arreglo
    listaUsuarios.push(name);

    msgBox.textContent = "✅ Mensaje enviado correctamente. ¡Gracias por contactarnos!";
    msgBox.className = "status-msg success";
    form.reset();

    // 🔹 Mostrar lista actualizada de usuarios en consola
    console.log("Usuarios registrados:", listaUsuarios);

    // 🔹 Mostrar salida al usuario
    alert(`Gracias ${name}, tu mensaje ha sido enviado.`);
  }

  // 🔹 Operador ternario para mostrar cantidad de usuarios
  msgBox.textContent += listaUsuarios.length > 1 
    ? ` Actualmente hay ${listaUsuarios.length} personas registradas.`
    : " Eres el primer usuario registrado.";
});

// Botón para limpiar formulario
document.getElementById("reset-btn").addEventListener("click", () => {
  form.reset();
  msgBox.textContent = "Formulario limpiado.";
  msgBox.className = "status-msg";
});

// MODO OSCURO
const themeBtn = document.getElementById("theme-toggle");
const body = document.body;

// Cargar tema guardado
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
  themeBtn.textContent = "☀️ Modo claro";
}

// Alternar tema con operador ternario
themeBtn.addEventListener("click", () => {
  body.classList.toggle("dark");
  const isDark = body.classList.contains("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  themeBtn.textContent = isDark ? "☀️ Modo claro" : "🌙 Modo oscuro";

  // 🔹 Estructura de control adicional
  if (isDark) {
    console.log("Modo oscuro activado");
  } else {
    console.log("Modo claro activado");
  }
});

// ANIMACIÓN DE TABLA
const rows = document.querySelectorAll("#tabla-body tr");
rows.forEach((row, i) => {
  row.style.animationDelay = `${0.2 * (i + 1)}s`;
});

// 🔹 Ejemplo extra de estructura de control con bucle
if (rows.length > 0) {
  console.log(`Se encontraron ${rows.length} filas en la tabla.`);
  for (let i = 0; i < rows.length; i++) {
    console.log(`Fila ${i + 1} animada.`);
  }
} else {
  console.log("No hay filas para animar.");
}