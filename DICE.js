let player1ScoreValue = 0;  
let player2ScoreValue = 0;
let player1Turn = true;

const player1Score = document.getElementById('player-1-score');  
const player2Score = document.getElementById('player-2-score');
const player1ScoreUpdate = document.getElementById('player-1-score-update');
const player2ScoreUpdate = document.getElementById('player-2-score-update');
const player1Text = document.getElementById('player1');
const rollBtn = document.getElementById('roll-btn');
const restartBtn = document.getElementById('restart-btn');
const score1 = document.getElementById('score-1');
const score2 = document.getElementById('score-2');

rollBtn.addEventListener('click', startGame);
restartBtn.addEventListener('click', startAgain);  

function restartGame() {
    rollBtn.style.display = "none";
    restartBtn.style.display = "block";
}

function startGame() {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    
    if (player1Turn) {
        player1ScoreValue += randomNumber;  
        player1ScoreUpdate.textContent = player1ScoreValue;  
        player1Score.textContent = randomNumber;  
        score1.classList.remove('active');
        score2.classList.add('active');
        player1Text.textContent = 'PLAYER 2 TURN';
    } else {
        player2ScoreValue += randomNumber;  
        player2ScoreUpdate.textContent = player2ScoreValue; 
        player2Score.textContent = randomNumber;  
        score2.classList.remove('active');
        score1.classList.add('active');
        player1Text.textContent = 'PLAYER 1 TURN';
    }
    
    if (player1ScoreValue >= 20) {
        player1Text.textContent = "PLAYER 1 WON THE MATCH";
        restartGame();
    } else if (player2ScoreValue >= 20) {
        player1Text.textContent = "PLAYER 2 WON THE MATCH";
        restartGame();
    }

    player1Turn = !player1Turn; 
}

function startAgain() {
    player1ScoreValue = 0;
    player2ScoreValue = 0;
    player1Turn = true;
    player1Text.textContent = "PLAYER 1 TURN";
    
    score2.classList.remove('active');
    score1.classList.add('active');
    
    player1Score.textContent = '-';
    player2Score.textContent = '-';
    player1ScoreUpdate.textContent = '0';
    player2ScoreUpdate.textContent = '0';
    
    rollBtn.style.display = "block";
    restartBtn.style.display = "none";
}
