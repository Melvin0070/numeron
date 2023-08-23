// Iteration 5: Store the player score and display it on the game over screen\
let play_again = document.getElementById("play-again-button")
let scores = document.getElementById("score-board")
play_again.addEventListener("click", (e)=>{
    window.location.href = "index.html"
})
scores.innerHTML= localStorage.getItem("score")

