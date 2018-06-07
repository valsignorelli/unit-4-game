$( document ).ready(function(){

var Random = (Math.floor(Math.random()*101)+19); 
var wins= 0;
var losses= 0;
var computerNumber= (Math.floor(Math.random()*101)+19); 
var playerTotalScore = 0;
var crystal1 = (Math.floor(Math.random()*12) +1); 
var crystal2 = (Math.floor(Math.random()*12) +1); 
var crystal3 = (Math.floor(Math.random()*12) +1); 
var crystal4 = (Math.floor(Math.random()*12) +1); 
var crystalChoice;

$ ("#randomNumber").text(Random);

function reset (){
    Random = Math.floor(Math.random()*101+19);
    console.log(Random)
    $('#randomNumber').text(Random);
    crystal1= Math.floor(Math.random()*11+1);
    crystal2= Math.floor(Math.random()*11+1);
    crystal3= Math.floor(Math.random()*11+1);
    crystal4= Math.floor(Math.random()*11+1);
    playerTotalScore= 0;
    $("#finalTotal").text(playerTotalScore);

}

function winner(){
    alert("You won!");
      wins++; 
      $('#numberWins').text(wins);
      reset();
    }

    function loser(){
    alert ("You lose!");
      losses++;
      $('#numberLosses').text(losses);
      reset()
    }


$("#random").text("computerNumber")



  $("#crystal1").on ("click", function(){
    playerTotalScore = playerTotalScore + crystal1;
    console.log("New playerTotalScore= " + playerTotalScore);
    $("#finalTotal").text(playerTotalScore);
    
    if (playerTotalScore == Random) {
        winner();
    }

    else if (playerTotalScore > Random) {
        loser();
    }

  })  

  $("#crystal2").on ("click", function(){
    playerTotalScore = playerTotalScore + crystal2;
    console.log("New playerTotalScore= " + playerTotalScore);
    $("#finalTotal").text(playerTotalScore); 
    

    if (playerTotalScore == Random) {
        winner();
    }

    else if (playerTotalScore > Random) {
        loser();
    }
  })

  $("#crystal3").on ("click", function(){
    playerTotalScore = playerTotalScore + crystal3;
    console.log("New playerTotalScore= " + playerTotalScore);
    $("#finalTotal").text(playerTotalScore); 
    
    if (playerTotalScore == Random) {
        winner();
    }

    else if (playerTotalScore > Random) {
        loser();
    }
  })

  $("#crystal4").on ("click", function(){
    playerTotalScore = playerTotalScore + crystal4;
    console.log("New playerTotalScore= " + playerTotalScore);
    $("#finalTotal").text(playerTotalScore); 
    
    if (playerTotalScore == Random) {
        winner();
    }

    else if (playerTotalScore > Random) {
        loser();
    }
  })



});