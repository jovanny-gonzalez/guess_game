function startGame() {
    let maxAttempts=3;
    let randomNumber=Math.floor(Math.random() * 10)+1;
    console.log(randomNumber);        
    for(let i = 1; i <= maxAttempts; maxAttempts--){
        let myGuess = prompt("Guess my integer, it is an integer between 1-10.");
        let myGuessInt=Math.floor(myGuess);
        if(myGuessInt===randomNumber){
            alert("Correct!! Game Won.");        
            return;
        }
        else if(myGuessInt<randomNumber){
            alert("Too Low!!");
        }
        else{
            alert("Too High!!");        
        }
        
    }
    alert("Game Over!! Game Lost.");
    return;
}