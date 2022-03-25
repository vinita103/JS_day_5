
const hands = ['rock' , 'paper', 'scissors'];
 

function getHand(){
    
         return hands[parseInt(Math.random()*10)%3];

}
// console.log(parseInt(Math.random()*10)%3);
// console.log(getHand());


let Player1= { name:'John',
              getHand:getHand
            }
let Player2 = {name:'Sam',
              getHand:getHand
            }

let winConditions = {
    rock:"scissors",
    paper:"rock",
    scissors:"paper",
}

function playRound(Player1,Player2){

    let Player1hand = Player1.getHand();
    let Player2hand = Player2.getHand();

    console.log(Player1.name,"played", Player1hand);
    console.log(Player2.name,"played", Player2hand);

    if (Player1hand===Player2hand){
        console.log("it's a tie");
          return null;
     
}

    else if (winConditions[Player1hand === Player2hand]){
        console.log(Player1.name, "is winner");
            return Player1;
            
    }

      else {
        console.log(Player2.name, "is winner");
       return Player2;
    

      }
}
// console.log(playRound(Player1,Player2));

function playGame (player1,player2,playUntil)
{

    let player1Wins = 0;
    let player2Wins = 0;

    while (player1Wins < playUntil && player2Wins < playUntil) 
    {
        console.log('Current Score: ', Player1.name, player1Wins);
        console.log('Current Score:', Player2.name, player2Wins);

        if (playRound(player1, player2)) {

        } 
        
        else if (!playRound(player1, player2) === player1) 
        {
            player1Wins++;
        }
         else {
            player2Wins++;
        }
    }  

    if (player1Wins === playUntil) {
        return player1;
    } 
    else {
        return player2;
    }

}

console.log(playGame(Player1, Player2, 5));
