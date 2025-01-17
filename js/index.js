const changeColor = document.getElementById('change-color');

changeColor.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
});