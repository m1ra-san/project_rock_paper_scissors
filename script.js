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
        dialogue.textContent="It's a tie!";
    } else if (
        (humanChoice === 1 && computerChoice === 3) || 
        (humanChoice === 2 && computerChoice === 1) ||
        (humanChoice === 3 && computerChoice === 2) 
    ) {
        console.log("You win!");
        dialogue.textContent="You win!";
        humanScore++;
    } else {
        console.log("Computer wins!");
        dialogue.textContent="Computer wins!";
        computerScore++;
    }

     //Show and Hide
    document.querySelector('.dialogue').style.visibility = 'visible';
    setTimeout(() => {
        document.querySelector('.dialogue').style.visibility = 'hidden';
    }, 500);

    roundsPlayed++
    if(roundsPlayed>=5)endGame()

}

//---Show Choices/Picks
function showCompPicked(show){
    const map = ["", "rock", "paper", "scissors"];
    const picked=map[show]
    const images = document.querySelectorAll('.computer-side img');
    
    // Hide all
    images.forEach(image => {
        image.classList.remove('active');
        //delay for animation
        void image.offsetWidth;
    });
    
    // Show selected
    const selected = document.querySelector(`#comp-${picked}`);
    if (selected) {
      selected.classList.add('active');
    }
  
}

function showPlayerPicked(show){
    const map = ["", "rock", "paper", "scissors"];
    const picked=map[show]
    const images = document.querySelectorAll('.player-side img');
    
    // Hide all
    images.forEach(image=> {
        image.classList.remove('active');
        //delay for animation
        void image.offsetWidth;
    });
    // Show selected
    const selected = document.querySelector(`#user-${picked}`);
    if (selected) {
      selected.classList.add('active');
    }
  
}


//Show the Resart Panel
function endGame(){
    document.querySelector('.restart-container').classList.add('visible');
    if(humanScore>computerScore){
        console.log(`You wins with the score of ${humanScore}`);
        endDialogue.textContent="Human wins with the score of";
         displayScore.textContent=`${humanScore}`;
    }else if(humanScore<computerScore) {
        console.log(`Computer wins with the score of ${computerScore}`);
        endDialogue.textContent="Computer wins with the score of";
        displayScore.textContent=`${computerScore}`;
    }else{
        console.log(`Its a tie!! With both score of ${computerScore}!!`);
        endDialogue.textContent="Its a tie!! With both score of";
        displayScore.textContent=`${computerScore}`;
    } 
    
}

//Restrat the Game
const restartScore=()=>{
    document.querySelector('.restart-container').classList.remove('visible');
    humanScore = 0;
    computerScore = 0;
    roundsPlayed = 0;
    backToDefault()
};

const backToDefault=()=>{
    const both=[".computer-side",".player-side"]
    both.forEach(selector=>{
        const images = document.querySelectorAll(`${selector} img`)
        images.forEach(span => span.classList.remove('active'));
        images.item(0).classList.add('active');
    });
};


//Global Event Listener
function globalEventListener(type,selector,callback){
    document.addEventListener(type, e=>{
        if(e.target.matches(selector)) callback(e)
    })
}



let humanScore =0;
let computerScore=0;
let roundsPlayed = 0;


const dialogue= document.querySelector('.dialogue')
const endDialogue=document.querySelector('.restart-panel p')
const displayScore=document.querySelector('.restart-panel div')
globalEventListener("click",".game-buttons button",getHumanChoice);
globalEventListener("click",'#btnrestart',restartScore);