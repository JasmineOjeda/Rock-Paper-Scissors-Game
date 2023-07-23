let playerScore = 0;
let computerScore = 0;

function game(playerChoice) {
	//Setup
	readyStance();
	document.getElementById('display').style.display = "none";
	document.getElementById('countDown').innerHTML = "READY?";
	document.getElementById('countDown').style.visibility = "visible";
	let timer = 3;
	//Countdown
	let x = setInterval(function() {
			if (timer == 0) {
				clearInterval(x);
				document.getElementById('countDown').innerHTML = "FIGHT!";
				//Actual game
				getFighter(playerChoice);
				getEnemy(randomNum());
				var y = setTimeout(result, 1500);
			}
			else {
				document.getElementById('countDown').innerHTML = timer;
			}
			timer--;
		}
		, 800);
}

function readyStance() {
	document.getElementById('options').style.display = "none";
	document.getElementById('player').style.display = "";
}

function randomNum() {
	let num = Math.floor(Math.random() * 3) + 1;
	return num;
}

function getEnemy(num) {
	let choice;
	if (num == 1) {
		choice = "rock";
	}
	else if (num == 2) {
		choice = "paper";
	}
	else if (num == 3) {
		choice = "scissors";
	}
	document.getElementById('enemy').src = 'images/' + choice + '.png';
	document.getElementById('enemy').style = "opacity: 1; transform: scaleX(-1);";
}

function getFighter(choice) {
	document.getElementById('playerChoice').src = 'images/' + choice + '.png';
	document.getElementById('playerChoice').style = "opacity: 1;";
}

function result() {
	let rockRegex = /rock/;
	let paperRegex = /paper/;
	let scissorsRegex = /scissors/;
	
	let player = document.getElementById('playerChoice').src;
	let enemy = document.getElementById('enemy').src;

	if (player == enemy) {
		tie();
	}
	else if (rockRegex.test(player)) {
		if (scissorsRegex.test(enemy)) {
			win();
		}
		else {
			lose();
		}
	}
	else if (paperRegex.test(player)) {
		if (rockRegex.test(enemy)) {
			win();
		}
		else {
			lose();
		}
	}
	else if (scissorsRegex.test(player)) {
		if (paperRegex.test(enemy)) {
			win();
		}
		else {
			lose();
		}
	}
	resetOption();
}

function resetOption() {
	document.getElementById('reset').style.visibility = "visible";
}

function reset() {
	document.getElementById('reset').style.visibility = "hidden";
	
	document.getElementById('playerChoice').src = "images/readyStance.gif";
	document.getElementById('playerChoice').style = "transform: scaleX(-1);";
	
	document.getElementById('player').style.display = "none";
	document.getElementById('display').style = "display: ;";
	document.getElementById('options').style = "display: ;";
	document.getElementById('countDown').style.color = "black";
	document.getElementById('countDown').style.visibility = "hidden";
	
	document.getElementById('enemy').src = "images/readyStance.gif";
	document.getElementById('enemy').style = "transform: ;";
}

function win() {
	document.getElementById('countDown').innerHTML = "YOU WIN!";
	document.getElementById('countDown').style.color = "green";
	playerScore += 1;
	document.getElementById('playerScore').innerHTML = "Player: " + playerScore;
}

function lose() {
	document.getElementById('countDown').innerHTML = "FATALITY!";
	document.getElementById('countDown').style.color = "red";
	computerScore += 1;
	document.getElementById('computerScore').innerHTML = "Computer: "+ computerScore;
}

function tie() {
	document.getElementById('countDown').innerHTML = "TIE";
	document.getElementById('countDown').style.color = "blue";
}
