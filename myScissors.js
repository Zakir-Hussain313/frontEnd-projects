userScore = 0;
compScore = 0;

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const drawGame = () => {
    console.log("Game Was Draw");
    msg.innerHTML = "Game was draw!";
    msg.style.backgroundColor = "#081b31"
}

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const showWinner = (userWin , userChoice , compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerHTML = userScore ;
        msg.innerHTML = `You Won! your ${userChoice} beats computer's ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePara.innerHTML = compScore;
        msg.innerHTML = `Your Lost! Computer's ${compChoice} beats Your ${userChoice}` ;
        msg.style.backgroundColor = "red";
    };
};

const playGame = (userChoice) => {
    console.log("User choice = ", userChoice);
    const compChoice = genCompChoice();
    console.log("Comp choice = ", compChoice);

    if(userChoice === compChoice) {
        drawGame();
    }else{
        let userWin = true ;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true ;
        }else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true ;
        }else{
            userWin = compChoice === "rock" ? false : true ;
        }
        showWinner(userWin , userChoice , compChoice);
    };
};



choices.forEach((choice) =>{
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
});