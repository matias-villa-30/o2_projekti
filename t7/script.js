const main = document.querySelector('main');
const topBottomCells = 8;
const leftRightCells = 8;

function generateCells() {
    main.innerHTML = '';

    const mainWidth = main.clientWidth;
    const mainHeight = main.clientHeight;

    const cellWidth = mainWidth / topBottomCells;

    const cellHeight = mainHeight / leftRightCells;

    let cellCounter = 1;

    const firstCell = document.createElement('div');
    firstCell.className = 'cell';
    firstCell.style.width = `${cellWidth}px`;
    firstCell.style.height = `${cellHeight}px`;
    firstCell.style.top = `${mainHeight - cellHeight}px`;
    firstCell.style.left = `${mainWidth - cellWidth}px`;
    firstCell.textContent = `Ruutu ${cellCounter}`;
    main.appendChild(firstCell);
    cellCounter++;

    for (let i = 1; i < topBottomCells; i++) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        cell.style.width = `${cellWidth}px`;
        cell.style.height = `${cellHeight}px`;
        cell.style.top = `${mainHeight - cellHeight}px`;
        cell.style.left = `${(mainWidth - cellWidth) - i * (mainWidth - cellWidth) / (topBottomCells - 1)}px`;
        cell.textContent = `Ruutu ${cellCounter}`;
        main.appendChild(cell);
        cellCounter++;
    }

    for (let i = 1; i < leftRightCells; i++) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        cell.style.width = `${cellWidth}px`;
        cell.style.height = `${cellHeight}px`;
        cell.style.top = `${(mainHeight - cellHeight) - i * (mainHeight - cellHeight) / (leftRightCells - 1)}px`;
        cell.style.left = 0;
        cell.textContent = `Ruutu ${cellCounter}`;
        main.appendChild(cell);
        cellCounter++;
    }

    for (let i = 1; i < topBottomCells; i++) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        cell.style.width = `${cellWidth}px`;
        cell.style.height = `${cellHeight}px`;
        cell.style.top = 0;
        cell.style.left = `${i * (mainWidth - cellWidth) / (topBottomCells - 1)}px`;
        cell.textContent = `Ruutu ${cellCounter}`;
        main.appendChild(cell);
        cellCounter++;
    }

    for (let i = 1; i < leftRightCells - 1; i++) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        cell.style.width = `${cellWidth}px`;
        cell.style.height = `${cellHeight}px`;
        cell.style.top = `${i * (mainHeight - cellHeight) / (leftRightCells - 1)}px`;
        cell.style.left = `${mainWidth - cellWidth}px`;
        cell.textContent = `Ruutu ${cellCounter}`;
        main.appendChild(cell);
        cellCounter++;
    }

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

    const but2 = document.createElement('button');
    but2.className = 'button';
    
    const but3 = document.createElement('button');
    but3.className = 'button';

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

    const rulesBut = document.createElement('button');
    rulesBut.className = 'button';

    const exitBut = document.createElement('button');
    exitBut.className = 'button';

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

generateCells();

window.addEventListener('resize', generateCells);
