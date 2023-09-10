// Rock, Paper, Scissors: Refactored with While Loop and an Array
let playGame = confirm("Shall we play stone, paper, or scissors?");
if (playGame) {
  //play
  while (playGame) {
    const playerChoice = prompt("Please enter stone, paper, or scissors.");
    if (playerChoice || playerChoice === "") {
      const playerOne = playerChoice.trim().toLowerCase();
      if (
        playerOne === "stone" ||
        playerOne === "paper" ||
        playerOne === "scissors"
      ) {
        const computerChoice = Math.floor(Math.random() * 3);
        const rpsArray = ["stone", "paper", "scissors"];
        const computer = rpsArray[computerChoice];

        const result =
          playerOne === computer
            ? "Tie game!"
            : playerOne === "stone" && computer === "paper"
            ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
            : playerOne === "paper" && computer === "scissors"
            ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
            : playerOne === "scissors" && computer === "stone"
            ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
            : `playerOne: ${playerOne}\nComputer: ${computer}\nplayerOne wins!`;
        alert(result);
        playGame = confirm("Play Again?");
        if (!playGame) alert("Ok, thanks for playing.");
        continue;
      } else {
        alert("You didn't enter stone, paper, or scissors.");
        continue;
      }
    } else {
      alert("I guess you changed your mind. Maybe next time.");
      break;
    }
  }
} else {
  alert("Ok, maybe next time.");
}