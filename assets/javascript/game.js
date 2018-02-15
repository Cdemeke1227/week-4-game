
// Pseudo Code




// compare user total to crystal number, add logic{}
// *The player wins if their total score matches the random number from the beginning of the game.
//*Track number of winns and losses
// *The player loses if their score goes above the random number.

// based on comparison  logic, the game will restart by calling each function to update the crystal and user numbers
$(document).ready(function () {



    let computerNumber;
    let computerNumberMax = 120;
    let computerNumberMin = 19;
    let crystalNumberMax = 12;
    let cyrstalNumberMin = 1;
    let userScore = 0;
    let crystal1;
    let crystal2;
    let crystal3;
    let crystal4;
    let cyrstalNumber
    let num;

    let wins = 0;
    let loss = 0;

    let getRandomNumber = (max, min) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    let updateWinRecord = (wins, loss) => {
            $('#winCount').text("Wins: " + wins);
            $('#lossCount').text("Losses: " + loss);
    }
    let resetGame = () => {
        computerNumber = getRandomNumber(computerNumberMax, computerNumberMin);
        userScore = 0;
        $("#compNumber").text(computerNumber);
        $("#totalCount").text(userScore);
    }
    let crystalNumber = (crystalNum, num) => {
        crystalNum = getRandomNumber(crystalNumberMax, cyrstalNumberMin);
        userScore = crystalNum + userScore;// when crystal is clicked it will add it value total
        $('#crystalNumber').text(crystalNum);
        // $('#gem' + num).text(crystalNum);
        $('#totalCount').text(userScore);
        resultCheck(computerNumber, userScore);
    }
    let resultCheck = (computerNumber, userScore) => {
        if (computerNumber === userScore) {
            wins++;
           updateWinRecord(wins,loss);
            resetGame();

        }
        else {
            if (computerNumber < userScore) {
                loss++;
                updateWinRecord(wins,loss);
                resetGame();
            }
        }
    }

    resetGame();
    updateWinRecord(wins, loss);
    // Each of the four crystals will have a rand number between 1 -12
    $('#gem1').on("click", function () {
        crystalNumber(crystal1, '1');
    });
    $('#gem2').on("click", function () {
        crystalNumber(crystal2, '2');
    });
    $('#gem3').on("click", function () {
        crystalNumber(crystal3, '3');
    });
    $('#gem4').on("click", function () {
        crystalNumber(crystal4, '4');
    });








});