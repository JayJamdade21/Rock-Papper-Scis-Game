let userScore = 0;
let compScore = 0;
var userChoice;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

choices.forEach((choice) =>{
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id");
        console.log("Choice was clicked",userChoice);
        playGame(userChoice);
    });
} );

const playGame = (userChoice) =>{
    console.log("user choice =",userChoice);
    //Generate computer choice
    const compChoice = genCompChoice();
    console.log("comp choice =",compChoice);

    if(userChoice === compChoice){
        //Draw game
        drawGame();
    }else {
        let userWin = true;
        if(userChoice === "rock"){
            //scissor,paper
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            //rock,scissors
            userWin = compChoice === "scissors" ? false : true;
        }else {
            //rock,paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

const genCompChoice = () =>{
    const options =["rock","paper","scissor"];
    const randInx = Math.floor(Math.random() * 3);
    return options[randInx];
};

const drawGame = () =>{
    console.log("Game was draw");
    msg.innerText = "Match Draw";
    msg.style.backgroudColor = "chartreus";
};

const showWinner = (userWin,userChoice,compChoice) =>{
    if(userWin){
        console.log("You Win!");
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroudColor = "green";
    }else{
        console.log("You lose!");
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lost! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroudColor = "red";
    }
};

















