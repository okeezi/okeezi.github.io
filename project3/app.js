var randomValue = Math.floor(Math.random() * 100)
var currentScore = 10

document.getElementById("score").innerHTML = currentScore
document.getElementById("panel-success").style.display = "none"

function checkRandomNumber() {
    var input = document.getElementById("random").value
    if (input == "" || input == undefined) {
        document.getElementById("result").innerHTML = "Kindly enter a valid number"
    } else if (currentScore == 0) {
        document.getElementById("result").innerHTML = "Sorry, game is over"
    } else {
        console.log(randomValue)

        if (input == randomValue) {
            let result = randomValue
            document.getElementById("panel").style.display = "none"
            document.getElementById("panel-success").style.display = "block"
            document.getElementById("message").innerHTML = "You guess was correct <h3>" + input + "</h3> is my secret number"
            document.getElementById("final").innerHTML = currentScore
            document.getElementById("random").value = ""
            randomValue = Math.floor(Math.random() * 100)
            
        } else if (input < randomValue) {
            currentScore = currentScore - 1
            document.getElementById("score").innerHTML = currentScore;
            document.getElementById("result").innerHTML = "Value is too low to the actual value"
        } else if (input > randomValue) {
            currentScore = currentScore - 1
            document.getElementById("score").innerHTML = currentScore;
            document.getElementById("result").innerHTML = "Value is higher than the actual number"
        }
    }
}

function reset() {
    currentScore = 10
    document.getElementById("score").innerHTML = currentScore
    randomValue = Math.floor(Math.random() * 100)
}

function play(){
    document.getElementById("panel-success").style.display = "none"
    document.getElementById("panel").style.display = "block"
}