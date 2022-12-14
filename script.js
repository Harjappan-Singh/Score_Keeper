const player1 = {
    score: 0,
    button: document.querySelector("#playerOne"),
    display: document.querySelector("#playerOneScore")
}
const player2 = {
    score: 0,
    button: document.querySelector("#playerTwo"),
    display: document.querySelector("#playerTwoScore")
}

const resetBtn = document.querySelector("#reset");
const gameScore = document.querySelector("#playUpto");

let winningScore = 21;
let isGameOver = false;

function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        if (player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add("has-text-success")
            opponent.display.classList.add("has-text-danger")
            player.button.disabled = true
            opponent.button.disabled = true
        }


        else if (player.score === 10 && opponent.score === 10) {
            winningScore = 12;
        }
        else if (player.score === 20 && opponent.score === 20) {
            winningScore = 22;
        }
        player.display.textContent = player.score;
    }
}

player1.button.addEventListener("click", function () {
    updateScores(player1, player2);
})

player2.button.addEventListener("click", function () {
    updateScores(player2, player1);
})

resetBtn.addEventListener("click", reset)

gameScore.addEventListener("change", function () {
    winningScore = parseInt(this.value);
    reset()
})

function reset() {
    isGameOver = false;
    for (let player of [player1, player2]) {
        player.score = 0;
        player.display.textContent = player.score;
        player.display.classList.remove("has-text-success", "has-text-danger")
        player.button.disabled = false
    }
}