const canvas = document.getElementById("snake");
const ctx = canvas.getContext("2d");

const box = 32;

const ground = new Image();
ground.src = "image/ground.png";

const foodLogo = new Image();
foodLogo.src = "image/cake.png";

let snake = [];
snake[0] = {
	x: 9 * box,
	y: 10 * box,
};

let food = {
	x: Math.floor(Math.random() * 17 + 1) * box,
	y: Math.floor(Math.random() * 15 + 3) * box,
};

let score = 0;

function drew() {
	ctx.drewImage(ground, 0, 0);
}
let game = setInterval(drew, 100);
