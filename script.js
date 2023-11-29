//Get localStorage and convert string to object
let score = JSON.parse(localStorage.getItem("score")) || {
  //add Default operator
  wins: 0,
  losses: 0,
  ties: 0,
};

updateScoreElement();

function pickComputerMove() {
  const randomNumber = Math.random();

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "✊";
  } else if (randomNumber >= 13 && randomNumber < 2 / 3) {
    computerMove = "✋";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "✌️";
  }

  return computerMove;
}

//Add another function and argument
function playGame(playerMove) {
  //Add function to each button and return value
  const computerMove = pickComputerMove();

  let result = "";

  if (playerMove === "✋") {
    if (computerMove === "✊") {
      result = "You win.";
    } else if (computerMove === "✋") {
      result = "Tie.";
    } else if (computerMove === "✌️") {
      result = "You lose.";
    }
  } else if (playerMove === "✌️") {
    if (computerMove === "✊") {
      result = "You lose.";
    } else if (computerMove === "✋") {
      result = "You win.";
    } else if (computerMove === "✌️") {
      result = "Tie.";
    }
  } else if (playerMove === "✊") {
    if (computerMove === "✊") {
      result = "Tie.";
    } else if (computerMove === "✋") {
      result = "You lose.";
    } else if (computerMove === "✌️") {
      result = "You win.";
    }
  }

  if (result === "You win.") {
    score.wins += 1;
  } else if (result === "You lose.") {
    score.losses += 1;
  } else if (result === "Tie.") {
    score.ties += 1;
  }

  //Set localStorage for permanent data
  localStorage.setItem("score", JSON.stringify(score));
  updateScoreElement();

  document.querySelector(".js-result").innerHTML = result;

  document.querySelector(
    ".js-moves"
  ).innerHTML = `You ${playerMove} &nbsp; &nbsp; ${computerMove} Computer`;
}

function updateScoreElement() {
  document.querySelector(
    ".js-score"
  ).innerHTML = `Wins : ${score.wins}, Losses : ${score.losses}, Ties : ${score.ties}`;
}
