import "./game.js";
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const userChoice = document.querySelector('.user-selection');
const compChoice = document.querySelector('.comp-selection');
const selectionImg = document.createElement('img');
selectionImg.setAttribute("style", "width: 200px; height: auto;");

rockBtn.onclick = () => {
    selectionImg.src = "/assets/rock.webp";
    userChoice.appendChild(selectionImg);
}

paperBtn.onclick = () => {
    selectionImg.src = "/assets/paper.webp";
    userChoice.appendChild(selectionImg);
}

scissorsBtn.onclick = () => {
    selectionImg.src = "/assets/scissors.svg";
    userChoice.appendChild(selectionImg);
}

