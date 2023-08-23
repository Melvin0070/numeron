// Iteration 2: Generate 2 random number and display it on the screen
const num2 = document.getElementById("number2")
const num1 = document.getElementById("number1")
const button = document.getElementById("buttons")
let number1;
let number2;
const times = document.getElementById("timer")
let intervalId;
displayRandomNumbers()
function displayRandomNumbers(){
    number1 = randomNumber()
    number2 = randomNumber()

    num1.innerHTML = number1
    num2.innerHTML = number2

}

function gameover(){
    window.location.href="./gameover.html"
    localStorage.setItem("score",score)
}


button.addEventListener("click", (e)=>{
    clearInterval(intervalId); 
    compareButton(e.target.id)
    resetTimer();
})


function randomNumber(){
    return Math.floor(Math.random()*100)+1

}
// Iteration 3: Make the options button functional
score = 0
function compareButton(operation){
    if (operation=="greater-than"&& number1>number2 || operation=="equal-to" && number1===number2 || operation =="lesser-than" && number1<number2 ){
            score++
            console.log(score)
            displayRandomNumbers()
            time= 6
            
        }else{
            gameover()

          
        }
}

// Iteration 4: Build a timer for the game
let time = 6
function timer(){
    if (time<=1){
        gameover()
    }
    time--
    times.innerText = time
}
setInterval(timer, 1000)

