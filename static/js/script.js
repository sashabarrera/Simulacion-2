console.log("Conexion correcta...")

let contador = 0;
let botones = document.querySelectorAll('.derecho-boton');
let numeroLibreta = document.querySelector('.libreta span');

for (let i = 0; i < botones.length; i++) {
    botones[i].onclick = function() {
        contador = contador + 1;
        numeroLibreta.innerText = contador;
    };
}

let miVideo = document.getElementById('miVideo');

let videoOriginal = "static/video/La Magia de los Libros - Biblioteca Digital Escolar.mp4";
let videoNuevo = "https://www.w3schools.com/html/mov_bbb.mp4"; // Cambia esta URL por tu otro video

// Al pasar el mouse por encima
miVideo.onmouseover = function() {
    miVideo.src = videoNuevo;
    miVideo.play();
};

// Al quitar el mouse de encima
miVideo.onmouseout = function() {
    miVideo.src = videoOriginal;
    miVideo.play();
};