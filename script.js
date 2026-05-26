// AOS 
AOS.init({
    once: true,
    offset: 80,
    easing: 'ease-out-cubic'
});

// SWIPER 
const portafolioSwiper = new Swiper('.portafolio-swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
    },
    effect: 'slide',
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 15
        },
        991: {
            slidesPerView: 3,
            spaceBetween: 20
        }
    }
});

// VALIDACIÓN DEL FORMULARIO
const form = document.querySelector('.form');
const inputNombre = form.querySelector('input[name="name"]');
const inputEmail  = form.querySelector('input[name="email"]');
const inputMensaje = form.querySelector('textarea[name="message"]');

// Crear mensaje de error 
function mostrarError(campo, mensaje) {
    // Evitar duplicar mensajes
    let errorExistente = campo.parentElement.querySelector('.error-msg');
    if (errorExistente) errorExistente.remove();

    const error = document.createElement('span');
    error.classList.add('error-msg');
    error.textContent = mensaje;
    campo.parentElement.appendChild(error);
    campo.classList.add('campo-error');
}

function limpiarError(campo) {
    const errorExistente = campo.parentElement.querySelector('.error-msg');
    if (errorExistente) errorExistente.remove();
    campo.classList.remove('campo-error');
}

// Limpiar errores mientras escribe
[inputNombre, inputEmail, inputMensaje].forEach(campo => {
    campo.addEventListener('input', () => limpiarError(campo));
});

form.addEventListener('submit', function (e) {
    e.preventDefault();
    let valido = true;

    const nombre  = inputNombre.value.trim();
    const email   = inputEmail.value.trim();
    const mensaje = inputMensaje.value.trim();

    // Validar nombre
    if (nombre === '') {
        mostrarError(inputNombre, 'Por favor ingresa tu nombre.');
        valido = false;
    }

    // Validar email
    const emailRegex = /^[^\s@]+@(gmail\.com|hotmail\.com)$/i;
    if (email === '') {
        mostrarError(inputEmail, 'Por favor ingresa tu correo.');
        valido = false;
    } else if (!emailRegex.test(email)) {
        mostrarError(inputEmail, 'El correo debe ser @gmail.com o @hotmail.com');
        valido = false;
    }

    // Validar mensaje
    if (mensaje === '') {
        mostrarError(inputMensaje, 'Por favor escribe tu mensaje.');
        valido = false;
    }

    if (valido) {
        form.submit();
    }
});