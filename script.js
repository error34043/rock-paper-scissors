const prompt = require('prompt-sync')();

const options = ['ROCK', 'PAPER', 'SCISSORS'];

const randomNumber = max =>  Math.floor(Math.random() * Math.floor(max));

const computerPlay = () => {
    let index = randomNumber(3);
    let iSay = options[index];
    return iSay;
};

const playARound = (playerSelection, computerSelection) => {
    let youSay = playerSelection.toUpperCase();
    if (youSay === 'ROCK') {
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
    } else if (youSay === 'PAPER') {
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
    } else if (youSay === 'SCISSORS') {
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

const game = () => {
    let playCount = 0;
    let compCount = 0;
    for (let i = 1; i <= 5; i++) {
        let result = "";
        const playerSelection = prompt('What is your weapon of choice, brave warrior? ');
        const computerSelection = computerPlay();
        result = playARound(playerSelection,computerSelection);
        if (result === "Too bad, but you better not be a sore loser.") {
            compCount++;
        } else if (result === "Winner winner, buy yourself a chicken dinner!") {
            playCount++;
        }
        console.log(result);
        console.log('End of round ' + i + '.');
        console.log('Your score is: ' + playCount);
        console.log('My score is: '+ compCount);
    }
    console.log("Game over. Here's one last message before you go: ");
    if (playCount > compCount) {
        console.log("You may have lost some battles but you have won the war.");
    } else if (playCount < compCount) {
        console.log("HAHAHAHA try again, loser.");
    } else if (playCount === compCount) {
        console.log("Looks like I have finally found my equal. Shall we try again?");
    } else {
        console.log("I'm confused. :(");
    }
}

game();