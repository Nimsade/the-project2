let turn = true;
let turnPlay = 0;
let squares = document.querySelectorAll(".square");

squares.forEach((squ) => {
	squ.addEventListener("click", squareClick);
});

function squareClick() {
	if (this.textContent != "") return;
	turnPlay++;
	if (turn) this.textContent = "x";
	else this.textContent = "o";

	let gamePlay = winner();
	if (gamePlay.win) {
		let squares = document.querySelectorAll(".square");

		squares[gamePlay.pos[0]].style.color = "blue";
		squares[gamePlay.pos[1]].style.color = "blue";
		squares[gamePlay.pos[2]].style.color = "blue";
		document.getElementById(
			"result"
		).innerHTML = `${this.textContent} is the winner`;
		setTimeout(() => {
			cleanBoard();
		}, 1000);
	} else if (gamePlay.tie) {
		document.getElementById("result").innerHTML = "No one win";
		cleanBoard();
	}

	turn = !turn;
}

function cleanBoard() {
	let squares = document.querySelectorAll(".square");
	turn = !turn;
	turnPlay = 0;

	setTimeout(() => {
		document.getElementById("result").innerHTML = "";
	}, 1000);

	squares.forEach((squ) => {
		squ.textContent = "";
		squ.style.color = "";
	});
}

function winner() {
	let squares = document.querySelectorAll(".square");
	let gamePlay = { win: false, tie: false, pos: [] };
	if (
		squares[0].textContent == squares[1].textContent &&
		squares[1].textContent == squares[2].textContent &&
		squares[2].textContent != ""
	)
		gamePlay = { win: true, tie: false, pos: [0, 1, 2] };
	else if (
		squares[3].textContent == squares[4].textContent &&
		squares[4].textContent == squares[5].textContent &&
		squares[5].textContent != ""
	)
		gamePlay = { win: true, tie: false, pos: [3, 4, 5] };
	else if (
		squares[6].textContent == squares[7].textContent &&
		squares[7].textContent == squares[8].textContent &&
		squares[8].textContent != ""
	)
		gamePlay = { win: true, tie: false, pos: [6, 7, 8] };
	else if (
		squares[0].textContent == squares[3].textContent &&
		squares[3].textContent == squares[6].textContent &&
		squares[6].textContent != ""
	)
		gamePlay = { win: true, tie: false, pos: [0, 3, 6] };
	else if (
		squares[1].textContent == squares[4].textContent &&
		squares[4].textContent == squares[7].textContent &&
		squares[7].textContent != ""
	)
		gamePlay = { win: true, tie: false, pos: [1, 4, 7] };
	else if (
		squares[2].textContent == squares[5].textContent &&
		squares[5].textContent == squares[8].textContent &&
		squares[8].textContent != ""
	)
		gamePlay = { win: true, tie: false, pos: [2, 5, 8] };
	else if (
		squares[0].textContent == squares[4].textContent &&
		squares[4].textContent == squares[8].textContent &&
		squares[8].textContent != ""
	)
		gamePlay = { win: true, tie: false, pos: [0, 4, 8] };
	else if (
		squares[2].textContent == squares[4].textContent &&
		squares[4].textContent == squares[6].textContent &&
		squares[6].textContent != ""
	)
		gamePlay = { win: true, tie: false, pos: [2, 4, 6] };
	else if (turnPlay == 9) gamePlay.tie = true;

	return gamePlay;
}
