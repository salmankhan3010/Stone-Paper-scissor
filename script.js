let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".Choices");
const msg = document.querySelector("#msg");
const userScoreBoard = document.querySelector("#user-score");
const compScoreBoard = document.querySelector("#comp-score");
// Try To Make Reset Btn
// const resetBtn = document.getElementById('resetBtn').addEventListener("click",(btn)=>{
//   userScoreBoard.innerText = 0;
//   compScoreBoard.innerText = 0;
//   msg.innerText = 'Play Your Move';
// });
const genCompChoice = () => {
  // stone,paper,scissors
  const options = ["stone", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};
const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScoreBoard.innerText = userScore;
    msg.innerText = `You Win ${userChoice} Beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScoreBoard.innerText = compScore;
    msg.innerText = `You Lose! ${compChoice} Beats Your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const drawGame = () => {
  msg.innerText = `Game Is Draw. Play Again!`;
  msg.style.backgroundColor = "#121619";
};
const playGame = (userChoice) => {
  // Generate Computer choice
  const compChoice = genCompChoice();
  if (userChoice === compChoice) {
    //Draw Game
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "stone") {
      // papper,scissors
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      // stone,scissors
      userWin = compChoice === "scissors" ? false : true;
    } else {
      // stone,paper
      userWin = compChoice === "stone" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    let userChoice = choice.getAttribute("id");
    playGame(userChoice);
    genCompChoice();
  });
});
