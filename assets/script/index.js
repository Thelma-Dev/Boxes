'use strict'

const btn = document.querySelector('.switch');
const boxes = document.querySelectorAll('.box');



let colors = ['#FF8C00', '#FFD700', '#ff00ff', '#008080', '#BC8F8F', '#708090', '#D8BFD8', '#CD5C5C', '#BDB76B'];

btn.addEventListener("click", function () {
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
  }
});

Get me water;
