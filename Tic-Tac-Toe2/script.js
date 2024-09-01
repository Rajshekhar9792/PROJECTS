const board = document.getElementById('board');
const cells = document.querySelectorAll('.cell');
const message = document.getElementById('message');
const resetButton = document.getElementById('reset');

let currentPlayer = 'X';
let boardState = ['', '', '', '', '', '', '', '', ''];
let isGameOver = false;

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function checkWinner() {
    for (const combination of winningCombinations) {
        const [a, b, c] = combination;
        if (boardState[a] && boardState[a] === boardState[b] && boardState[a] === boardState[c]) {
            return boardState[a];
        }
    }
    return boardState.includes('') ? null : 'Tie';
}

function handleClick(event) {
    if (isGameOver) return;

    const index = event.target.dataset.index;

    if (boardState[index]) return;

    boardState[index] = currentPlayer;
    event.target.classList.add(currentPlayer);
    event.target.textContent = currentPlayer;

    const winner = checkWinner();

    if (winner) {
        isGameOver = true;
        if (winner === 'Tie') {
            message.textContent = "It's a Tie!";
        } else {
            message.textContent = `${winner} Wins!`;
        }
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}

function resetGame() {
    boardState = ['', '', '', '', '', '', '', '', ''];
    isGameOver = false;
    currentPlayer = 'X';
    message.textContent = '';

    cells.forEach(cell => {
        cell.classList.remove('X', 'O');
        cell.textContent = '';
    });
}

board.addEventListener('click', handleClick);
resetButton.addEventListener('click', resetGame);
