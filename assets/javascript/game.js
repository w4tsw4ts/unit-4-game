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
    targetNumber = Math.floor((Math.random() * 120 - 19) + 19);
    for (x = 0; x !== 4; ++x ) {
        crystals[x] = Math.floor((Math.random() * 12) + 1);
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
}

function testEven(num) {
    if ( num % 2 == 0) {
        return true;
    } 
}

function stats() {

}

function checkGame() {
    if (totalScore === targetNumber) {
        Wins++;
        console.log("You WIN!!");
        console.log("Wins: " + Wins);
        console.log("Losses: " + Loss);
        resetGame();
    } else if (totalScore > targetNumber) {
        Loss++;
        console.log("Sorry you lost.");
        console.log("Wins: " + Wins);
        console.log("Losses: " + Loss);
        resetGame();
    } else {
        console.log("New totalScore: " + totalScore + " Target #: " + targetNumber);
    }
}

// Start Game
resetGame();
// Validate we have at least one even and one odd value crystal
while (odd === 0 || even === 0) {
    console.log("We do NOT have at least one even and one odd value crystal");
    resetGame();
}
// Validate we have unique numbers

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

console.log("Target Number = " + targetNumber);
console.log("Crystal 1 Value = " + crystals[0]);
console.log("Crystal 2 Value = " + crystals[1]);
console.log("Crystal 3 Value = " + crystals[2]);
console.log("Crystal 4 Value = " + crystals[3]);
console.log("Your total score = " + totalScore);
console.log("Wins: " + Wins);
console.log("Losses: " + Loss);
});
