const secretnumber = Math.floor(Math.random()*100)+1;
const guess = document.getElementById('guess');
const result = document.getElementById('output');
console.log(secretnumber);
document.getElementById('guess').focus();
document.getElementById('guess').value = null;
guess.addEventListener('keypress', function(event) {
    if(event.key === 'Enter') {
        checkGuess();
    }
});
function checkGuess(){
    const enteredGuess = parseInt(guess.value);
    if(enteredGuess !== secretnumber){
        if(enteredGuess > secretnumber){
            result.innerHTML = "Too high. Guess again.";
            result.style.color = "darkred";
        } else{
            result.innerHTML = "Too low. Guess again.";
            result.style.color = "darkred";
        }
    document.getElementById('guess').value = null; 
    document.getElementById('guess').focus();
    }else{
        result.innerText = `Correct! You got it. It was ${secretnumber}`;
        result.style.color = "darkgreen";
        document.getElementById('reset').style.display = "block";
    }
}