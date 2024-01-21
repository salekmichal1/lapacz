'use strict';

window.onload = function () {
  document.body.style.display = 'block';
};

const countToDate = new Date('Apr 30, 2024 17:03:00').getTime();
let previousTimeBetweenDates;
setInterval(() => {
  const currentDate = new Date().getTime();
  const timeBetweenDates = countToDate - currentDate;
  flipAllCards(timeBetweenDates);

  previousTimeBetweenDates = timeBetweenDates;
}, 250);

function flipAllCards(time) {
  const days = Math.floor(time / (1000 * 60 * 60 * 24));
  const seconds = Math.floor((time % (1000 * 60)) / 1000);
  const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  flip(document.querySelector('[data-days-tens]'), Math.floor(days / 10));
  flip(document.querySelector('[data-days-ones]'), days % 10);
  flip(document.querySelector('[data-hours-tens]'), Math.floor(hours / 10));
  flip(document.querySelector('[data-hours-ones]'), hours % 10);
  flip(document.querySelector('[data-minutes-tens]'), Math.floor(minutes / 10));
  flip(document.querySelector('[data-minutes-ones]'), minutes % 10);
  flip(document.querySelector('[data-seconds-tens]'), Math.floor(seconds / 10));
  flip(document.querySelector('[data-seconds-ones]'), seconds % 10);
}

function flip(flipCard, newNumber) {
  const topHalf = flipCard.querySelector('.top');
  const startNumber = parseInt(topHalf.textContent);
  if (newNumber === startNumber) return;

  const bottomHalf = flipCard.querySelector('.bottom');
  const topFlip = document.createElement('p');
  topFlip.classList.add('top-flip');
  const bottomFlip = document.createElement('p');
  bottomFlip.classList.add('bottom-flip');

  top.textContent = startNumber;
  bottomHalf.textContent = startNumber;
  topFlip.textContent = startNumber;
  bottomFlip.textContent = newNumber;

  topFlip.addEventListener('animationstart', e => {
    topHalf.textContent = newNumber;
  });
  topFlip.addEventListener('animationend', e => {
    topFlip.remove();
  });
  bottomFlip.addEventListener('animationend', e => {
    bottomHalf.textContent = newNumber;
    bottomFlip.remove();
  });
  flipCard.append(topFlip, bottomFlip);
}
