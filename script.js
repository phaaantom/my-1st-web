// Оборачиваем всё в DOMContentLoaded, чтобы JS ждал загрузки HTML
document.addEventListener('DOMContentLoaded', () => {

    // --- 1. ГЕНЕРАЦИЯ КАРТОЧЕК ---
    const mySkills = ["HTML", "CSS", "JavaScript", "Git", "GitHub", "Terminal"];
    const container = document.querySelector('.skills-container');

    if (container) {
        mySkills.forEach(skill => {
            const newCard = document.createElement('div');
            newCard.classList.add('skill-card');
            newCard.textContent = skill;
            container.appendChild(newCard);
        });
    }

    // --- 2. ПРИВЕТСТВИЕ ---
    const title = document.querySelector('h1');
    let userName = prompt("Как тебя зовут, юный падаван?");
    if (userName && title) {
        title.textContent = "Привет, " + userName + "!";
    }

    // --- 3. ТЕМНАЯ ТЕМА ---
    const btn = document.querySelector('.theme-btn');
    if (btn) {
        btn.addEventListener('click', function() {
            // Используем класс-переключатель вместо проверки цвета — это надежнее
            document.body.classList.toggle('dark-theme');
            
            // Если хочешь оставить именно через стили:
            if (document.body.style.backgroundColor === 'rgb(51, 51, 51)') {
                document.body.style.backgroundColor = '#e0e5ec';
                document.body.style.color = '#000';
            } else {
                document.body.style.backgroundColor = '#333';
                document.body.style.color = '#fff';
            }
        });
    }
});

// --- 4. ФУНКЦИЯ ПЕРЕКРАСКИ (вынесена из DOMContentLoaded, так как вызывается из HTML) ---
function changeAllCards() {
    const allCards = document.querySelectorAll('.skill-card');
    allCards.forEach(card => {
        card.style.backgroundColor = 'red';
    });
}
function calculate(operator) {
    // Получаем значения из полей ввода и превращаем их в числа
    const n1 = parseFloat(document.getElementById('num1').value);
    const n2 = parseFloat(document.getElementById('num2').value);
    const resultElement = document.getElementById('result');

    // Проверяем, ввел ли пользователь числа
    if (isNaN(n1) || isNaN(n2)) {
        resultElement.textContent = "Введите оба числа!";
        return;
    }

    let res;
    if (operator === '+') res = n1 + n2;
    if (operator === '-') res = n1 - n2;
    if (operator === '*') res = n1 * n2;
    if (operator === '/') res = n1 / n2;

    resultElement.textContent = "Результат: " + res;
}
