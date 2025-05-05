document.querySelector('#contacto form').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita el envío del formulario

    const nombre = document.querySelector('#nombre').value.trim();
    const apellido = document.querySelector('#apellido').value.trim();
    const email = document.querySelector('#email').value.trim();
    const telefono = document.querySelector('#telefono').value.trim();
    let isValid = true;

    // Limpiar mensajes de error previos
    document.querySelectorAll('.error').forEach(el => el.remove());

    // Validaciones
    if (!nombre) {
        showError('nombre', 'El nombre es obligatorio');
        isValid = false;
    }
    if (!apellido) {
        showError('apellido', 'El apellido es obligatorio');
        isValid = false;
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showError('email', 'Ingrese un email válido');
        isValid = false;
    }
    if (!telefono || !/^\d{10}$/.test(telefono)) {
        showError('telefono', 'Ingrese un teléfono válido (10 dígitos)');
        isValid = false;
    }

    if (isValid) {
        // Simular envío (mostrar pop-up en la funcionalidad 3)
        showPopup();
        this.reset(); // Limpiar formulario
    }
});

function showError(fieldId, message) {
    const field = document.querySelector(`#${fieldId}`);
    const error = document.createElement('p');
    error.className = 'error';
    error.style.color = 'red';
    error.textContent = message;
    field.after(error);
}

const themeToggle = document.querySelector('#theme-toggle');
const body = document.body;

// Cargar preferencia guardada
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const isDark = body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    themeToggle.textContent = isDark ? 'Modo Claro' : 'Modo Oscuro';
});

function showPopup() {
    const popup = document.querySelector('#popup');
    popup.style.display = 'flex';
}

document.querySelector('#close-popup').addEventListener('click', () => {
    document.querySelector('#popup').style.display = 'none';
});

const proyectos = [
    {
        imagen: './img/project1.jpg',
        alt: 'Proyecto 1: Aplicación de Tareas',
        titulo: 'Aplicación de Tareas',
        descripcion: 'Una app para gestionar tareas diarias con interfaz minimalista.'
    },
    {
        imagen: './img/project2.jpg',
        alt: 'Proyecto 2: Tienda Online',
        titulo: 'Tienda Online',
        descripcion: 'Plataforma de comercio electrónico con carrito dinámico.'
    }
];

const tarjetasContainer = document.querySelector('#tarjetas .tarjetas-container');
tarjetasContainer.innerHTML = ''; // Limpiar contenido estático

proyectos.forEach(proyecto => {
    const tarjeta = document.createElement('div');
    tarjeta.className = 'tarjeta';
    tarjeta.innerHTML = `
        <img src="${proyecto.imagen}" alt="${proyecto.alt}">
        <h3>${proyecto.titulo}</h3>
        <p>${proyecto.descripcion}</p>
    `;
    tarjetasContainer.appendChild(tarjeta);
});

const images = document.querySelectorAll('img');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

images.forEach(img => {
    img.classList.add('fade-in');
    observer.observe(img);
});