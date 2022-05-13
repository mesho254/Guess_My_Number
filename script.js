'use strict';
let correctNumber = Math.trunc(Math.random() * 20) + 1;
const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}
const warning = document.querySelector('.warn');
const closebtn = document.querySelector('.close-modal');
const showoverlay = document.querySelector('.overlay');
let highscore = 0;
let score = 20;
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    if (!guess) {
        displayMessage('⛔ No number');
    } else if (guess === correctNumber) {
        displayMessage('👍correct Number!');
        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = correctNumber;
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    } else if (guess > 20) {
        showoverlay.classList.remove('hidden');
        warning.classList.remove('hidden');
        closebtn.addEventListener('click', function () {
            warning.classList.add('hidden');
        })
        document.addEventListener('keydown', function (x) {
            if (x.key === 'Escape' && !warning.classList.contains('hidden')) {
                warning.classList.add('hidden');
            }
        })
    }
    else if (guess !== correctNumber) {
        if (score > 1) {
            displayMessage(guess > correctNumber ? '📈 Too High' : '📉 Too Low');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('😢 You Lose');
            document.querySelector('.score').textContent = 0;
        }
    }
});

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    correctNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.score').textContent = score;
    displayMessage('Start guessing...');
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.guess').value = '';
    document.querySelector('.number').textContent = '?';
});
