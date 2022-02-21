//toggle theme
const sunIcon = document.querySelector(".bi-brightness-high-fill");
const moonIcon = document.querySelector(".bi-moon-stars-fill");
const checkbox = document.querySelector('.theme-toggle__checkbox');

checkbox.addEventListener('change', () => {
    if (checkbox.hasAttribute('checked')) {
        document.body.classList.remove('dark-theme');
        checkbox.removeAttribute('checked');
        localStorage.setItem('theme', 'light');
        sunIcon.classList.add('hide-toggle-icon');
        moonIcon.classList.remove('hide-toggle-icon');
    } else {
        document.body.classList.add('dark-theme');
        checkbox.setAttribute('checked', '');
        localStorage.setItem('theme', 'dark');
        sunIcon.classList.remove('hide-toggle-icon');
        moonIcon.classList.add('hide-toggle-icon');
    }
});

window.addEventListener('load', () => {
    const theme = localStorage.getItem('theme');

    if (theme) {
        if (theme === 'dark') {
            checkbox.setAttribute('checked', '');
            document.body.classList.add('dark-theme');
            sunIcon.classList.remove('hide-toggle-icon');
            moonIcon.classList.add('hide-toggle-icon');
        }
    }
});