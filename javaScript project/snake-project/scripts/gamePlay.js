const gameBoard = document.querySelector(".game_board");
const scoreTop = document.querySelector(".score");
const highScoreTop = document.querySelector(".high_score");
const reset = document.getElementById("resetBtn");
const wrapper = document.getElementById("wrapper");

let foodX, foodY;
let snakeLong = [];
let snakeX = 10,
	snakeY = 10;
let interval;
let gameOver = false;
let score = 0;
let highScore = localStorage.getItem("high_score") || 0;
highScoreTop.innerText = `High Score: ${highScore}`;

const changeFoodPos = () => {
	foodX = Math.floor(Math.random() * 20) + 1;
	foodY = Math.floor(Math.random() * 20) + 1;
};
let movementY = 0,
	movementX = 0;

const gameOverOn = () => {
	wrapper.style.display = "block";
	if (
		reset.addEventListener("click", () => {
			clearInterval(interval);
			location.reload();
		})
	) {
	}
};

const moveSnake = (e) => {
	if (e.key === "ArrowUp" && movementY != 1) {
		movementX = 0;
		movementY = -1;
	} else if (e.key === "ArrowDown" && movementY != -1) {
		movementX = 0;
		movementY = 1;
	} else if (e.key === "ArrowLeft" && movementX != 1) {
		movementX = -1;
		movementY = 0;
	} else if (e.key === "ArrowRight" && movementX != -1) {
		movementX = 1;
		movementY = 0;
	}
};

const food = () => {
	if (gameOver) return gameOverOn();
	let drew = `<div class="food" style="grid-area:${foodY}/${foodX}"><img src="./image/food.png" alt="apple"></div>`;

	if (snakeX === foodX && snakeY === foodY) {
		changeFoodPos();
		snakeLong.push([foodX, foodY]);
		score++;
		highScore = score >= highScore ? score : highScore;
		localStorage.setItem("high_score", highScore);
		scoreTop.innerText = `Score: ${score}`;
		highScoreTop.innerText = `High Score: ${highScore}`;
		if (score % 5 === 0) {
			clearInterval(interval);
			interval = setInterval(food, Math.max(150 - 15 * (score / 5), 50));
		}
	}

	for (let square = snakeLong.length - 1; square > 0; square--) {
		snakeLong[square] = snakeLong[square - 1];
	}

	snakeLong[0] = [snakeX, snakeY];

	snakeX += movementX;
	snakeY += movementY;

	if (snakeX <= 0 || snakeX > 20 || snakeY <= 0 || snakeY > 20) {
		gameOver = true;
	}

	for (let square = 0; square < snakeLong.length; square++) {
		drew += `<div class="head" style="grid-area:${snakeLong[square][1]}/${snakeLong[square][0]}"></div>`;
		if (
			square !== 0 &&
			snakeLong[0][1] === snakeLong[square][1] &&
			snakeLong[0][0] === snakeLong[square][0]
		) {
			gameOver = true;
		}
	}

	gameBoard.innerHTML = drew;
};

changeFoodPos();
food();

const snakeBody = () => {
	document.addEventListener("keydown", moveSnake);
	interval = setInterval(food, 150);
};
export { snakeBody, moveSnake, food, changeFoodPos };
