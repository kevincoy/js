var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
}
var compare = function(choice1,choice2) {
    if (choice1 === choice2) {
        if (choice1 === paper) {
            return "Result is a tie!";
        }
        else if (choice2 === rock) {
            return "Paper wins!";
        }
    } 
     if (choice2 === scissors) {
        if (choice2) {
            return "Scissors wins!";
        }
        else if (choice2 === rock) {
            return "Paper wins!";
        }
    }
};

// This isn't complete ...