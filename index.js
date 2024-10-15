console.log("hi");

const options=["rock","paper","scissors"];

function getComputerChoice(){
    const choice=options[Math.floor(Math.random() * options.length)];
    return choice;
}

function checkWinner(playerSelection,computerSelection){
    if(playerSelection==computerSelection){
        return "Tie";
    } 
    else if(
            (playerSelection== "rock" && computerSelection=="scissors") ||
            (playerSelection== "scissors" && computerSelection=="rock") ||
            (playerSelection== "paper" && computerSelection=="rock")){
                return "Player"
            }
    else{
        return "Computer"
    }
}

function playRound(playerSelection,computerSelection){
    const result=checkWinner(playerSelection,computerSelection);
    if (result=="Tie"){
        return "It's a Tie";
    }
    else if(result=="Player"){
        return `You Win ${playerSelection} beats ${computerSelection}`;
    }
    else{
        return `You Lose ${computerSelection} beats ${playerSelection}`;
    }
}
function getPlayerChoice(){
    let validateInput=false;
    while(validateInput==false){
        const choice=prompt("rock paper scissors")
        if(choice==null){
            continue;
        }
        const choiceInLower=choice.toLowerCase();
        if(options.includes(choiceInLower)){
            validateInput=true;
            return choiceInLower;
        }

    }
}
function game(){
    let scorePlayer=0;
    let scoreComputer=0;
    console.log("WELCOME !!!")
    for(let i=0;i<5;i++){
        const playerSelection=getPlayerChoice();
        const computerSelection=getComputerChoice();
        playRound(playerSelection,computerSelection);
        console.log(playRound(playerSelection,computerSelection));
        console.log("------------------------------------")
        if(checkWinner(playerSelection,computerSelection)=="Player"){
            scorePlayer++;
        }
        else if(checkWinner(playerSelection,computerSelection)=="Computer"){
            scoreComputer++;
        }
    }
    console.log("Game Over")
    if(scorePlayer>scoreComputer){
        console.log("You Won");
    }
    else if(scorePlayer<scoreComputer){
        console.log("You lose");
    }
    else{
        console.log("It's a Tie");
    }
}
game();