// script.js
const cells = document.querySelectorAll('.cell');
const message = document.getElementById('message');
const resetButton = document.getElementById('reset');
let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];

// Winning combinations
const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

// Handle cell clicks
cells.forEach((cell, index) => {
    cell.addEventListener('click', () => {
      if (!board[index] && !checkWinner()) {
        board[index] = currentPlayer;
        cell.textContent = currentPlayer;
        cell.classList.add(currentPlayer === 'X' ? 'x' : 'o'); // Add color class
        cell.classList.add('taken');
  
        if (checkWinner()) {
          message.textContent = `${currentPlayer} wins!`;
        } else if (board.every(cell => cell)) {
          message.textContent = 'It\'s a draw!';
        } else {
          currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
          message.textContent = `Player ${currentPlayer}'s turn`;
        }
      }
    });
  });
  

// Check for winner
function checkWinner() {
  return winningCombinations.some(combination => {
    return combination.every(index => board[index] === currentPlayer);
  });
}

// Reset the game
resetButton.addEventListener('click', () => {
    board.fill(''); // Clear the board array
    cells.forEach(cell => {
      cell.textContent = ''; // Clear the text
      cell.classList.remove('x', 'o', 'taken'); // Remove all classes
    });
    currentPlayer = 'X'; // Reset to player X's turn
    message.textContent = `Player ${currentPlayer}'s turn`; // Update the message
  });
  
