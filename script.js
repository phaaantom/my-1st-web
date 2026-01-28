const btn = document.querySelector('.theme-btn');

btn.addEventListener('click', function() {
    // Проверяем: если текущий фон серый — делаем темным
    if (document.body.style.backgroundColor === 'rgb(51, 51, 51)') {
        document.body.style.backgroundColor = '#e0e5ec'; // Светлый
        document.body.style.color = '#000';              // Черный текст
    } else {
        document.body.style.backgroundColor = '#333';    // Темный
        document.body.style.color = '#fff';              // Белый текст
    }
});
function changeAllCards() {
    // Находим ВСЕ карточки сразу
    const allCards = document.querySelectorAll('.skill-card');
    
    // Перебираем их и красим каждую в красный
    allCards.forEach(card => {
        card.style.backgroundColor = 'red';
    });
}
// 1. Создаем функцию приветствия
function askName() {
    // 2. Спрашиваем имя и сохраняем его в переменную 'userName'
    let userName = prompt("Как тебя зовут, юный падаван?");
    
    // 3. Находим наш заголовок h1
    const title = document.querySelector('h1');
    
    // 4. Если пользователь что-то ввел (не нажал "отмена")
    if (userName) {
        title.textContent = "Привет, " + userName + "!";
    }
}

// 5. Вызываем функцию сразу при загрузке страницы
askName();
