'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Number(Math.trunc(Math.random() * 20 + 1));

let score = 20;
let highScore = 0;

const message = function (message) {
  document.querySelector('.message').textContent = message;
};

const againButton = document.querySelector('.again');
againButton.addEventListener('click', function () {
  document.querySelector('.number').textContent = secretNumber = Number(
    Math.trunc(Math.random() * 20 + 1)
  );
  message('Start guessing...');
  document.querySelector('.score').textContent = score = 20;
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  //document.querySelector('.highscore').textContent = highScore;
});

const checkButton = document.querySelector('.check');
checkButton.addEventListener('click', function () {
  //comes out as string so better convert to a number
  const guess = Number(document.querySelector('.guess').value);
  //console.log(guess, typeof guess);

  //when the number is not added
  if (!guess) {
    message('No Number!');

    //when player wins
  } else if (guess === secretNumber) {
    message('Correct answer!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
    }
    document.querySelector('.highscore').textContent = highScore;

    //when the guess is different form the secret number
  } else if (guess !== secretNumber) {
    if (score > 1) {
      score--;
      message(guess > secretNumber ? 'Too high!' : 'Too low!');
      document.querySelector('.score').textContent = score; //score = score-1;
    } else {
      message('You lost');
    }
  }
});
