let myForm = document.getElementById("myForm")

let synth = new Tone.Synth().toDestination()

function onSubmit (e) {
    e.preventDefault()
    
    alert(myForm.elements["Yourname"].value)

    synth.triggerAttack(myForm.elements["Yourname"].value)

 let duration = parseFloat(myForm.elements["duration"].value)
 synth.triggerRelease(Tone.now() + duration)

}


myForm.addEventListener("submit", onSubmit)