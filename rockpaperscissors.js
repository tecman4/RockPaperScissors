function playRound(playerSelection) {
    let computerSelection = getComputerChoice();

    console.log("Computer choses " + computerSelection);
    console.log("Player choses " + playerSelection);
    if (computerSelection==playerSelection) {
        return "Push";
      } 
      if (computerSelection=="Scissors" && playerSelection=="Paper") {
        return "Computer Wins";
      } if (playerSelection=="Scissors" && computerSelection=="Paper") {
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
document.addEventListener("DOMContentLoaded", function() {
    const body = document.querySelector('body');
    const rock = document.createElement('button');
    rock.textContent = 'Rock';
    document.body.appendChild(rock);


    const paper = document.createElement('button');
    paper.textContent = 'Paper';
    document.body.appendChild(paper);

    const scissors = document.createElement('button');
    scissors.textContent = 'Scissors';
    document.body.appendChild(scissors);

    var div = document.createElement('div');
    div.textContent = 'Results: ';
    document.body.appendChild(div);

    var score = document.createElement('div');
    score.textContent = 'Score: ';
    document.body.appendChild(score);

    var result = '';


    

    var player = 0;
    var computer = 0;

  rock.addEventListener('click', () => {

    result = playRound('Rock'); 
    const button = document.querySelector('button');
    div.textContent = "Results: "+result;
    score.textContent= "Score: Computer "+ computer+" Player "+player;

  });
  paper.addEventListener('click', () => {
    result = playRound('Paper'); 
    const button = document.querySelector('button');
    div.textContent = "Results: "+result;

  });
  scissors.addEventListener('click', () => {
    result = playRound('Scissors'); 
    const button = document.querySelector('button');
    div.textContent = "Results: "+result;

   
       //let game = playRound();
       if(result =="Computer Wins"){
           console.log("Computer Wins This Round");
           computer++;
       }
       if(result =="Player Wins"){
           console.log("Player Wins This Round");
           player++
 
       }
       if(result =="Push"){
           console.log("Game is a push");
       }
       score.textContent = "Score: Player: "+player+" Computer: "+computer;
 
  });
});
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

  // if(player>computer){
  //     console.log("Player wins best of 5");
  // }
  // if(player<computer){
  //   textContent = "Computer wins"
  //   console.log("Computer wins best of 5");
  // }

