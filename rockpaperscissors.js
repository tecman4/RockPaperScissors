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
    let game = 0;
    
    while(game<5){
        let game1 = playRound();
        if(game1 =="Computer Wins"){
            console.log("Computer Wins game "+game);
            computer++;
        }
        if(game1 =="Player Wins"){
            console.log("Player Wins game "+game);
            player++

        }
        if(game1 =="Push"){
            console.log("Game "  + game+ " is a push");
        }
        game++;
    }
    if(player>computer){
        console.log("Player Wins "+player+" out of 5 games");
    }
    if(player<computer){
        console.log("Computer Wins "+computer+" out of 5 games");
    }
    if(player == computer){
        console.log("Computer & Player tie out of 5 games");
    }
}

console.log(game());
