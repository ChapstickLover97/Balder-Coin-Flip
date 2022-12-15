function flip(guess) {
    // random number
    let result = Math.floor(Math.random() * 2) + 1;
    
    // get the message paragraph
    let message = document.getElementById("message");
    
    // check result of the random versus the guess
    if(result == 1) {
        if(guess == "heads") {
            message.innerHTML = "You guessed heads.<br>The coin flips and comes up heads!  Nice!";
        }
        else {
            message.innerHTML = "You guessed tails.<br>The coin flips and  comes up heads!  Tragic."
        }
    }
    else {
        if(guess == "tails") {
            message.innerHTML = "You guessed tails.<br>The coin flips and comes up tails!  Nice!"
        }
        else {
            message.innerHTML = "You guessed heads.<br>The coin flips and  comes up tails!  Tragic."
        }
    }
}