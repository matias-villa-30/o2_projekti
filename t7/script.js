const main = document.querySelector('main');
const topBottomCells = 8;
const leftRightCells = 8;

// План клеток
const cellPlan = [
    'start',
    'question', 'question', 'event',
    'question', 'question', 'question', 'erikois-event',
    'question', 'question', 'question', 'event',
    'question', 'question', 'erikois-event',
    'question', 'question', 'event',
    'question', 'question', 'question', 'erikois-event',
    'question', 'question', 'question', 'event',
    'question', 'question'
];

function generateCells() {
    main.innerHTML = ''; // Очистка main перед созданием новых элементов

    const mainWidth = main.clientWidth;
    const mainHeight = main.clientHeight;

    const cellWidth = mainWidth / topBottomCells;
    const cellHeight = mainHeight / leftRightCells;

    let cellCounter = 1;

    // Функция для создания клетки
    function createCell(top, left) {
        const cell = document.createElement('div');
        cell.className = `cell ${cellPlan[cellCounter - 1]}`;
        cell.style.width = `${cellWidth}px`;
        cell.style.height = `${cellHeight}px`;
        cell.style.top = `${top}px`;
        cell.style.left = `${left}px`;
        cell.textContent = `Ruutu ${cellCounter}`;
        main.appendChild(cell);
        cellCounter++;
    }

    // 1. Первая клетка (правый нижний угол)
    createCell(mainHeight - cellHeight, mainWidth - cellWidth);

    // 2. Нижний ряд (справа налево)
    for (let i = 1; i < topBottomCells; i++) {
        createCell(mainHeight - cellHeight, mainWidth - cellWidth - i * cellWidth);
    }

    // 3. Левый боковой ряд (снизу вверх)
    for (let i = 1; i < leftRightCells; i++) {
        createCell(mainHeight - cellHeight - i * cellHeight, 0);
    }

    // 4. Верхний ряд (слева направо)
    for (let i = 1; i < topBottomCells; i++) {
        createCell(0, i * cellWidth);
    }

    // 5. Правый боковой ряд (сверху вниз)
    for (let i = 1; i < leftRightCells - 1; i++) {
        createCell(i * cellHeight, mainWidth - cellWidth);
    }

    // Центральный контейнер и доп. элементы
    const centralContainer = document.createElement('div');
    centralContainer.className = 'central-container';
    main.appendChild(centralContainer);

    const leftPart = document.createElement('div');
    leftPart.className = 'left-part';
    centralContainer.appendChild(leftPart);

    const questionPart = document.createElement('div');
    questionPart.className = 'questions';
    leftPart.appendChild(questionPart);

    const gameButtons = document.createElement('div');
    gameButtons.className = 'game-buttons';
    leftPart.appendChild(gameButtons);

    const but1 = document.createElement('button');
    but1.className = 'button';
    but1.textContent = 'Button 1';
    const but2 = document.createElement('button');
    but2.className = 'button';
    but2.textContent = 'Button 2';
    const but3 = document.createElement('button');
    but3.className = 'button';
    but3.textContent = 'Button 3';

    gameButtons.appendChild(but1);
    gameButtons.appendChild(but2);
    gameButtons.appendChild(but3);

    const rightPart = document.createElement('div');
    rightPart.className = 'right-part';
    centralContainer.appendChild(rightPart);

    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'buttons';
    rightPart.appendChild(buttonContainer);

    const startBut = document.createElement('button');
    startBut.className = 'button';
    startBut.textContent = 'Start';
    const rulesBut = document.createElement('button');
    rulesBut.className = 'button';
    rulesBut.textContent = 'Rules';
    const exitBut = document.createElement('button');
    exitBut.className = 'button';
    exitBut.textContent = 'Exit';

    buttonContainer.appendChild(startBut);
    buttonContainer.appendChild(rulesBut);
    buttonContainer.appendChild(exitBut);

    const gameStats = document.createElement('div');
    gameStats.className = 'stats';
    rightPart.appendChild(gameStats);

    const gameMap = document.createElement('div');
    gameMap.className = 'map';
    gameStats.appendChild(gameMap);

    const playerStats = document.createElement('div');
    playerStats.className = 'players';
    gameStats.appendChild(playerStats);
}

// Генерация клеток при загрузке страницы
generateCells();

// Перегенерация при изменении размера окна
window.addEventListener('resize', generateCells);
