let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice button");
const msg = document.querySelector("#msg");
const userScoreContent = document.querySelector("#user-score");
const compScoreContent = document.querySelector("#comp-score");

choices.forEach((button) => {
  button.addEventListener("click", () => {
    const userChoice = button.getAttribute("id");
    playGame(userChoice);
  });
});

const getCompChoice = () => {
  const options = ["stone", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const playGame = (userChoice) => {
  // console.log("User Choice", userChoice);
  // generate computer choice
  const compChoice = getCompChoice();
  // console.log("comp choice", compChoice);

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let winner = true;
    if (userChoice === "stone") {
      //scissors ,paper
      winner = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      // scissors ,stone
      winner = compChoice === "scissors" ? false : true;
    } else {
      //stone,paper
      winner = compChoice === "stone" ? false : true;
    }
    showWinner(winner, userChoice, compChoice);
  }
};

const showWinner = (winner, userChoice, compChoice) => {
  if (winner) {
    userScore++;
    userScoreContent.innerText = userScore;
    msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
    // console.log("You win");
  } else {
    computerScore++;
    compScoreContent.innerText = computerScore;
    msg.innerText = `You Lost! ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
    // console.log("You lost!");
  }
};
const drawGame = () => {
  msg.innerText = "Draw game...Play Again";
  msg.style.backgroundColor = "black";
  // console.log("Draw game");
};
