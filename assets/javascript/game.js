
// Crystal Collector Game
// ==============================================
$(function () {
    // ==============================================
    // Variables
    // ==============================================
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
    // ==============================================
    // Functions
    // ==============================================
    // Generates Random Integer between max and min
    let getRandomNumber = (max, min) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    // Will update the overall wing loss record
    let updateWinRecord = (wins, loss) => {
        $('#winCount').text("Wins: " + wins);
        $('#lossCount').text("Losses: " + loss);
    }
    // This will reset all the random numbes and total score
    let resetGame = () => {
        computerNumber = getRandomNumber(computerNumberMax, computerNumberMin);
        crystal1 = getRandomNumber(crystalNumberMax, cyrstalNumberMin);
        crystal2 = getRandomNumber(crystalNumberMax, cyrstalNumberMin);
        crystal3 = getRandomNumber(crystalNumberMax, cyrstalNumberMin);
        crystal4 = getRandomNumber(crystalNumberMax, cyrstalNumberMin);
        userScore = 0;
        $("#compNumber").text(computerNumber);
        $("#totalCount").text(userScore);
    }
    let crystalNumber = (crystalNum, num) => {
        // crystalNum = getRandomNumber(crystalNumberMax, cyrstalNumberMin);
        userScore = crystalNum + userScore;// when crystal is clicked it will add it value total
        // $('#gem' + num).text(crystalNum); // testing case to show gem number on tile
        $('#totalCount').text(userScore);
        resultCheck(computerNumber, userScore);
    }
    let resultCheck = (computerNumber, userScore) => {
        if (computerNumber === userScore) {
            wins++;
            updateWinRecord(wins, loss);
            resetGame();

        }
        else {
            if (computerNumber < userScore) {
                loss++;
                updateWinRecord(wins, loss);
                resetGame();
            }
        }
    }
    // ==============================================
    // Game Start
    // ==============================================
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