'use strict';

const hero = document.querySelector('.hero');
const text = document.querySelector('.title');
const walk = 300;

const shadow = (ev) => {
  const {offsetWidth: width, offsetHeight: height} = hero;
  let {offsetX: x, offsetY: y} = ev;

  if (this !== ev.target) {
    x = x + ev.target.offsetLeft;
    y = y + ev.target.offsetTop;
  }

  const xWalk = Math.round((x / width) * walk - walk / 2);
  const yWalk = Math.round((y / height) * walk - walk / 2);

  text.style.textShadow = `${xWalk}px ${yWalk}px 0 red,
  ${xWalk * -1}px ${yWalk}px rgb(255, 165, 0, 0.8),
  ${yWalk * -1}px ${xWalk}px rgb(255, 128, 0, 0.8)`;
};

hero.addEventListener('mousemove', shadow);
