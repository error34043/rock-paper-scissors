//const prompt = require('prompt-sync')(); //<-Required to run on npm/node

const playButtons = document.querySelectorAll('.playbtn');
const pointBoxes = document.querySelectorAll('main .points');
const pointTag = document.querySelectorAll('main .pointtag');
const pointValue = document.querySelectorAll('main .pointvalue');
const rockBtn = document.querySelector('#rockbtn');
const paperBtn = document.querySelector('#paperbtn');
const scissorsBtn = document.querySelector('#scissorsbtn');
const roundDisplay = document.querySelector('#perround');
const gameOverDisp = document.querySelector('#gameover');
const finalMessageDisp = document.querySelector('#finalmessage');
const roundNumber = document.querySelector('#round');
const playScore = document.querySelector('#playscore');
const compScore = document.querySelector('#compscore');
let numberOfRounds = 0;
let playerScore = 0;
let computerScore = 0;

//Creating a refresh link
const a = document.createElement('a');
a.setAttribute('onclick', 'window.location.href=this');
a.textContent = 'Play again?';
a.style.cssText = "color: #69DC9E; text-decoration: underline; font-family: 'Lato',sans-serif; font-size: 3vh; letter-spacing: 3px; font-weight: 900; cursor: pointer; background-color: var(--eerieblack);";

//Running functions on button click
playButtons.forEach(button => {
    button.addEventListener('click', () => {
        let disp = (playARound(button.id))
        roundDisplay.textContent = disp;
        countPoints(disp);
    });
});

//Options available to computer
const options = ['ROCK', 'PAPER', 'SCISSORS'];

//Getting a random number
const randomNumber = max =>  Math.floor(Math.random() * Math.floor(max));

//Generating random computer choice
const computerPlay = () => {
    let index = randomNumber(3);
    let iSay = options[index];
    return iSay;
};

//For one round
const playARound = (playerSelection) => {
    let computerSelection = computerPlay();
    if (playerSelection === 'rockbtn') {
        switch (computerSelection) {
            case 'ROCK':
                return "Suit up because it's a tie!";
                break;
            case 'PAPER':
                return "Too bad, but you better not be a sore loser.";
                break;
            case 'SCISSORS':
                return "Winner winner, buy yourself a chicken dinner!";
                break;
        }
    } else if (playerSelection === 'paperbtn') {
        switch (computerSelection) {
            case 'PAPER':
                return "Suit up because it's a tie!";
                break;
            case 'SCISSORS':
                return "Too bad, but you better not be a sore loser.";
                break;
            case 'ROCK':
                return "Winner winner, buy yourself a chicken dinner!";
                break;
        }
    } else if (playerSelection === 'scissorsbtn') {
        switch (computerSelection) {
            case 'SCISSORS':
                return "Suit up because it's a tie!";
                break;
            case 'ROCK':
                return "Too bad, but you better not be a sore loser.";
                break;
            case 'PAPER':
                return "Winner winner, buy yourself a chicken dinner!";
                break;
        }
    } else {
        return "What'd you say to me, punk?";
    }
};

//Function to run if player wins
const onWin = () => {
    finalMessageDisp.textContent = "Looks like I have finally found my equal. ";
    finalMessageDisp.appendChild(a);
    pointBoxes.forEach((box) => {
        box.classList.remove('normal');
        box.classList.add('win');
    });
    pointTag.forEach((item) => {
        item.classList.remove('normal');
        item.classList.add('win');
    });
    pointValue.forEach((item) => {
        item.classList.remove('normal');
        item.classList.add('win');
    });
}

//Function to run if player loses
const onLose = () => {
    finalMessageDisp.textContent = "You may have lost some battles but you have won the war. ";
    finalMessageDisp.appendChild(a);
    pointBoxes.forEach((box) => {
        box.classList.remove('normal');
        box.classList.add('lose');
    });
    pointTag.forEach((item) => {
        item.classList.remove('normal');
        item.classList.add('lose');
    });
    pointValue.forEach((item) => {
        item.classList.remove('normal');
        item.classList.add('lose');
    });
}

//Function to run in the event of a tie
const onTie = () => {
    finalMessageDisp.textContent = "HAHAHAHA try again, loser. ";
    finalMessageDisp.appendChild(a);
    pointBoxes.forEach((box) => {
        box.classList.remove('normal');
        box.classList.add('tie');
    });
    pointTag.forEach((item) => {
        item.classList.remove('normal');
        item.classList.add('tie');
    });
    pointValue.forEach((item) => {
        item.classList.remove('normal');
        item.classList.add('tie');
    });
}

//To add up points and display appropriate outputs
const countPoints = (disp) => {
    switch (disp) {
        case 'Too bad, but you better not be a sore loser.':
            computerScore++;
            numberOfRounds++;
            writePoints(playerScore, computerScore, numberOfRounds);
            break;
        case 'Winner winner, buy yourself a chicken dinner!':
            playerScore++;
            numberOfRounds++;
            writePoints(playerScore, computerScore, numberOfRounds);
            break;
        case "Suit up because it's a tie!":
            numberOfRounds++;
            writePoints(playerScore, computerScore, numberOfRounds);
            break;
    }

    if (playerScore === 5 && computerScore === 5) {
        onWin();
    } else if (playerScore === 5) {
        onLose();
    } else if (computerScore === 5) {
        onTie();
    }

    if (computerScore === 5 | playerScore === 5) {
        gameOverDisp.textContent = "Game over. Here's one last message before you go: ";
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;
    }
}

//To display round number and points
const writePoints = (playerScore, computerScore, numberOfRounds) => {
    playScore.textContent = playerScore;
    compScore.textContent = computerScore;
    roundNumber.textContent = 'Round number: ' + numberOfRounds;
}