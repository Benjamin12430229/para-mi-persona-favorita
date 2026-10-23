// ==========================
// PERSONALIZÁ ESTO PRIMERO 💗
// Usá el formato AAAA-MM-DD.
// Ejemplo: "2024-02-14"
// ==========================
const FECHA_INICIO = "2026-09-21";

function actualizarContador() {
  const inicio = new Date(`${FECHA_INICIO}T00:00:00`);
  const ahora = new Date();

  if (Number.isNaN(inicio.getTime())) return;

  let diferencia = Math.max(0, ahora - inicio);
  const segundosTotales = Math.floor(diferencia / 1000);
  const dias = Math.floor(segundosTotales / 86400);
  const horas = Math.floor((segundosTotales % 86400) / 3600);
  const minutos = Math.floor((segundosTotales % 3600) / 60);
  const segundos = segundosTotales % 60;

  document.getElementById("days").textContent = dias;
  document.getElementById("hours").textContent = String(horas).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutos).padStart(2, "0");
  document.getElementById("seconds").textContent = String(segundos).padStart(2, "0");
}

actualizarContador();
setInterval(actualizarContador, 1000);

// Carta animada
const envelopeButton = document.getElementById("envelopeButton");
const loveLetter = document.getElementById("loveLetter");
const envelopeHint = document.getElementById("envelopeHint");

envelopeButton.addEventListener("click", () => {
  const isOpen = envelopeButton.classList.toggle("is-open");
  envelopeButton.setAttribute("aria-expanded", String(isOpen));
  loveLetter.hidden = !isOpen;
  envelopeHint.textContent = isOpen ? "Cerrar mi cartita" : "Abrir mi cartita";

  if (isOpen) {
    window.setTimeout(() => loveLetter.scrollIntoView({ behavior: "smooth", block: "center" }), 120);
  }
});

// Música: permite elegir un archivo de audio local para probar la web.
const songFile = document.getElementById("songFile");
const audioPlayer = document.getElementById("audioPlayer");
let currentAudioUrl = null;

songFile.addEventListener("change", () => {
  const file = songFile.files && songFile.files[0];
  if (!file) return;

  if (currentAudioUrl) URL.revokeObjectURL(currentAudioUrl);
  currentAudioUrl = URL.createObjectURL(file);
  audioPlayer.src = currentAudioUrl;
  audioPlayer.load();
  audioPlayer.play().catch(() => {
    // Algunos navegadores esperan que la persona pulse Play.
  });
});

// Corazones flotantes decorativos
const floatingHearts = document.querySelector(".floating-hearts");
const heartSymbols = ["♡", "♥", "ღ"];

function crearCorazon() {
  const heart = document.createElement("span");
  heart.className = "floating-heart";
  heart.textContent = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
  heart.style.left = `${Math.random() * 100}%`;
  heart.style.fontSize = `${12 + Math.random() * 16}px`;
  heart.style.animationDuration = `${8 + Math.random() * 7}s`;
  floatingHearts.appendChild(heart);
  window.setTimeout(() => heart.remove(), 16000);
}

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  window.setInterval(crearCorazon, 1800);
}
