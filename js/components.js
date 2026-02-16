// js/components.js - Adaptado para MUKER
class ComponentLoader {
    constructor() {
        this.components = {
            'header': { id: 'header-container', file: 'components/header.html' },
            'footer': { id: 'footer-container', file: 'components/footer.html' }
        };
    }

    async loadComponent(componentName) {
        const comp = this.components[componentName];
        if (!comp) return;
        
        try {
            const response = await fetch(comp.file);
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            
            const html = await response.text();
            const container = document.getElementById(comp.id);
            
            if (container) {
                container.innerHTML = html;
                
                // Si es el header, inicializar el menú móvil DESPUÉS de insertarlo
                if (componentName === 'header') {
                    this.initMobileMenu();
                }
                
                // Si es el footer, actualizar el año
                if (componentName === 'footer') {
                    this.updateCopyrightYear();
                }
            }
        } catch (error) {
            console.error(`Error cargando ${componentName}:`, error);
        }
    }

    initMobileMenu() {
        // Buscar el botón y el menú dentro del header recién cargado
        const menuBtn = document.querySelector('.mobile-menu-btn');
        const navLinks = document.querySelector('.nav-links');
        
        if (menuBtn && navLinks) {
            console.log('Menú móvil inicializado'); // Para verificar que funciona
            
            // Evento para abrir/cerrar menú
            menuBtn.addEventListener('click', function(e) {
                e.stopPropagation(); // Evita propagación
                navLinks.classList.toggle('active');
                menuBtn.classList.toggle('active');
                
                // Cambiar ícono visualmente
                if (navLinks.classList.contains('active')) {
                    menuBtn.textContent = '✕';
                } else {
                    menuBtn.textContent = '☰';
                }
            });
            
            // Cerrar menú al hacer clic en un enlace (móviles)
            navLinks.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    if (window.innerWidth <= 768) {
                        navLinks.classList.remove('active');
                        menuBtn.classList.remove('active');
                        menuBtn.textContent = '☰';
                    }
                });
            });
            
            // Cerrar menú al hacer clic fuera (opcional)
            document.addEventListener('click', (e) => {
                if (window.innerWidth <= 768 && 
                    !navLinks.contains(e.target) && 
                    !menuBtn.contains(e.target) &&
                    navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    menuBtn.classList.remove('active');
                    menuBtn.textContent = '☰';
                }
            });
        } else {
            console.warn('No se encontraron elementos del menú móvil');
        }
    }

    updateCopyrightYear() {
        const yearEl = document.getElementById('añoActual');
        if (yearEl) {
            yearEl.textContent = new Date().getFullYear();
        }
    }

    loadAll() {
        // Cargar header primero
        this.loadComponent('header').then(() => {
            // Después de cargar header, cargar footer
            return this.loadComponent('footer');
        }).then(() => {
            // Inicializar otras funcionalidades globales
            this.initScrollEffects();
            this.initSmoothScroll();
            this.initScrollTopButton();
        });
    }

    initScrollEffects() {
        // Efecto de header al hacer scroll
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            if (header) {
                if (window.scrollY > 100) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            }
            
            // Botón scroll top
            const btnScrollTop = document.querySelector('.btn-scroll-top');
            if (btnScrollTop) {
                if (window.pageYOffset > 300) {
                    btnScrollTop.classList.add('visible');
                } else {
                    btnScrollTop.classList.remove('visible');
                }
            }
        });
    }

    initSmoothScroll() {
        // Scroll suave para enlaces internos
        document.querySelectorAll('a[href^="#"]:not([href="#"])').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = anchor.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    initScrollTopButton() {
        const btnScrollTop = document.querySelector('.btn-scroll-top');
        if (btnScrollTop) {
            // Scroll suave al hacer clic
            btnScrollTop.addEventListener('click', () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
            
            // Efectos visuales
            btnScrollTop.addEventListener('mousedown', () => {
                btnScrollTop.style.transform = 'translateY(1px) scale(0.98)';
            });
            
            btnScrollTop.addEventListener('mouseup', () => {
                btnScrollTop.style.transform = 'translateY(-3px) scale(1.05)';
            });
            
            btnScrollTop.addEventListener('mouseleave', () => {
                btnScrollTop.style.transform = '';
            });
        }
    }
}

// ===== SLIDER DE PRESENTACIÓN =====
class MukerSlider {
    constructor() {
        this.track = document.querySelector('.slider-track');
        this.slides = document.querySelectorAll('.slider-slide');
        this.prevBtn = document.querySelector('.slider-arrow.prev');
        this.nextBtn = document.querySelector('.slider-arrow.next');
        this.dots = document.querySelectorAll('.dot');
        this.progressBar = document.querySelector('.progress-bar');
        
        if (!this.track) return;
        
        this.currentIndex = 0;
        this.totalSlides = this.slides.length;
        this.autoPlayInterval = null;
        this.isTransitioning = false;
        this.progress = 0;
        
        this.init();
    }
    
    init() {
        this.updateSlider();
        this.addEventListeners();
        this.startAutoPlay();
    }
    
    addEventListeners() {
        if (this.prevBtn) {
            this.prevBtn.addEventListener('click', () => {
                if (!this.isTransitioning) this.prev();
            });
        }
        
        if (this.nextBtn) {
            this.nextBtn.addEventListener('click', () => {
                if (!this.isTransitioning) this.next();
            });
        }
        
        this.dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                if (!this.isTransitioning) this.goToSlide(index);
            });
        });
        
        // Pausar autoplay al hacer hover
        this.track.addEventListener('mouseenter', () => this.stopAutoPlay());
        this.track.addEventListener('mouseleave', () => this.startAutoPlay());
        
        // Soporte para teclado
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') this.prev();
            if (e.key === 'ArrowRight') this.next();
        });
    }
    
    updateSlider() {
        if (this.isTransitioning) return;
        
        this.isTransitioning = true;
        this.track.style.transform = `translateX(-${this.currentIndex * 100}%)`;
        
        this.updateDots();
        this.resetProgress();
        
        setTimeout(() => {
            this.isTransitioning = false;
        }, 800); // Mismo tiempo que la transición CSS
    }
    
    updateDots() {
        this.dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === this.currentIndex);
        });
    }
    
    next() {
        this.currentIndex = (this.currentIndex + 1) % this.totalSlides;
        this.updateSlider();
        this.resetAutoPlay();
    }
    
    prev() {
        this.currentIndex = (this.currentIndex - 1 + this.totalSlides) % this.totalSlides;
        this.updateSlider();
        this.resetAutoPlay();
    }
    
    goToSlide(index) {
        this.currentIndex = index;
        this.updateSlider();
        this.resetAutoPlay();
    }
    
    startAutoPlay() {
        this.stopAutoPlay();
        this.progress = 0;
        
        this.autoPlayInterval = setInterval(() => {
            this.next();
        }, 6000); // Cambia cada 6 segundos
        
        // Animación de la barra de progreso
        this.animateProgress();
    }
    
    stopAutoPlay() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
            this.autoPlayInterval = null;
        }
    }
    
    resetAutoPlay() {
        this.stopAutoPlay();
        this.startAutoPlay();
    }
    
    animateProgress() {
        if (!this.progressBar) return;
        
        let width = 0;
        const interval = setInterval(() => {
            if (!this.autoPlayInterval) {
                clearInterval(interval);
                return;
            }
            
            width += 0.5;
            if (width <= 100) {
                this.progressBar.style.width = width + '%';
            } else {
                width = 0;
            }
        }, 30); // 6000ms / 200 = 30ms por incremento del 0.5%
    }
    
    resetProgress() {
        this.progressBar.style.width = '0%';
    }
}

// Inicializar después de que cargue el DOM
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        new MukerSlider();
    }, 500);
});

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    const loader = new ComponentLoader();
    loader.loadAll();
});