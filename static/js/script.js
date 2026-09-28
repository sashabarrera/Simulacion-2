console.log("Conexion correcta...")



function mostrarCorreo() {
    const correo = document.querySelector('#correo').value;
    if (correo) {
        alert("Iniciando sesión con: " + correo);
    } else {
        alert("Por favor, ingresa un correo electrónico.");
    }
}



let contador = 0;
let botones = document.querySelectorAll('.derecho-boton');
let numeroLibreta = document.querySelector('.libreta span');

for (let i = 0; i < botones.length; i++) {
    botones[i].onclick = function() {
        contador = contador + 1;
        numeroLibreta.innerText = contador;
    };
}

document.addEventListener('DOMContentLoaded', function() {
    // Seleccionamos el video por su ID
    const video = document.getElementById('miVideo');

    // Definimos las rutas de ambos videos (sin espacios)
    const videoOriginal = "static/video/La Magia de los Libros - Biblioteca Digital Escolar.mp4";
    const videoNuevo = "static/video/Mineduc_ Aprenda a usar la Biblioteca Digital Escolar _ #DesdeCasa.mp4";

    // Cuando el cursor del mouse pasa por encima del video (hover)
    video.addEventListener('mouseenter', function() {
        video.src = videoNuevo;
        video.load(); // Fuerza al navegador a cargar la nueva ruta
        video.play(); // Asegura que el nuevo video se reproduzca
    });

    // Cuando el cursor del mouse sale del área del video
    video.addEventListener('mouseleave', function() {
        video.src = videoOriginal;
        video.load(); // Fuerza al navegador a cargar la ruta original
        video.play(); // Vuelve a reproducir el video original
    });
});
