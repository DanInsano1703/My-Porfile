document.addEventListener('DOMContentLoaded', function() {
  // Carrusel automático
  const carousels = document.querySelectorAll('.image-carousel');

  carousels.forEach(carousel => {
    const images = carousel.querySelectorAll('img');
    let currentIndex = 0;

    function cycleImages() {
      images.forEach(img => img.classList.remove('active'));
      currentIndex = (currentIndex + 1) % images.length;
      images[currentIndex].classList.add('active');
    }

    const intervalId = setInterval(cycleImages, 4000);

    // Pausar el carrusel al hacer hover
    carousel.addEventListener('mouseenter', () => clearInterval(intervalId));
  });

  // Animación para tarjetas
  const elements = document.querySelectorAll('.tarjeta, .project-card');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  elements.forEach(element => observer.observe(element));

  // Crear partículas
  const particlesContainer = document.getElementById('particles');
  const particleCount = window.innerWidth < 768 ? 20 : 40;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');

    const size = Math.random() * 5 + 3;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;

    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;

    const duration = Math.random() * 20 + 10;
    particle.style.animationDuration = `${duration}s`;

    particle.style.animationDelay = `${Math.random() * 5}s`;
    particle.style.opacity = Math.random() * 0.4 + 0.1;

    particlesContainer.appendChild(particle);
  }

  // Menú móvil
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');

  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
      menuToggle.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });

  // Año actual en footer
  document.getElementById('year').textContent = new Date().getFullYear();

  // Botón volver arriba
  const backToTop = document.getElementById('backToTop');

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      backToTop.classList.add('active');
    } else {
      backToTop.classList.remove('active');
    }
  });

 // Efecto de escritura
      const typed = new Typed('#typed', {
        strings: ['Sistemas Eficientes', 'Soluciones Web', 'Experiencia de Usuario', 'Código Limpio'],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true,
        showCursor: false
      });

// Carga cuando el DOM esté listo
if (document.readyState !== 'loading') {
  initTyped();
} else {
  document.addEventListener('DOMContentLoaded', initTyped);
}
  // Resaltar enlace activo
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-menu a');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (pageYOffset >= sectionTop - 300) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  // Scroll suave (fallback)
  if (!('scrollBehavior' in document.documentElement.style)) {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
      });
    });
  }
});

// Ajustar altura del header en móviles
function adjustHeaderHeight() {
  if (window.innerWidth < 768) {
    const header = document.querySelector('header');
    header.style.minHeight = `${window.innerHeight}px`;
  }
}
window.addEventListener('resize', adjustHeaderHeight);
adjustHeaderHeight();

// Mostrar fecha actual con formato divertido
const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
document.querySelector('.current-date').textContent = new Date().toLocaleDateString('es-ES', {
  ...dateOptions,
  weekday: 'long'
}).replace(/^\w/, c => c.toUpperCase());

// Rotación de mensajes divertidos (opcional)
const funMessages = [

  "📉 Mi teclado sabe más secretos que mi terapeuta.",
  "🛠️ Mi código es más estable que mi vida amorosa.",
  "💡 Tan limpio que ni mi mamá cree que lo hice yo.",
  "📈 Si quieres excusas, llama a otro.",
  "🛑 Stop reading. Contrátame ya.",
  "🚧 Si algo sale mal, fue planificado.",
  "👀 ¿Habra alguien que este leyendo esto? Mejor descarga mi CV.",
  "😑 Ya plis, no sigas leyendo, se me acaban las ideas."
  
  
];

let currentMessage = 0;
const funLegalElements = document.querySelectorAll('.fun-legal');

setInterval(() => {
  funLegalElements[0].textContent = funMessages[currentMessage];
  currentMessage = (currentMessage + 1) % funMessages.length;
}, 3000);

document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');
  
  // Toggle del menú móvil
  menuToggle.addEventListener('click', function() {
    const isExpanded = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', !isExpanded);
    navMenu.classList.toggle('active');
  });
  
  // Cerrar menú al hacer clic en un enlace (para móviles)
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      if (window.innerWidth < 768) {
        menuToggle.setAttribute('aria-expanded', 'false');
        navMenu.classList.remove('active');
      }
    });
  });
  
  // Efecto de escritura para el subtítulo
  const subtitle = document.querySelector('.typing-text');
  if (subtitle) {
    const text = " Desarrollador Web Full Stack";
    let i = 0;
    
    function typeWriter() {
      if (i < text.length) {
        subtitle.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
      }
    }
    
    setTimeout(typeWriter, 1000);
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');
  
  // Soporte para eventos táctiles y clics
  const eventType = 'ontouchstart' in window ? 'touchstart' : 'click';
  
  menuToggle.addEventListener(eventType, function(e) {
    e.preventDefault(); // Importante para dispositivos táctiles
    const isExpanded = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', !isExpanded);
    navMenu.classList.toggle('active');
    
    // Bloquear scroll cuando el menú está abierto
    document.body.style.overflow = isExpanded ? 'auto' : 'hidden';
  });
  
  // Cerrar menú al tocar enlaces
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener(eventType, function() {
      if (window.innerWidth < 768) {
        menuToggle.setAttribute('aria-expanded', 'false');
        navMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
      }
    });
  });
  
  // Cerrar menú al tocar fuera
  document.addEventListener(eventType, function(e) {
    if (!navMenu.contains(e.target) && e.target !== menuToggle) {
      menuToggle.setAttribute('aria-expanded', 'false');
      navMenu.classList.remove('active');
      document.body.style.overflow = 'auto';
    }
  });
});