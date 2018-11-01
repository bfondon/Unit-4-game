//Create variables
var wins=0;
var losses=0;
var totalScore=0;

//Computer generates a random number 
var computerGuess = Math.floor(Math.random()*102+19);

//Display computer generated number.
$("#computer-number").text(computerGuess);

//When the user selects a crystal, its number is added to the total score
$("#img1").on("click", function(){
    var crystal1 = Math.floor(Math.random()*11+1);
    totalScore = crystal1 + totalScore;
    $("#total-score").text(totalScore);
});

$("#img2").on("click", function(){
    var crystal2 = Math.floor(Math.random()*11+1);
    totalScore = crystal2 + totalScore;
    $("#total-score").text(totalScore);

});

$("#img3").on("click", function(){
    var crystal3 = Math.floor(Math.random()*11+1);
    totalScore = crystal3 + totalScore;
    $("#total-score").text(totalScore);
});

$("#img4").on("click", function(){
    var crystal4 = Math.floor(Math.random()*11+1);
    totalScore = crystal4 + totalScore;
    $("#total-score").text(totalScore);
});

//If the total score reaches the number given, the user wins and the game restarts, and a win is added
if ((totalScore!=0) && (totalScore=computerGuess)){
    alert("Congratulations, you win!!!!");
    wins++;
}

//If the user picks a crystal and goes over the nuber given, the losses goes up by one and the game restarts
if(totalScore > computerGuess){
    alert("Sorry, you lose!");
    losses++;
    function reset(){
        totalScore=0;
        //Tell computer to generate another random number
    }
}

//Questions:
//Why is my second if function not working?
//How do I refresh my computer generated number
//How can I clean up my code?