let userScore = 0;
let computerScore = 0;

function getUserChoice() {
    return prompt("What do you choose?");
}

function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let random = Math.floor(Math.random() * 3);
    return choices[random];
}

function playRound() {
    let win = "You get a point!";
    let lose = "Computer gets a point!";
    let draw = "It's a draw.";
    let outcome = "";

    let userChoice = getUserChoice();
    let computerChoice = getComputerChoice();

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
    console.log("You pick: " + userChoice + "." + " Computer picks: " + computerChoice);
    console.log(outcome + " Your score is: " + userScore + " Computer score is: " + computerScore);

}

function playGame() {
    for (let i = 0; i < 5; ++i) {
        playRound();
    }
    if (computerScore > userScore)
        console.log("You lose :(")
    else if (computerScore < userScore)
        console.log("You win!")
    else
        console.log("It was a draw.")
}

playGame();
