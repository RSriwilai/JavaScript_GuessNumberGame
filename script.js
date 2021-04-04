'use strict';

// console.log(document.querySelector('.message').textContent); 

// document.querySelector('.message').textContent = 'Correct Number!'

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value); 



let randomNumber = Math.floor(Math.random() * 20) + 1;
let score = Number(document.querySelector('.score').textContent);
let highscore = 0;


document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);

    //when there is no input
    if (!guess) {
        document.querySelector('.message').textContent = 'No number was entered!';

        // when player wins
    } else if (guess === randomNumber) {
        document.querySelector('.message').textContent = 'Correct Number!';
        document.querySelector('.number').textContent = randomNumber;
        document.querySelector('body').style.backgroundColor = '#60b347' 
        document.querySelector('.number').style.width = '30rem' 

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore
        }

        //when guess is wrong
    } else if (guess !== randomNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = guess > randomNumber ? 'Too high!' : 'Too low!'
            score--;
            document.querySelector('.score').textContent = score
        } else {
            document.querySelector('.message') .textContent = 'You lose! Please try again';
            document.querySelector('.score').textContent = 0;
        }
    }

});

//reseting elements
document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    randomNumber = Math.floor(Math.random() * 20) + 1;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.guess').value = '';
    document.querySelector('.number').style.width = '15rem' 

});




