let milliseconds = 0
let seconds = 0
let minutes = 0


let digits = document.getElementById('digits')

let startButton = document.getElementById('start-btn')

let interval;



function start() {
    startButton.disabled = true

    interval=setInterval ( function() {
        milliseconds = milliseconds + 10
    
    if (milliseconds >= 1000) {
        seconds = seconds + 1
        milliseconds = 0
    }
    
    if (seconds>= 60) {
        minutes = minutes + 1
        seconds = 0
    }
    digits.innerHTML= minutes + ':' + String(seconds).padStart(2,'0') + ':' + milliseconds
    console.log(minutes)
    console.log(seconds)
    console.log(milliseconds)
    },10)

}

function stop () {
startButton.disabled = false
    clearInterval(interval)
}
        

function reset() {
    stop()

 milliseconds = 0
 seconds = 0
 minutes = 0
 digits.innerHTML= String(minutes).padStart(2,'0') + ':' + String(seconds).padStart(2,'0') + ':' + String(milliseconds).padStart(2,'0')
document.getElementById("laps").innerHTML = ''

}

function laps(){
const mode = document.createElement("li")
mode.innerHTML =  digits.innerHTML= String(minutes).padStart(2,'0') + ':' + String(seconds).padStart(2,'0') + ':' + String(milliseconds).padStart(2,'0')
document.getElementById("laps").appendChild(mode)

}


