// const { createElement } = require("react");

function getComputerChoice() {
    const comp=(Math.floor(Math.random()*10)+1);
    let compick=0;
    if(comp<4){
        compick=1;
    }else if(comp<8){
        compick=2;
    }else compick=3;

    return compick;
}

function getHumanChoice(e) {
    let user = e.target.value.toLowerCase();
    let userpick = 0;


    if (!["rock", "paper", "scissors"].includes(user.toLowerCase())) {
        console.warn("Invalid input, ignoring.");
    } else if (user === "rock") {
        userpick = 1;
    } else if (user=== "paper") {
        userpick = 2;
    } else {
        userpick = 3;
    }
        

    const computerPick = getComputerChoice();
    showCompPicked(computerPick)
    showPlayerPicked(userpick)
    playRound(userpick, computerPick);
}


function playRound(humanChoice, computerChoice){
    const map = ["", "Rock", "Paper", "Scissors"];
    console.log("You picked:", map[humanChoice]);
    console.log("Computer picked:", map[computerChoice]);
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (
        (humanChoice === 1 && computerChoice === 3) || 
        (humanChoice === 2 && computerChoice === 1) ||
        (humanChoice === 3 && computerChoice === 2) 
    ) {
        console.log("You win!");
        humanScore++;
    } else {
        console.log("Computer wins!");
        computerScore++;
    }

    roundsPlayed++

    if(roundsPlayed>5)endGame()

}

function showCompPicked(show){
    const map = ["", "rock", "paper", "scissors"];
    const picked=map[show]
    const spans = document.querySelectorAll('.computer-side span');
    
    // Hide all
    spans.forEach(span => span.classList.remove('active'));
    
    // Show selected
    const selected = document.querySelector(`#comp-${picked}`);
    console.log(selected)
    console.log(picked)
    if (selected) {
      selected.classList.add('active');
    }
  
}

function showPlayerPicked(show){
    const map = ["", "rock", "paper", "scissors"];
    const picked=map[show]
    const spans = document.querySelectorAll('.player-side span');
    
    // Hide all
    spans.forEach(span => span.classList.remove('active'));
    
    // Show selected
    const selected = document.querySelector(`#user-${picked}`);
    console.log(selected)
    console.log(picked)
    if (selected) {
      selected.classList.add('active');
    }
  
}

function endGame(){

    if(humanScore>computerScore){
        console.log(`Human wins with the score of ${humanScore}`);
    }else if(humanScore<computerScore) {
        console.log(`Computer wins with the score of ${computerScore}`);
        
    }else console.log(`Its a tie!! With both score of ${computerScore}!!`);
    // restart()
    
}

function restart(){
    humanScore = 0;
    computerScore = 0;
    roundsPlayed = 0;
    const spans = document.querySelectorAll('.computer-side span');
    spans.forEach(span => span.classList.remove('active'));
    spans.item(0).classList.add('active');
}

function globalEventListener(type,selector,callback){
    document.addEventListener(type, e=>{
        if(e.target.matches(selector)) callback(e)
    })
}

let humanScore =0;
let computerScore=0;
let roundsPlayed = 0;

globalEventListener("click",".game-buttons button",getHumanChoice);
globalEventListener("click",".restart-panel button",restart);