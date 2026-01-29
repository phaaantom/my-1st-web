document.addEventListener('DOMContentLoaded', () => {

    // --- 1. ПРИВЕТСТВИЕ И ПАМЯТЬ ---
    function askName() {
        let savedName = localStorage.getItem('userName');
        const title = document.querySelector('h1');
    
        if (savedName && title) {
            title.textContent = "С возвращением, " + savedName + "!";
        } else if (title) {
            let userName = prompt("Как тебя зовут, юный падаван?");
            if (userName) {
                localStorage.setItem('userName', userName);
                title.textContent = "Привет, " + userName + "!";
            }
        }
    }
    // ВАЖНО: вызываем функцию сразу при загрузке!
    askName();

    // --- 2. ГЕНЕРАЦИЯ КАРТОЧЕК ---
    const mySkills = ["HTML", "CSS", "JavaScript", "Git", "GitHub", "Terminal"];
    const container = document.querySelector('.skills-container');

    if (container) {
        container.innerHTML = ""; // Очищаем на случай дублей
        mySkills.forEach(skill => {
            const newCard = document.createElement('div');
            newCard.classList.add('skill-card');
            newCard.textContent = skill;
            container.appendChild(newCard);
        });
    }

    // --- 3. ТЕМНАЯ ТЕМА ---
    const btn = document.querySelector('.theme-btn');
    if (btn) {
        btn.addEventListener('click', function() {
            // Простая и надежная логика смены цветов
            if (document.body.style.backgroundColor === 'rgb(51, 51, 51)') {
                document.body.style.backgroundColor = '#e0e5ec';
                document.body.style.color = '#000';
            } else {
                document.body.style.backgroundColor = 'rgb(51, 51, 51)';
                document.body.style.color = '#fff';
            }
        });
    }
});

// Функцию calculate и changeAllCards оставь ВНЕ блока DOMContentLoaded, 
// чтобы их видел HTML (через onclick)
function addTask() {
    const input = document.getElementById('todo-input');
    const list = document.getElementById('todo-list');
    const taskText = input.value.trim();

    if (taskText === "") {
        alert("Напиши хоть что-нибудь!");
        return;
    }

    // 1. Создаем элемент списка (li)
    const li = document.createElement('li');
    li.innerHTML = `
        <span>${taskText}</span>
        <button class="delete-btn" onclick="this.parentElement.remove()">❌</button>
    `;

    // 2. Добавляем возможность отмечать задачу как выполненную
    li.addEventListener('click', function(e) {
        if (e.target.tagName !== 'BUTTON') {
            li.classList.toggle('completed');
        }
    });

    // 3. Кидаем в список
    list.appendChild(li);
    
    // 4. Очищаем поле ввода
    input.value = "";
}
