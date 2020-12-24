import Ball from './ball';

const canvas = document.getElementById('gimme-canvas');
const ctx = canvas.getContext('2d');


const ball = new Ball(10, 10)
ball.render()

