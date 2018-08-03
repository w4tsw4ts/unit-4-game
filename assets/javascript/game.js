//Define variables
var targetNumber = 0;
var crystals = [];
var odd = 0;
var even = 0;
var Wins = 0;
var Loss = 0;
var totalScore = 0;

function resetGame() {
    //Assign Random numbers
    targetNumber = 0;
    crystals = [];
    targetNumber = Math.floor(Math.random() * (120 - 19 +1 )) + 19;
    for (var c = 0; c < 4; c++) {
        var numberRandom = Math.floor(Math.random() * 12) + 1;
        if (crystals.indexOf(numberRandom) === -1) {
            crystals.push(numberRandom);
            // console.log("numberRandom: " + numberRandom);
            // console.log("Crystals Num: " + crystals);
        } else {
            c--;
        }   
    }
    
    // Test to see if crystal has at least one odd or even number.
    even = 0;
    odd = 0;
    for (x = 0; x !== 4; x++) {
        if (testEven(crystals[x]) == true) {
            even++
            console.log("crystal" + x + " and has a value of " + crystals[x] + " is and even number.");
        } else {
            odd++
            console.log("crystal" + x + " and has a value of " + crystals[x] + " is and odd number.");
        }
    }
    
    totalScore =0;
    console.log("Target Number = " + targetNumber);
    console.log("Your total score = " + totalScore);
}

function testEven(num) {
    if ( num % 2 == 0) {
        return true;
    } 
}

function checkGame() {
    if (totalScore === targetNumber) {
        Wins++;
        console.log("You WIN!!");
        console.log("Wins: " + Wins);
        console.log("Losses: " + Loss);
        console.log("New totalScore: " + totalScore + " Target #: " + targetNumber);
        resetGame();
    } else if (totalScore > targetNumber) {
        Loss++;
        console.log("Sorry you lost.");
        console.log("Wins: " + Wins);
        console.log("Losses: " + Loss);
        console.log("New totalScore: " + totalScore + " Target #: " + targetNumber);
        resetGame();
    } else {
        console.log("New totalScore: " + totalScore + " Target #: " + targetNumber);
    }
}

// Start Game
resetGame();


$(document).ready(function() {
  $("#crystal0").on("click", function() {
      totalScore = totalScore + crystals[0];
      checkGame();
  });

  $("#crystal1").on("click", function() {
      totalScore = totalScore + crystals[1];
      checkGame();
  });

  $("#crystal2").on("click", function() {
      totalScore = totalScore + crystals[2];
      checkGame();
  });

  $("#crystal3").on("click", function() {
      totalScore = totalScore + crystals[3];
      checkGame();
  });
});
