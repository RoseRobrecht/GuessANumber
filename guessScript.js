var randNum = Math.round( Math.random() * 99 ) + 1;

function sendData(form) {
    var guessNum = form.inputbox.value;
    form.inputbox.value = ""; 

    if (guessNum==randNum) {
        console.log("You got it!");
    }

    while(guessNum!=randNum) {
        console.log("Sorry, that's not the answer");
        if (guessNum > randNum) {
            console.log("You need to guess lower");
        }
        else {
            console.log("You need to guess lower");
        }
        guessNum = form.inputbox.value;
    }

    console.log("Great Job! That's the answer!");
}
