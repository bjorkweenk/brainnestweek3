// SELECTORS

const message = document.querySelector('.options--message');
const resetBtn = document.querySelector('.options--reset');
const encouragement = document.querySelector('.options--encouragement');

const playerScoreEl = document.querySelector('.score--player');
const playerScoreBl = document.querySelector('#score--player');
const computerScoreEl = document.querySelector('.score--computer');
const computerScoreBl = document.querySelector('#score--computer');

const playerBtns = document.querySelectorAll('.option_player');
const playerEls = document.querySelector('.options--player');
const computerBtns = document.querySelectorAll('.option_computer');
const computerEls = document.querySelector('options--computer');

// VARIABLES

const choices = [ 'rock', 'paper', 'scissors' ];
const maxScore = 5;

let playerScore = 0, computerScore = 0; round = 1;

// INITIALIZE

const displayScore = (playerScore, computerScore) => {
    playerScoreEl.innerHTML = `${playerScore} / ${maxScore}`
    computerScoreEl.innerHTML = `${computerScore} / ${maxScore}`
}
displayScore(playerScore, computerScore);

// EVENT LISTENERS

playerEls.addEventListener('click', (e) => {
    const clicked = e.target.closest('.option_player');
    let player = clicked.dataset.options;
    playerBtns.forEach((e) => {
        if (player == e.dataset.options) {
            e.style.background = '#fbc531';
            setTimeout(() => {
                e.style.background = '#273c75';
            }, 1500);
        }
    })
    playRound(player);
})

resetBtn.addEventListener('click', () => {
    location.reload();
})

// FUNCTIONS

const computerPlay = () => {
    let computer = choices[Math.floor(Math.random() * choices.length)];
    computerBtns.forEach((e) => {
        if (computer == e.dataset.options) {
            e.style.background = '#e84118';
            setTimeout(() => {
                e.style.background = '#f5f6fa';
            }, 1500);
        }
    })
    return computer;
}

const checkRounds = () => {
    round++
    if ( playerScore == maxScore ) {
        playerScoreBl.classList.add('winner');
        silenceGame('Player');
    } else if ( computerScore == maxScore ) {
        computerScoreBl.classList.add('winner');
        silenceGame('Computer');
    }
}

const silenceGame = (player) => {
    playerBtns.forEach((e) => {
        setTimeout(() => {
            e.style.background = '#f5f6fa';
        }, 1500);
        // e.classList.add('option_computer');
        e.disabled = true;
    });
    toggleVisibility(message);
    message.style.background = '#fbc531';
    toggleVisibility(resetBtn);
    encouragement.innerHTML = 'Game over!'
    message.innerHTML = `${player} won the game!`;
}

const toggleVisibility = (el) => {
    el.classList.toggle('hide');
}

const battle = (computer, player) => {
    if (computer == player) {
        toggleVisibility(message);
        message.innerHTML = 'It\'s a tie! 🙄 Try again.';
        setTimeout(() => {
            toggleVisibility(message);
        }, 1500);
        console.log('It\'s a tie! Try again.');
    } else if (
        player == 'paper' && computer == 'rock' ||
        player == 'rock' && computer == 'scissors' ||
        player == 'scissors' && computer == 'paper'
    ){
        toggleVisibility(message);
        message.innerHTML = 'You win! 🥳';
        setTimeout(() => {
            toggleVisibility(message);
        }, 1500);
        console.log('You win!');
        playerScore++;
    } else if (
        player == 'scissors' && computer == 'rock' ||
        player == 'paper' && computer == 'scissors' ||
        player == 'rock' && computer == 'paper'
    ) {
        toggleVisibility(message);
        message.innerHTML = 'Computer wins! 💀';
        setTimeout(() => {
            toggleVisibility(message);
        }, 1500);
        console.log('Computer wins!');
        computerScore++;
    }
}

const playRound = (player) => {
    let computer = computerPlay();
    console.log(`-- Round ${round} --`)
    console.log(`You played ${player}`);
    console.log(`Computer played ${computer}`);

    battle(computer, player);
    displayScore(playerScore, computerScore);
    checkRounds();
}



// DEBUG