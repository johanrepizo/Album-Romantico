const welcome = document.getElementById("welcome");
const album = document.getElementById("album");
const openBtn = document.getElementById("openBtn");
const music = document.getElementById("backgroundMusic");
const musicBtn = document.getElementById("musicBtn");
const musicLabel = document.getElementById("musicLabel");
const letterBtn = document.getElementById("letterBtn");
const letterContent = document.getElementById("letterContent");
const heartsContainer = document.querySelector(".hearts");

openBtn.addEventListener("click", async () => {
  welcome.classList.add("hidden");
  album.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
  createHearts(18);
  try {
    await music.play();
    musicLabel.textContent = "Pausar música";
  } catch (error) {
    musicLabel.textContent = "Activar música";
  }
});

musicBtn.addEventListener("click", async () => {
  if (music.paused) {
    try {
      await music.play();
      musicLabel.textContent = "Pausar música";
    } catch (error) {
      musicLabel.textContent = "No se pudo reproducir";
      alert("Revisa que exista media/musica/cancion.mp3 y vuelve a intentarlo.");
    }
  } else {
    music.pause();
    musicLabel.textContent = "Activar música";
  }
});

letterBtn.addEventListener("click", () => {
  const isHidden = letterContent.classList.toggle("hidden");
  letterBtn.textContent = isHidden ? "Leer mi carta ♥" : "Cerrar la carta";
});

function createHearts(amount) {
  for (let i = 0; i < amount; i++) {
    const heart = document.createElement("span");
    heart.className = "floating-heart";
    heart.textContent = Math.random() > 0.5 ? "♥" : "♡";
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.animationDuration = `${3 + Math.random() * 4}s`;
    heart.style.fontSize = `${12 + Math.random() * 22}px`;
    heartsContainer.appendChild(heart);
    heart.addEventListener("animationend", () => heart.remove());
  }
}
