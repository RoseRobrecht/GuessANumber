var randNum = Math.round( Math.random() * 99 ) + 1;

function sendData(form) {
    var guessNum = form.inputbox.value;
    form.inputbox.value = ""; 
}
