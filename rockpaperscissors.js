function playRound() {
    let computerSelection = getComputerChoice();
    let playerSelection = prompt("Choose Rock, Paper or Scissors");
console.log("Computer choses " + computerSelection);
console.log("Player choses " + playerSelection);


if (computerSelection==playerSelection) {
    return "Push";
  } 
   if (computerSelection=="Scissors" && playerSelection=="paper") {
    return "Computer Wins";
  } if (playerSelection=="Scissors" && computerSelection=="paper") {
    return "Player Wins";
  }

  if (computerSelection=="Rock" && playerSelection=="Scissors") {
    return "Computer Wins";
  } if (playerSelection=="Rock" && computerSelection=="Scissors") {
    return "Player Wins";
  }

  if (computerSelection=="Paper" && playerSelection=="Rock") {
    return "Computer Wins";
  } if (playerSelection=="Paper" && computerSelection=="Rock") {
    return "Player Wins";
  }

}
function getComputerChoice(){
   let computerSelection = Math.floor(Math.random() * 3) + 1;


   if (computerSelection==1) {
    return "Rock";
  } if (computerSelection==2) {
    return "Paper";
  } if (computerSelection==3) {
    return "Scissors";
  }

}

 
function game(){
    let computer = 0;
    let player = 0;

    
    while(player<5  && computer<5){
        let game = playRound();
        if(game =="Computer Wins"){
            console.log("Computer Wins This Round");
            computer++;
        }
        if(game =="Player Wins"){
            console.log("Player Wins This Round");
            player++

        }
        if(game =="Push"){
            console.log("Game is a push");
        }
        console.log("Score: Player: "+player+" Computer: "+computer);

    }
    if(player>computer){
        console.log("Player wins best of 5");
    }
    if(player<computer){
      textContent = "Computer wins"
      console.log("Computer wins best of 5");
    }

}

console.log(game());
