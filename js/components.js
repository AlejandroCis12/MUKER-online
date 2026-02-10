// js/components.js - Script mejorado para sitios corporativos
class ComponentLoader {
    constructor() {
        this.components = {
            'header': { id: 'header-container', file: 'components/header.html' },
            'footer': { id: 'footer-container', file: 'components/footer.html' }
        };
    }

    // Carga un componente individual
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
                this.reactivateScripts(container);
                this.initializeComponent(componentName, container);
            }
        } catch (error) {
            console.error(`Error cargando ${componentName}:`, error);
            this.showFallback(componentName);
        }
    }

    // Reactiva scripts dentro del componente
    reactivateScripts(container) {
        const scripts = container.querySelectorAll('script');
        scripts.forEach(oldScript => {
            const newScript = document.createElement('script');
            
            // Copiar todos los atributos
            Array.from(oldScript.attributes).forEach(attr => {
                newScript.setAttribute(attr.name, attr.value);
            });
            
            // Copiar contenido si es script inline
            if (!oldScript.src && oldScript.textContent) {
                newScript.textContent = oldScript.textContent;
            }
            
            oldScript.parentNode.replaceChild(newScript, oldScript);
        });
    }

    // Inicializa comportamientos específicos
    initializeComponent(name, container) {
        if (name === 'header') {
            this.setActiveNavLink();
            this.initMobileMenu();
        }
    }

    // Marca el enlace activo en la navegación
    setActiveNavLink() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        document.querySelectorAll('.nav-link').forEach(link => {
            const linkPage = link.getAttribute('href');
            if (linkPage === currentPage || 
                (currentPage === 'index.html' && linkPage === '/')) {
                link.classList.add('active');
            }
        });
    }

    // Inicializa menú móvil (si existe)
    initMobileMenu() {
        const toggleBtn = document.querySelector('.menu-toggle');
        const navMenu = document.querySelector('.main-nav');
        
        if (toggleBtn && navMenu) {
            toggleBtn.addEventListener('click', () => {
                navMenu.classList.toggle('show');
                toggleBtn.textContent = navMenu.classList.contains('show') ? '✕' : '☰';
            });
        }
    }

    // Muestra contenido alternativo si falla la carga
    showFallback(componentName) {
        const fallbacks = {
            'header': `<div class="fallback-header">
                <a href="/">Practik Box</a> | 
                <a href="/about.html">Nosotros</a> | 
                <a href="/contact.html">Contacto</a>
            </div>`,
            'footer': `<div class="fallback-footer">
                <p>&copy; ${new Date().getFullYear()} Practik Box</p>
            </div>`
        };
        
        const container = document.getElementById(this.components[componentName].id);
        if (container && fallbacks[componentName]) {
            container.innerHTML = fallbacks[componentName];
        }
    }

    // Carga todos los componentes
    loadAll() {
        Object.keys(this.components).forEach(comp => this.loadComponent(comp));
    }
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    const loader = new ComponentLoader();
    loader.loadAll();
});