console.log("Conexion correcta...");



document.addEventListener('DOMContentLoaded', function () {

    // 1. Alerta con el correo al hacer clic en "Ingresar"
    const botonIngresar = document.querySelector('.barra-boton');
    const inputUsuario = document.getElementById('email');

    if (botonIngresar !== null && inputUsuario !== null) {
        botonIngresar.addEventListener('click', function () {
            let correo = inputUsuario.value;
            if (correo !== "") {
                alert(`Bienvenido\n${correo}`);
            } else {
                alert("Por favor, ingresa un correo.");
            }
        });
    } else {
        console.log("No se encontró el botón de ingresar o el campo de usuario.");
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


    
    // 3. Cambiar de video al pasar el cursor (hover / mouseover y mouseout)
    const video = document.querySelector('.contenedor_video video');
    if (video !== null) {
        const videoOriginal = video.src;
        const videoNuevo = 'static/video/Mineduc_ Aprenda_a_usar_la_Biblioteca_Digital_Escolar_ #DesdeCasa.mp4';

        video.addEventListener('mouseover', function () {
            video.src = videoNuevo;
            video.play();
        });
        video.addEventListener('mouseout', function () {
            video.src = videoOriginal;
            video.play();
        });
    }

}) 







