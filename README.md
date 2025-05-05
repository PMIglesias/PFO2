# Trabajo Práctico: Portafolio Personal (PFO 2)

Este proyecto es una **evolución del Trabajo Práctico 1 (PFO 1)**, un portafolio personal desarrollado con HTML, CSS y JavaScript. En esta segunda etapa, se incorporaron 5 funcionalidades interactivas con JavaScript y 2 mejoras en el diseño/estructura, siguiendo los requerimientos establecidos.

## Descripción
El portafolio presenta información sobre Alex Code, sus proyectos, habilidades, un formulario de contacto, y una lista de películas favoritas. Está alojado en GitHub Pages y utiliza Flexbox, CSS Grid, Google Fonts, animaciones, y JavaScript para interactividad.

Visita el proyecto en GitHub Pages: [PF01](https://pmiglesias.github.io/PFO1/)

## Funcionalidades Implementadas con JavaScript

1. **Validación de Formulario**  
   - **Descripción**: Valida los campos obligatorios del formulario de contacto (nombre, apellido, email, teléfono). Muestra mensajes de error si los campos están vacíos o si el email/teléfono no son válidos.  
   - **Implementación**: Usa un evento `submit` para verificar los campos con expresiones regulares (email y teléfono). Los errores se muestran debajo de cada campo.  
   - **Justificación**: Mejora la usabilidad al garantizar datos correctos y ofrece retroalimentación inmediata al usuario.

2. **Modo Oscuro/Claro**  
   - **Descripción**: Un botón permite alternar entre modos oscuro y claro, con la preferencia guardada en `LocalStorage`.  
   - **Implementación**: Aplica una clase `dark-mode` al `body` y ajusta los estilos de fondo y texto. `LocalStorage` persiste la elección del usuario.  
   - **Justificación**: Mejora la accesibilidad y la experiencia en diferentes condiciones de luz, con persistencia para mayor comodidad.

3. **Pop-up de Confirmación de Envío**  
   - **Descripción**: Muestra un pop-up al enviar el formulario con éxito, con un botón para cerrarlo.  
   - **Implementación**: Un contenedor oculto (`div`) se muestra tras la validación exitosa del formulario, con estilos para centrarlo y oscurecer el fondo.  
   - **Justificación**: Proporciona retroalimentación clara, confirmando la acción del usuario y mejorando la experiencia.

4. **Creación de Contenido Dinámico (Tarjetas de Proyectos)**  
   - **Descripción**: Las tarjetas de proyectos se generan dinámicamente desde un array en JavaScript.  
   - **Implementación**: Un array de objetos contiene los datos de los proyectos, que se convierten en elementos HTML con `createElement` y se insertan en el contenedor.  
   - **Justificación**: Facilita la escalabilidad y el mantenimiento, permitiendo agregar proyectos sin modificar el HTML.

5. **Animaciones Dinámicas (Fade-in para Imágenes)**  
   - **Descripción**: Las imágenes de las secciones "Sobre Mí", "Proyectos" y "Películas" aparecen con un efecto fade-in al entrar en la vista.  
   - **Implementación**: Usa `IntersectionObserver` para detectar la visibilidad de las imágenes y aplica una clase CSS con transición de opacidad.  
   - **Justificación**: Mejora la estética y la experiencia al cargar contenido progresivamente, haciendo la página más atractiva.

## Mejoras en el Diseño y Código

1. **Mejor Organización con CSS Grid para Películas**  
   - **Descripción**: La sección de películas ahora usa CSS Grid en lugar de Flexbox para un diseño más preciso y alineado.  
   - **Explicación**: El contenedor `.peliculas-container` usa `grid-template-columns` con `auto-fit` para adaptarse a diferentes tamaños de pantalla.  
   - **Justificación**: Mejora la consistencia visual y la adaptabilidad, ofreciendo una presentación más profesional.  
   - **Captura de pantalla**: [Insertar captura comparativa aquí]

2. **Optimización de Contraste y Legibilidad**  
   - **Descripción**: Ajuste de colores en los textos de "Sobre Mí" y el formulario, y un color más vibrante para los botones.  
   - **Explicación**: Textos más oscuros (#1a1a1a) y botones en azul vibrante (#1e88e5) para mayor contraste y visibilidad.  
   - **Justificación**: Mejora la accesibilidad y la legibilidad, especialmente para usuarios con dificultades visuales, y hace los botones más atractivos.  
   - **Captura de pantalla**: [Insertar captura comparativa aquí]

## Checklist
- [x] Archivo `index.html` actualizado.
- [x] Carpeta `js` con archivo `script.js`.
- [x] Carpeta `css` con `styles.css` actualizado.
- [x] Carpeta `img` con recursos gráficos.
- [x] Archivo `README.md` con descripción, funcionalidades y mejoras.
- [x] Repositorio actualizado en GitHub.
- [x] Proyecto publicado en GitHub Pages.
- [x] 5 funcionalidades JavaScript implementadas.
- [x] 2 mejoras en diseño/estructura implementadas.
- [x] Diseño responsivo y animaciones mantenidas.

## Notas
- El formulario no tiene backend, solo frontend con validación y pop-up.
- Las capturas de pantalla se incluirán tras implementar los cambios para comparar el diseño anterior y el actualizado.