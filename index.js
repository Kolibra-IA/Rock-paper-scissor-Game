let score = { win: 0, loss: 0, tie: 0 };

// 1.  user select a pick:
document.querySelector(".rock").addEventListener("click", function () {
  playGame("rock");
});
document.querySelector(".paper").addEventListener("click", function () {
  playGame("paper");
});
document.querySelector(".scissors").addEventListener("click", function () {
  playGame("scissors");
});

function playGame(pick) {
  // 3. Comapring the picks (user's and computer's)
  let userPick;
  let computerPick;
  let result;
  userPick = pick;
  computerPick = computerMove();

  if (pick === "rock") {
    if (computerPick === "rock") {
      result = "You tie";
      score.tie++;
    } else if (computerPick === "scissors") {
      result = "You win";
      score.win++;
    } else if (computerPick === "paper") {
      result = "You lose";
      score.loss++;
    }
  } else if (pick === "paper") {
    if (computerPick === "paper") {
      result = "You tie";
      score.tie++;
    } else if (computerPick === "rock") {
      result = "You win";
      score.win++;
    } else if (computerPick === "scissors") {
      result = "You lose";
      score.loss++;
    }
  } else if ((pick = "scissors")) {
    if (computerPick === "scissors") {
      result = "You tie";
      score.tie++;
    } else if (computerPick === "paper") {
      result = "You win";
      score.win++;
    } else if (computerPick === "rock") {
      result = "You lose";
      score.loss++;
    }
  }

  // 2. The computer select a pick: UI:
  document.querySelector(".computer-pick").innerHTML =
    `<img src='images/${computerPick}-emoji.png'>`;

  // 3. The two picks (user and computer) are compared: UI:
  document.querySelector(".pick-comparison").innerHTML =
    `You picked <img src="images/${userPick}-emoji.png">; computer picked <img src="images/${computerPick}-emoji.png">`;

  // 4. The result(win, loss or tie) is announced based on the rules: UI:
  document.querySelector(".result").innerHTML = `${result}`;

  // 5. The total score is updated: UI:
  document.querySelector(".score").innerHTML =
    `win: ${score.win} loss: ${score.loss} tie: ${score.tie}`;
}

//  2. The computer select a pick:
function computerMove() {
  let computerMove;
  const randomNumber = Math.random();

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "scissors";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "paper";
  }
  return computerMove;
}

// 6. The reset button can be clicked to reset the game:

document.querySelector(".reset").addEventListener("click", function () {
  score.win = 0;
  score.loss = 0;
  score.tie = 0;
  document.querySelector(".score").innerHTML =
    `win: ${score.win} loss: ${score.loss} tie: ${score.tie}`;

  document.querySelector(".computer-pick").innerHTML = ``;
  document.querySelector(".pick-comparison").innerHTML = ``;
  document.querySelector(".result").innerHTML = ``;
});
