document.addEventListener('DOMContentLoaded', () => {
    // Переключение показа пароля
    const toggleBtn = document.querySelector('.toggle-password');
    const passwordInput = document.querySelector('.password-wrapper input');

    if (toggleBtn && passwordInput) {
        toggleBtn.addEventListener('click', () => {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            toggleBtn.innerHTML = type === 'password'
                ? '<i class="far fa-eye"></i>'
                : '<i class="far fa-eye-slash"></i>';
        });
    }

    // Переключение приёмов пищи
    const mealItems = document.querySelectorAll('.meal-item');
    mealItems.forEach(item => {
        item.addEventListener('click', () => {
            mealItems.forEach(i => i.classList.remove('selected'));
            item.classList.add('selected');
        });
    });

    // Подсветка активного пункта нижней навигации
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
        });
    });
});