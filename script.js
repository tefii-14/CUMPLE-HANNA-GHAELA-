const inicio = document.getElementById("inicio");
const musica = document.getElementById("musica");

const tituloTexto = "🎂 Feliz Cumpleaños Hanna 🎂";
const mensajeTexto = "¡Hoy cumples 3 añitos! 💕✨";

const titulo = document.getElementById("titulo");
const mensaje = document.getElementById("mensaje");

const iframe = document.getElementById("videoDrive");

let i = 0;
let j = 0;

function escribirTitulo() {
    if (i < tituloTexto.length) {
        titulo.innerHTML += tituloTexto.charAt(i);
        i++;
        setTimeout(escribirTitulo, 100);
    } else {
        escribirMensaje();
    }
}

function escribirMensaje() {
    if (j < mensajeTexto.length) {
        mensaje.innerHTML += mensajeTexto.charAt(j);
        j++;
        setTimeout(escribirMensaje, 80);
    }
}

/* Iniciar música al tocar pantalla */
inicio.addEventListener("click", () => {
    musica.play();
    inicio.style.display = "none";
    escribirTitulo();
});

/* Botón video */
const btn = document.getElementById("btnVideo");
const cumple = document.getElementById("cumple");
const video = document.getElementById("videoContainer");

btn.addEventListener("click", () => {
    musica.pause();
    cumple.style.display = "none";
    video.classList.remove("oculto");

    iframe.src = "https://drive.google.com/file/d/1CcItPtHYqfPFmLE4J7JrkhVCsFvTjz0t/view?usp=sharing";
});


