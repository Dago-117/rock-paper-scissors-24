function getUserChoice() {
    return prompt("What do you choose?");
}

function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let random = Math.floor(Math.random() * 3);
    return choices[random];
}

function playRound(userChoice, computerChoice) {
    let win = "You win!";
    let lose = "You lose.";
    let draw = "It's a draw.";
    let outcome = "";
    let userScore = 0;
    let computerScore = 0;

    switch (userChoice) {
        case 'rock':
            switch (computerChoice) {
                case 'rock':
                    outcome = draw;
                    break;
                case 'paper':
                    ++computerScore;
                    outcome = lose;
                    break;
                case 'scissors':
                    ++userScore;
                    outcome = win;
                    break;
            }
            break;
        case 'paper':
            switch (computerChoice) {
                case 'rock':
                    ++userScore
                    outcome = win;
                    break;
                case 'paper':
                    outcome = draw;
                    break;
                case 'scissors':
                    ++computerScore;
                    outcome = lose;
                    break;
            }
            break;
        case 'scissors':
            switch (computerChoice) {
                case 'rock':
                    ++computerScore;
                    outcome = lose;
                    break;
                case 'paper':
                    ++userScore;
                    outcome = win;
                    break;
                case 'scissors':
                    outcome = draw;
                    break;
            }
            break;
    }
    console.log(outcome);
    console.log("New score is");
    console.log("User: " + userScore);
    console.log("Computer: " + computerScore);
}

let userChoice = getUserChoice();
let computerChoice = getComputerChoice();
playRound(userChoice, computerChoice);