const choices = [ "rock" , "paper" , "scissors" ];
const playerDisplay = document.getElementById('playerDisplay');
const computerDisplay = document.getElementById('computerDisplay');
const resultDisplay = document.getElementById('resultDisplay');
const PlayScoreDisplay = document.getElementById('PlayScoreDisplay');
const ComputerScoreDisplay = document.getElementById('ComputerScoreDisplay');
let playScore = 0 ;
let computerScore = 0;


function playGame( playerChoice){
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    if(playerChoice === computerChoice){
        result = " IT'S A TIE !";
    }else{
        switch(playerChoice){
            case "rock" :
                result =(computerChoice === "scissors") ? " YOU WIN !" : " YOU LOSE !";
                break;
            case "paper" :
                result = (computerChoice === "rock") ? " YOU WIN !" : " YOU LOSE !";
                break;
            case "scissors" :
                result = (computerChoice === "paper") ? " YOU WIN !" : " YOU LOSE !";
                 break;
        }
    }
    playerDisplay.textContent = ` PLAYER : ${playerChoice}`;
    computerDisplay.textContent = ` COMPUTER : ${computerChoice}`;
    resultDisplay.textContent = result ;
    switch(result){
        case " YOU WIN !":
            resultDisplay.classList.add("greenText");
            playScore ++ ;
            PlayScoreDisplay.textContent = `  ${playScore}`;
            break;
        case " YOU LOSE !":
            resultDisplay.classList.add("redText");
            computerScore ++;
            ComputerScoreDisplay.textContent =`  ${computerScore}` ;
            break;

    }

}