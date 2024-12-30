let userChoice = getUserChoice();
let computerChoice = getComputerChoice();

console.log(decideOutcome(userChoice, computerChoice));

function getUserChoice() {
    return prompt("What do you choose?");
}

function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let random = Math.floor(Math.random() * 3);
    return choices[random];
}

function decideOutcome(userChoice, computerChoice) {
    let win = "You win!";
    let lose = "You lose.";
    let draw = "It's a draw.";

    switch (userChoice) {
        case 'rock':
            switch (computerChoice) {
                case 'rock':
                    return draw;
                case 'paper':
                    return lose;
                case 'scissors':
                    return win;
            }

        case 'paper':
            switch (computerChoice) {
                case 'rock':
                    return draw;
                case 'paper':
                    return lose;
                case 'scissors':
                    return win;
            }
        case 'scissors':
            switch (computerChoice) {
                case 'rock':
                    return draw;
                case 'paper':
                    return lose;
                case 'scissors':
                    return win;
            }
    }   
}