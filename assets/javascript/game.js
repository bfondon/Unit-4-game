//Create variables
var wins=0;
var losses=0;
var totalScore=0;

//Computer generates a random number 
var computerGuess = Math.floor(Math.random()*102+19);

//Display computer generated number.
$("#computer-number").text(computerGuess);

//Crystals generate a number
var crystal1 = Math.floor(Math.random()*11+1);
var crystal2 = Math.floor(Math.random()*11+1);
var crystal3 = Math.floor(Math.random()*11+1);
var crystal4 = Math.floor(Math.random()*11+1);

//Define Reset function.
function reset(){
crystal1 = Math.floor(Math.random()*11+1);
crystal2 = Math.floor(Math.random()*11+1);
crystal3 = Math.floor(Math.random()*11+1);
crystal4 = Math.floor(Math.random()*11+1);
computerGuess = Math.floor(Math.random()*102+19);
totalScore=0;
$("#computer-number").text(computerGuess);
$("#total-score").text(totalScore);

}

//Name win/loss functions.

function lose(){
    alert("Sorry, you lose!");
    losses++;
    reset();
}

function win(){
    alert("Congratulations, you win!!!!");
    wins++;
    reset();
}

//When the user selects a crystal, its number is added to the total score
$("#img1").on("click", function(){
    totalScore = crystal1 + totalScore;
    $("#total-score").text(totalScore);
    if(totalScore>computerGuess){
        lose();
    } else if (totalScore===computerGuess) {
        win();
    }
});

$("#img2").on("click", function(){
    totalScore = crystal2 + totalScore;
    $("#total-score").text(totalScore);
    if(totalScore>computerGuess){
        lose();
    } else if (totalScore===computerGuess) {
        win();
    }
});

$("#img3").on("click", function(){
    totalScore = crystal3 + totalScore;
    $("#total-score").text(totalScore);
    if(totalScore>computerGuess){
        lose();
    } else if (totalScore===computerGuess) {
        win();
    }
});

$("#img4").on("click", function(){
    totalScore = crystal4 + totalScore;
    $("#total-score").text(totalScore);
    if(totalScore>computerGuess){
        lose();
    } else if (totalScore===computerGuess) {
        win();
    }
});
