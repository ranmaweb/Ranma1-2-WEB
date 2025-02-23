document.addEventListener("DOMContentLoaded", function () {
    // Crear y agregar el reproductor de música
    const bgMusic = document.createElement("audio");
    bgMusic.id = "bgMusic";
    bgMusic.loop = true;
    bgMusic.volume = 0.5; // Volumen medio
    bgMusic.autoplay = true;
    bgMusic.innerHTML = `
        <source src="Sonidos/RanmaMusic.mp3" type="audio/mpeg">
        Tu navegador no soporta el elemento de audio.
    `;
    document.body.appendChild(bgMusic);

    // Crear y agregar el botón de control de música
    const toggleButton = document.createElement("button");
    toggleButton.id = "toggleMusic";
    toggleButton.innerHTML = "🔊 Pausar Música";
    toggleButton.style.position = "fixed";
    toggleButton.style.top = "10px";
    toggleButton.style.right = "10px";
    toggleButton.style.padding = "10px";
    toggleButton.style.backgroundColor = "#ff4500";
    toggleButton.style.color = "white";
    toggleButton.style.border = "none";
    toggleButton.style.cursor = "pointer";
    toggleButton.style.fontSize = "16px";
    toggleButton.style.zIndex = "1000";

    document.body.appendChild(toggleButton);

    // Funcionalidad del botón
    toggleButton.addEventListener("click", function () {
        if (bgMusic.paused) {
            bgMusic.play();
            toggleButton.innerHTML = "🔊 Pausar Música";
        } else {
            bgMusic.pause();
            toggleButton.innerHTML = "🔈 Reproducir Música";
        }
    });
});
