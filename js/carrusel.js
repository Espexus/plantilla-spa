// Variables del carrusel
let currentSlide = 0;
const slides = document.querySelectorAll('.galeria-servicios .carrusel-slide');
const dots = document.querySelectorAll('.galeria-servicios .dot');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

// Número total de slides
const totalSlides = slides.length;

// Auto-avance cada 5 segundos
let autoAdvanceInterval = null;

// Función para mostrar un slide específico
function showSlide(n) {
    // Limitar el índice
    if (n >= totalSlides) {
        currentSlide = 0;
    } else if (n < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = n;
    }

    // Remover clase active de todos los slides y dots
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    // Agregar clase active al slide y dot actual
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');

    // Reiniciar el temporizador de auto-avance
    clearInterval(autoAdvanceInterval);
    autoAdvanceInterval = setInterval(nextSlide, 3000);
}

// Siguiente slide
function nextSlide() {
    showSlide(currentSlide + 1);
}

// Slide anterior
function prevSlide() {
    showSlide(currentSlide - 1);
}

// Event listeners para los botones
if (prevBtn) prevBtn.addEventListener('click', prevSlide);
if (nextBtn) nextBtn.addEventListener('click', nextSlide);

// Event listeners para los dots
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        showSlide(index);
    });
});

// Pausar auto-avance al pasar el ratón sobre el carrusel
const carrusel = document.querySelector('.galeria-servicios .carrusel-contenedor');
if (carrusel) {
    carrusel.addEventListener('mouseenter', () => {
        clearInterval(autoAdvanceInterval);
    });

    carrusel.addEventListener('mouseleave', () => {
        autoAdvanceInterval = setInterval(nextSlide, 3000);
    });
}

// ===== SEGUNDO CARRUSEL =====

// Variables del segundo carrusel
let currentSlide2 = 0;
const slides2 = document.querySelectorAll('.galeria-fotos .carrusel-slide');
const dots2 = document.querySelectorAll('.galeria-fotos .dot');
const prevBtn2 = document.getElementById('prev-btn2');
const nextBtn2 = document.getElementById('next-btn2');

// Número total de slides del segundo carrusel
const totalSlides2 = slides2.length;

// Auto-avance cada 5 segundos para el segundo carrusel
let autoAdvanceInterval2 = null;

// Función para mostrar un slide específico del segundo carrusel
function showSlide2(n) {
    // Limitar el índice
    if (n >= totalSlides2) {
        currentSlide2 = 0;
    } else if (n < 0) {
        currentSlide2 = totalSlides2 - 1;
    } else {
        currentSlide2 = n;
    }

    // Remover clase active de todos los slides y dots del segundo carrusel
    slides2.forEach(slide => slide.classList.remove('active'));
    dots2.forEach(dot => dot.classList.remove('active'));

    // Agregar clase active al slide y dot actual del segundo carrusel
    slides2[currentSlide2].classList.add('active');
    dots2[currentSlide2].classList.add('active');

    // Reiniciar el temporizador de auto-avance del segundo carrusel
    clearInterval(autoAdvanceInterval2);
    autoAdvanceInterval2 = setInterval(nextSlide2, 3000);
}

// Siguiente slide del segundo carrusel
function nextSlide2() {
    showSlide2(currentSlide2 + 1);
}

// Slide anterior del segundo carrusel
function prevSlide2() {
    showSlide2(currentSlide2 - 1);
}

// Event listeners para los botones del segundo carrusel
if (prevBtn2) prevBtn2.addEventListener('click', prevSlide2);
if (nextBtn2) nextBtn2.addEventListener('click', nextSlide2);

// Event listeners para los dots del segundo carrusel
dots2.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        showSlide2(index);
    });
});

// Pausar auto-avance al pasar el ratón sobre el segundo carrusel
const carrusel2 = document.querySelector('.galeria-fotos .carrusel-contenedor');
if (carrusel2) {
    carrusel2.addEventListener('mouseenter', () => {
        clearInterval(autoAdvanceInterval2);
    });

    carrusel2.addEventListener('mouseleave', () => {
        autoAdvanceInterval2 = setInterval(nextSlide2, 3000);
    });
}

window.addEventListener('load', () => {
    showSlide(0);
    showSlide2(0);
});
