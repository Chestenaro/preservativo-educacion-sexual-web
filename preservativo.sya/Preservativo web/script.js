document.addEventListener('DOMContentLoaded', () => {
  // Inicialización de íconos de Lucide
  lucide.createIcons();
});

/**
 * Navegación SPA entre vistas principales
 * @param {string} viewId - ID del contenedor de la vista a activar
 */
function navigateTo(viewId) {
  const currentView = document.querySelector('.view.active-view');
  const targetView = document.getElementById(viewId);

  if (!targetView || currentView === targetView) return;

  // Transición suave: Ocultar vista actual
  if (currentView) {
    currentView.style.opacity = '0';
    currentView.style.transform = 'scale(0.97)';

    setTimeout(() => {
      currentView.classList.remove('active-view');
      
      // Mostrar nueva vista
      targetView.classList.add('active-view');
      
      // Resetear scroll interno de la vista que se muestra
      const scrollableArea = targetView.querySelector('.view-content-scroll');
      if (scrollableArea) scrollableArea.scrollTop = 0;

      setTimeout(() => {
        targetView.style.opacity = '1';
        targetView.style.transform = 'scale(1)';
      }, 50);

    }, 300); // Coincide con el tiempo de animación CSS
  } else {
    targetView.classList.add('active-view');
    targetView.style.opacity = '1';
    targetView.style.transform = 'scale(1)';
  }
}

/**
 * Abrir un modal emergente por su ID
 * @param {string} modalId - ID del modal a desplegar
 */
function openModal(modalId) {
  const overlay = document.getElementById('modal-overlay');
  const modal = document.getElementById(modalId);

  if (overlay && modal) {
    overlay.classList.add('active');
    modal.classList.add('active');
  }
}

/**
 * Cerrar todos los modales abiertos
 */
function closeAllModals() {
  const overlay = document.getElementById('modal-overlay');
  const modals = document.querySelectorAll('.modal-window');

  if (overlay) overlay.classList.remove('active');
  modals.forEach(modal => modal.classList.remove('active'));
}

// Permitir cerrar modales mediante la tecla Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeAllModals();
  }
});