// 1. ФУНКЦИИ ДЛЯ КНОПОК (Глобальные)
function calculate(operator) {
    const n1 = parseFloat(document.getElementById('num1').value);
    const n2 = parseFloat(document.getElementById('num2').value);
    const resultElement = document.getElementById('result');

    if (isNaN(n1) || isNaN(n2)) {
        resultElement.textContent = "Введите числа!";
        return;
    }

    let res;
    if (operator === '+') res = n1 + n2;
    if (operator === '-') res = n1 - n2;
    if (operator === '*') res = n1 * n2;
    if (operator === '/') res = (n2 === 0) ? "На 0 нельзя!" : n1 / n2;

    resultElement.textContent = "Результат: " + res;
}

function changeAllCards() {
    const allCards = document.querySelectorAll('.skill-card');
    allCards.forEach(card => {
        card.style.backgroundColor = 'red';
    });
}

function addTask() {
    const input = document.getElementById('todo-input');
    const list = document.getElementById('todo-list');
    if (!input.value.trim()) return;

    createTaskElement(input.value);
    saveTasks(); // Сохраняем в память
    input.value = "";
}

// Вспомогательная функция для создания LI
function createTaskElement(text, isCompleted = false) {
    const list = document.getElementById('todo-list');
    const li = document.createElement('li');
    if (isCompleted) li.classList.add('completed');
    
    li.innerHTML = `
        <span>${text}</span>
        <button class="delete-btn">❌</button>
    `;

    // Удаление
    li.querySelector('.delete-btn').onclick = () => {
        li.remove();
        saveTasks();
    };

    // Выполнено
    li.onclick = (e) => {
        if (e.target.tagName !== 'BUTTON') {
            li.classList.toggle('completed');
            saveTasks();
        }
    };

    list.appendChild(li);
}

// 2. РАБОТА С ПАМЯТЬЮ (LocalStorage)
function saveTasks() {
    const tasks = [];
    document.querySelectorAll('#todo-list li').forEach(li => {
        tasks.push({
            text: li.querySelector('span').textContent,
            completed: li.classList.contains('completed')
        });
    });
    localStorage.setItem('myTasks', JSON.stringify(tasks));
}

function loadTasks() {
    const saved = JSON.parse(localStorage.getItem('myTasks') || "[]");
    saved.forEach(t => createTaskElement(t.text, t.completed));
}

// 3. ИНИЦИАЛИЗАЦИЯ ПРИ ЗАГРУЗКЕ
document.addEventListener('DOMContentLoaded', () => {
    // Приветствие
    let savedName = localStorage.getItem('userName');
    const title = document.querySelector('h1');
    if (savedName) {
        title.textContent = "С возвращением, " + savedName + "!";
    } else {
        let name = prompt("Как тебя зовут?");
        if (name) {
            localStorage.setItem('userName', name);
            title.textContent = "Привет, " + name + "!";
        }
    }

    // Карточки
 // 1. Создаем список объектов: название + класс иконки
const mySkills = [
    { name: "HTML", icon: "fab fa-html5" },
    { name: "CSS", icon: "fab fa-css3-alt" },
    { name: "JavaScript", icon: "fab fa-js-square" },
    { name: "Git", icon: "fab fa-git-alt" },
    { name: "GitHub", icon: "fab fa-github" },
    { name: "Terminal", icon: "fas fa-terminal" }
];

const container = document.querySelector('.skills-container');

if (container) {
    container.innerHTML = ""; // Очистка
    mySkills.forEach(skill => {
        const newCard = document.createElement('div');
        newCard.classList.add('skill-card');
        
        // Вставляем иконку и текст через innerHTML
        newCard.innerHTML = `<i class="${skill.icon}"></i> ${skill.name}`;
        
        container.appendChild(newCard);
    });
}

    // Загрузка задач из памяти
    loadTasks();

    // Тема
    const btn = document.querySelector('.theme-btn');
    btn.onclick = () => {
        const isDark = document.body.style.backgroundColor === 'rgb(51, 51, 51)';
        document.body.style.backgroundColor = isDark ? '#e0e5ec' : 'rgb(51, 51, 51)';
        document.body.style.color = isDark ? '#000' : '#fff';
    };
});

