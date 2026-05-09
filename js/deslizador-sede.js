document.addEventListener('DOMContentLoaded', function () {
    const track = document.querySelector('.carrusel-track');
    if (!track) return;

    const slides = Array.from(track.children);
    if (!slides.length) return;

    let currentIndex = 0;
    let intervalId = null;
    let isAutoPlay = true;

    /**
     * Actualiza la posición del carrusel y controla reproducción de videos
     */
    function updateSlide(index) {
        const offset = -index * 100;
        track.style.transform = `translateX(${offset}%)`;

        slides.forEach((slide, slideIndex) => {
            const video = slide.querySelector('video');
            if (!video) return;

            if (slideIndex === index) {
                video.play().catch(() => {});
            } else {
                video.pause();
                video.currentTime = 0;
            }
        });
    }

    /**
     * Avanza al siguiente slide
     */
    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlide(currentIndex);
    }

    /**
     * Retrocede al slide anterior
     */
    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateSlide(currentIndex);
    }

    /**
     * Inicia el carrusel automático
     */
    function startCarousel() {
        if (intervalId || !isAutoPlay) return;
        intervalId = setInterval(nextSlide, 3000);
    }

    /**
     * Detiene el carrusel automático
     */
    function stopCarousel() {
        if (!intervalId) return;
        clearInterval(intervalId);
        intervalId = null;
    }

    /**
     * Reinicia el carrusel automático
     */
    function restartCarousel() {
        stopCarousel();
        startCarousel();
    }

    /**
     * Navega a un slide específico
     */
    function goToSlide(index) {
        if (index >= 0 && index < slides.length) {
            currentIndex = index;
            updateSlide(currentIndex);
            restartCarousel();
        }
    }

    // Interactividad del contenedor
    const carouselContainer = track.parentElement;
    if (carouselContainer) {
        carouselContainer.addEventListener('mouseenter', stopCarousel);
        carouselContainer.addEventListener('mouseleave', startCarousel);
        carouselContainer.addEventListener('touchstart', stopCarousel);
        carouselContainer.addEventListener('touchend', startCarousel);
    }

    // Soporte para gestos táctiles (swipe)
    let touchStartX = 0;
    let touchEndX = 0;

    track.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });

    track.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });

    function handleSwipe() {
        const threshold = 50;
        const diff = touchStartX - touchEndX;

        if (Math.abs(diff) > threshold) {
            if (diff > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
            restartCarousel();
        }
    }

    // Soporte para navegación con teclado
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') {
            nextSlide();
            restartCarousel();
        } else if (e.key === 'ArrowLeft') {
            prevSlide();
            restartCarousel();
        }
    });

    // Exponer métodos globales si es necesario
    window.carouselControl = {
        next: nextSlide,
        prev: prevSlide,
        goTo: goToSlide,
        start: startCarousel,
        stop: stopCarousel,
    };

    // Inicializar
    updateSlide(currentIndex);
    startCarousel();
});
