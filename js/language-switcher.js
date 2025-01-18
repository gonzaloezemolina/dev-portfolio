class LanguageManager {
  constructor() {
      this.languages = ['es', 'en'];  // Idiomas disponibles
      this.currentLang = localStorage.getItem('preferred-language') || 'es';
      this.init();
  }

  init() {
      // Aplicar el idioma inicial
      this.setLanguage(this.currentLang);
      
      // Configurar el botón de idioma
      const langButton = document.getElementById('language-toggle');
      if (langButton) {
          // Actualizar el texto del idioma actual
          this.updateLanguageDisplay();
          
          // Añadir el event listener para el cambio de idioma
          langButton.addEventListener('click', () => {
              this.toggleLanguage();
          });
      }
  }

  toggleLanguage() {
      // Obtener el índice del idioma actual
      const currentIndex = this.languages.indexOf(this.currentLang);
      // Obtener el siguiente idioma (volver al primero si estamos en el último)
      const nextIndex = (currentIndex + 1) % this.languages.length;
      // Cambiar al siguiente idioma
      this.setLanguage(this.languages[nextIndex]);
  }

  setLanguage(lang) {
      this.currentLang = lang;
      localStorage.setItem('preferred-language', lang);
      this.updateContent();
      this.updateLanguageDisplay();
  }

  updateContent() {
      document.querySelectorAll('[data-i18n]').forEach(element => {
          const key = element.getAttribute('data-i18n');
          if (translations && translations[this.currentLang] && translations[this.currentLang][key]) {
              element.textContent = translations[this.currentLang][key];
          }
      });
  }

  updateLanguageDisplay() {
      const langDisplay = document.querySelector('.current-lang');
      if (langDisplay) {
          langDisplay.textContent = this.currentLang.toUpperCase();
      }
  }
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
  new LanguageManager();
});