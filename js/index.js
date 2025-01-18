const changeColor = document.getElementById('change-color');

changeColor.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
});

const getHome = document.getElementById('home');

const createHomeStructure = () => {
    const home = document.createElement('div');
    home.innerHTML = `
        <h1 data-i18n="hero.greeting">Hola! Soy Gonzalo.</h1>
        <p data-i18n="hero.role">Desarrollador Fullstack</p>
    `;
    getHome.appendChild(home);
};

createHomeStructure();