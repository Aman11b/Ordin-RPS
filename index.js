let playerScore=0;
let computerScore=0;
let roundNumber=1;

const options=["rock","paper","scissors"];

function getComputerChoice(){
    const choice=options[Math.floor(Math.random() * options.length)];
    return choice;
}

function playRound(playerSelection,computerSelection){
    const playerChoice=document.getElementById("player-choice");
    const computerChoice=document.getElementById("computer-choice");

    playerChoice.textContent=playerSelection;
    computerChoice.textContent=computerSelection

    if (playerSelection === computerSelection){
        return "It's a Tie";
    }
    else if(
        (playerSelection ==="rock" && computerSelection==="scissors") ||
        (playerSelection==="scissors" && computerSelection==="paper") ||
        (playerSelection ==="paper" && computerSelection==="rock")
    
    ){
        return "Player";
    }
    else{
        return "Computer";
    }
}

function updateScore(result){
    if(result==="Player"){
        playerScore++;
        document.getElementById("player-score").textContent=playerScore;
    }
    else if(result==="Computer"){
        computerScore++;
        document.getElementById("computer-score").textContent=computerScore;
    }
}
function nextRound(){
    roundNumber++;
    document.getElementById("round-number").textContent=roundNumber;
    if(roundNumber>5){
        declareResult();
    }
}

function declareResult(){
    let gamaResult="";
    if(playerScore>computerScore){
        gamaResult="You Win!";
    }
    else if(playerScore<computerScore){
        gamaResult="You Lose!";
    }
    else{
        gamaResult="It's a Tie!";
    }
    localStorage.setItem("gameResult",gamaResult);
    window.location.href="result.html";
}

document.querySelectorAll(".choice-btn").forEach(button=>{
    button.addEventListener("click",function(){
        const playerSelection=this.id;
        const computerSelection=getComputerChoice();
        const result=playRound(playerSelection,computerSelection);
        updateScore(result);
        nextRound();
    });
});