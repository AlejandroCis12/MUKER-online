// Menú móvil
document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
document.querySelector('.nav-links').classList.toggle('active');
this.classList.toggle('active');
});

// Cerrar menú al hacer clic en un enlace (en móviles)
document.querySelectorAll('.nav-links a').forEach(link => {
link.addEventListener('click', function() {
    if (window.innerWidth <= 768) {
        document.querySelector('.nav-links').classList.remove('active');
        document.querySelector('.mobile-menu-btn').classList.remove('active');
    }
});
});

// Efecto de desplazamiento suave para los enlaces
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
        window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
        });
    }
});
});

//boton para subir
document.addEventListener('DOMContentLoaded', function() {
const btnScrollTop = document.querySelector('.btn-scroll-top');
const scrollThreshold = 300;

// Mostrar/ocultar botón con animación
window.addEventListener('scroll', function() {
    if (window.pageYOffset > scrollThreshold) {
        btnScrollTop.classList.add('visible');
    } else {
        btnScrollTop.classList.remove('visible');
    }
    
    // Efecto de header al hacer scroll
    if (window.scrollY > 100) {
        document.querySelector('header').classList.add('scrolled');
    } else {
        document.querySelector('header').classList.remove('scrolled');
    }
});

// Scroll suave al hacer clic
btnScrollTop.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Efecto de retroalimentación táctil
btnScrollTop.addEventListener('mousedown', function() {
    this.style.transform = 'translateY(1px) scale(0.98)';
});

btnScrollTop.addEventListener('mouseup', function() {
    this.style.transform = 'translateY(-3px) scale(1.05)';
});

btnScrollTop.addEventListener('mouseleave', function() {
    this.style.transform = '';
});
})

document.addEventListener('DOMContentLoaded', function() {
    // Obtiene el elemento por su ID
    const añoEl = document.getElementById('añoActual');
    // Crea un objeto Date y obtiene el año actual
    const año = new Date().getFullYear();
    // Inserta el año en el elemento
    añoEl.textContent = año;
});