function toggleEpisodes(id) {
    var episodes = document.getElementById(id);
    episodes.style.display = (episodes.style.display === "block") ? "none" : "block";
    document.addEventListener("DOMContentLoaded", function() {
        document.body.style.backgroundImage = "url('img/fondo.gif')"; // Asegúrate de que la ruta sea correcta
        document.body.style.backgroundSize = "cover"; // Ajusta el tamaño de la imagen
        document.body.style.backgroundPosition = "center"; // Centra la imagen
        document.body.style.backgroundRepeat = "no-repeat"; // Evita que se repita
        document.body.style.backgroundAttachment = "fixed"; // Mantiene el fondo estático al hacer scroll
    });
    
}