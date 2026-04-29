let userPick;
let computerPick;
let result;
let score = { win: 0, loss: 0, tie: 0 };

// 1.  user select a pick:
document.querySelector(".rock").addEventListener("click", function () {
  console.log("omo");
  // 3. Comapring the picks (user's and computer's)
  userPick = "rock";
  computerPick = computerMove();

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
});

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
