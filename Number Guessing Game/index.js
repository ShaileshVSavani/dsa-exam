
let randomNumber = parseInt((Math.random() * 20) + 1);
const submit = document.querySelector('#subt');
const guessInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.prevGuesses');
const remainingGuess = document.querySelector('.remainingGuess');
const result = document.querySelector('.result');
const lowOrHi = document.querySelector('.lowOrHi');
const p = document.createElement('p');
let previousGuesses = [];
let numGuesses = 0;
let playGame = true;

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
      
        const guess = parseInt(guessInput.value);
        validateGuess(guess);
    });
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('Please enter a valid number');
    } else if (guess < 1) {
        alert('Please enter a number greater than 1!');
    } else if (guess > 20) {
        alert('Please enter a number less than 20!');
    } else {
     
        previousGuesses.push(guess);
   
        if (numGuesses === 4) {
            displayGuesses(guess);
            displayMessage(`Game Over! Number was ${randomNumber}`);
            endGame();
        } else {
            displayGuesses(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage(`You guessed correctly!`);
        endGame();
    } else if (guess < randomNumber) {
        displayMessage(`Too low! Try again!`);
    } else if (guess > randomNumber) {
        displayMessage(`Too high! Try again!`);
    }
}

function displayGuesses(guess) {
    guessInput.value = '';
    guessSlot.innerHTML += `${guess} `;
    numGuesses++;
    remainingGuess.innerHTML = `${5 - numGuesses} `;
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h1>${message}</h1>`;
}

function endGame() {
    guessInput.value = '';
    guessInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h1 id="newGame">Start New Game</h1>`;
    result.appendChild(p);
    playGame = false;
    newGame();
}

function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function () {
        randomNumber = parseInt((Math.random() * 20) + 1);
        previousGuesses = [];
        numGuesses = 1;
        guessSlot.innerHTML = '';
        lowOrHi.innerHTML = '';
        remainingGuess.innerHTML = `${5 - numGuesses} `;
        guessInput.removeAttribute('disabled', ``);
        result.removeChild(p);
        playGame = true;
    });
}
