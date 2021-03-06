let scores, roundScore, activePlayer, gameActive;
init();
let prevDice;

document.querySelector(".btn--roll").addEventListener("click", function () {

    if(gameActive) {
        let dice = Math.floor(Math.random() * 6) + 1; // randomise dice number
		let diceDom = document.querySelector(".-dice");
		diceDom.style.display = "block";
        diceDom.src = `dice-${dice}.png`;
        
        if (prevDice === 6 && prevDice === 6) {   
            
            scores[activePlayer] = 0;
        } else if (dice !== 1) {
			roundScore += dice;
			document.querySelector(
				"#current-" + activePlayer
			).textContent = roundScore;
		} else {
			nextPlayer();
        }
        
        prevDice = dice;
    }
});

document.querySelector(".btn--hold").addEventListener("click", function() {
    if(gameActive) {
        scores[activePlayer] += roundScore; // add current score to the GLOBAL score
		document.querySelector("#score-" + activePlayer).textContent =
			scores[activePlayer]; // ui update

		if (scores[activePlayer] >= 100) {
			document.querySelector("#name-" + activePlayer).textContent =
				"Winner!";
			document.querySelector(".-dice").style.display = "none";
			document
				.querySelector(".player-" + activePlayer + "-panel")
				.classList.add("winner");
			document
				.querySelector(".player-" + activePlayer + "-panel")
				.classList.remove("active");
			gameActive = false;
		} else {
			nextPlayer();
		}
    }
});

document.querySelector("btn--new").addEventListener("click", init);

function nextPlayer() {

    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    
    document.getElementById("current-0").textContent = "0";
    document.getElementById("current-1").textContent = "0";

    document.querySelector("player-0-panel").classList.toggle("active");
    document.querySelector("player-1-panel").classList.toggle("active");

    document.querySelector(".-dice").style.display = "none";
};

function init () {
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gameActive = true;

    document.querySelector(".-dice").style.display = "none";

    document.getElementById(".score-0").textContent = "0";
    document.getElementById(".score-1").textContent = "0";
    document.getElementById(".current-0").textContent = "0";
    document.getElementById(".current-0").textContent = "0";
};