let milliseconds = 0
let seconds = 0
let minutes = 0


let digits = document.getElementById('digits')

function start() {

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

    function stop (){
        clearInterval(interval)
        }

function reset(){

    alert("You clicked the restart button")
}