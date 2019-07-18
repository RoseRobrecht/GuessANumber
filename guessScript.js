var randNum = Math.round( Math.random() * 99 ) + 1;
console.log(randNum);

sendData = (form) => {
    var guessCount = 1

    var guessNum = parseInt(form.inputbox.value, 10);
    form.inputbox.value = ""; 
    
    let text = `You guessed: ${guessNum}`;
    document.getElementById("response").innerHTML = text

    if (guessNum===randNum) {
        var rightOrWrong = "You got it! Good job. <br> You guessed a total of " + guessCount + " times!";
        highLow = "";
        var youWon = "winner"
    }
    else if ((guessNum >= 1) && (guessNum <= 100)) {
        rightOrWrong = "Sorry, that's not the answer";
        if (guessNum > randNum) {
            var highLow  = "That was a little high, you need to guess lower";
        }
        else {
            highLow  = "That was a little low, you need to guess higher";
        }
        guessNum = form.inputbox.value;
        guessCount += 1
        youWon = "nope"
    }
    else {
        rightOrWrong = "The number you guessed is out of range."
        highLow = "Please guess a number between 1 and 100."
    }
    

    document.getElementById("right-or-wrong").innerText = rightOrWrong;
    document.getElementById("high-or-low").innerText = highLow;
    document.getElementsByTagName('body')[0].className = youWon
}
