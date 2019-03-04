    // Guess a letter and save in a $variable
    var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    // Setting variables to zero -->
    var wins = 0;
    var losses = 0;
    // var guesses = 0;
    var guessesLeft = 9;
    var userGuesses = [];


    // Set the computerGuess variable to a random choice
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    console.log("computerGuess: ", computerGuess)


    function countGuessesLeft() {
      document.querySelector("#guessesLeft").innerHTML = "guesses Left: " + guessesLeft;
    }

    function farUserGuesses() {
      document.querySelector("#letter").innerHTML = "Your Guesses so far: " + userGuesses.join(' ');
    }

    // countGuessesLeft();

    var restart = function () {
      guessesLeft = 9;
      userGuesses = [];
      computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

      console.log("computerGuess: " + computerGuess, userGuesses)

    }


    // <!-- When user releases key it increament values base on the following -->
    document.onkeyup = function (event) {

      guessesLeft--;

      var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

      userGuesses.push(userGuess);
      countGuessesLeft();
      farUserGuesses();

      if (userGuess === computerGuess) {
        wins++;
        document.querySelector("#wins").innerHTML = "Wins: " + wins;
        restart();
      }
      else if (guessesLeft === 0) {
        losses++;
        document.querySelector("#losses").innerHTML = "Losses: " + losses;
        restart();
      }
    };

