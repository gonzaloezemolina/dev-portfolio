class LanguageManager {
    constructor() {
      this.currentLang = localStorage.getItem('preferred-language') || 'es';
      this.init();
    }
  
    init() {
      // Aplicar el idioma inicial
      this.setLanguage(this.currentLang);
      
      // Configurar el selector de idioma
      document.getElementById('language-selector').addEventListener('change', (e) => {
        this.setLanguage(e.target.value);
      });
    }
  
    setLanguage(lang) {
      this.currentLang = lang;
      localStorage.setItem('preferred-language', lang);
      this.updateContent();
    }
  
    updateContent() {
      // Actualizar todos los elementos con atributo data-i18n
      document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        element.textContent = translations[this.currentLang][key] || key;
      });
    }
  }
  
  // Inicializar cuando el DOM esté listo
  document.addEventListener('DOMContentLoaded', () => {
    new LanguageManager();
  });