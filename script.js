
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

function getHumanChoice() {
    let user = prompt("Pick Rock Paper or Scissors")
    let userpick = 0;
    if (user === null) {
        getHumanChoice();
    } else if (user.toLowerCase() === "rock") {
        userpick = 1;
    } else if (user.toLowerCase() === "paper") {
        userpick = 2;
    } else if (user.toLowerCase() === "scissors") {
        userpick = 3;
    } else getHumanChoice();

    return userpick
}


function playRound(humanChoice, computerChoiceChoice){
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
    } else {
        console.log("Computer wins!");
    }

}
let humanChoice= getHumanChoice();
let computerChoice=getComputerChoice();
playRound(humanChoice, computerChoice);
