const elementos = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.3
});

boton_instagram = document.getElementById('boton-instagram');
boton_instagram.addEventListener('click', () => {
  window.open('https://www.instagram.com/piel.duraznospa/', '_blank');
});

elementos.forEach(el => observer.observe(el));