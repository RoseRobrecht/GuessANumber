var randNum = Math.round( Math.random() * 99 ) + 1;

sendData = (form) => {
    var guessNum = parseInt(form.inputbox.value, 10);
    form.inputbox.value = ""; 
    
    let text = `You guessed: ${guessNum}`;
    document.getElementById("response").innerHTML = text

    if (guessNum===randNum) {
        var rightOrWrong = "You got it! Good job.";
        highLow = "";
        document.getElementsByTagName('body')[0].className = 'winner'
    }
    else {
        rightOrWrong = "Sorry, that's not the answer";
        if (guessNum > randNum) {
            var highLow  = "That was a little high, you need to guess lower";
        }
        else {
            highLow  = "That was a little low, you need to guess higher";
        }
        guessNum = form.inputbox.value;
    }

    document.getElementById("right-or-wrong").innerText = rightOrWrong;
    document.getElementById("high-or-low").innerText = highLow;
}
