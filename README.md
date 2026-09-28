# Documentación del Proyecto: Biblioteca Horizonte

## Resumen del Proyecto
El proyecto **Biblioteca Horizonte** consiste en un portal web interactivo diseñado para la exploración y gestión de un catálogo bibliográfico digital[cite: 1]. La plataforma ofrece una interfaz para navegar por diversas categorías literarias, revisar obras sugeridas, administrar un indicador de libros seleccionados e interactuar con componentes multimedia[cite: 1, 3].

---

## Estructura de Componentes y Archivos

| Archivo / Carpeta | Descripción y Función |
| :--- | :--- |
| `index.html` | Archivo raíz con la maquetación semántica de la página[cite: 1]. |
| `static/css/style.css` | Hoja de estilos con reglas de diseño visual, tipografía y distribución Flexbox[cite: 2]. |
| `static/js/script.js` | Código fuente en JavaScript encargado de la lógica y dinamismo[cite: 3]. |
| `static/images/` | Carpeta de recursos gráficos (logotipos, íconos de géneros y portadas)[cite: 1, 2]. |
| `static/video/` | Contenedor de archivos multimedia de video[cite: 1, 3]. |

---

## Módulos Funcionales

### Control de Acceso y Encabezado
* Encabezado institucional con nombre e imagen corporativa[cite: 1].
* Formulario de ingreso mediante casilla de correo electrónico[cite: 1].
* Contador global que muestra la cantidad de lecturas agregadas por el usuario[cite: 1].

### Navegación por Categorías
* Menú de clasificación por géneros: Novelas, Ciencia, Historia, Tecnología, Arte e Infantil[cite: 1].
* Organización mediante tarjetas individuales con íconos representativos[cite: 1, 2].

### Panel Principal y Recomendaciones
* Mensaje de bienvenida con información sobre el servicio de biblioteca virtual[cite: 1].
* Reproductor de video institucional integrado[cite: 1].
* Módulo de sugerencias de lectura con detalles de obras, enlaces informativos y botones de acción[cite: 1].

### Comportamiento Interactivo (JavaScript)
* **Validación de usuario:** Al accionar el botón "Ingresar", el sistema emite una ventana emergente que confirma la dirección ingresada o advierte si la casilla está vacía[cite: 3].
* **Actualización del contador:** Al presionar el botón "+" de cualquiera de los libros recomendados, el indicador superior suma una unidad[cite: 3].
* **Conmutación de video al desplazar el cursor:** El reproductor cambia su fuente de video de forma dinámica cuando el usuario posiciona el cursor sobre él, volviendo al contenido inicial al retirarlo[cite: 3].

---

## Especificaciones Técnicas
* **HTML5:** Estructura web estandarizada y semántica[cite: 1].
* **CSS3:** Estilos visuales con maquetación mediante Flexbox y paleta de colores corporativa[cite: 2].
* **JavaScript (Vanilla):** Gestión de eventos del DOM y dinamismo de la interfaz[cite: 3].

---

## Guía de Despliegue
1. Verificar que la estructura de carpetas locales se conserve adecuadamente (`static/css/`, `static/js/`, `static/images/`, `static/video/`)[cite: 1, 2, 3].
2. Abrir el archivo `index.html` en un navegador web actualizado[cite: 1].
3. Interactuar con los componentes de la interfaz para validar la funcionalidad del sistema[cite: 3].

---

## Información del Autor
* **Autor:** Sasha Barrera[cite: 1]
* **Correo electrónico:** sashabarrera@liceovvh.cl
