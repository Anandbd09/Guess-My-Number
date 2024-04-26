'use strict';
// console.log(document.querySelector('.message').textContent);
// // console.log(document.querySelector('.between').textContent);
// document.querySelector('.message').textContent = 'correct Number';
// // document.querySelector('.label-score').textContent = 'hello';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20;
// console.log(document.querySelector('.guess').value);
// console.log();

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess, guess);

  // When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '😒 No Number';
  }
  // when Player Wins
  else if (guess === secretNumber) {
    document.querySelector(`.message`).textContent = '🫡 Correct Number!';

    document.querySelector(`.number`).textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  // When guess is too high
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost the Game!';
    }
  }
  // when guess is too low
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost the Game!';
    }

    // document.querySelector('.message').textContent = 'Guess is too low';
    // score--;
    // document.querySelector('.score').textContent = score;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
