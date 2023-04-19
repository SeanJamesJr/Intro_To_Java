let aquarium = document.getElementById("aquarium")


let turtle = new RealTurtle.default(aquarium,{autoStart: true})

turtle.setStrokeColorRGB(0,0,255)
turtle.setFillStyle('blue')


//turtle.beginPath()

//turtle.arc(20,360)

//turtle.closePath()
//turtle.fill()

//turtle.setPosition(20,150)

//for (let i=0; i < 4; i++) {
//console.log(i)
//turtle.forward(50)
//turtle.right(90)
//}

turtle.setPosition(50,140)

turtle.beginPath()
for (let i=0; i < 4; i++) {
    console.log(i)
    turtle.forward(75)
    turtle.right(90)
    }
    turtle.closePath()

turtle.beginPath()

turtle.forward(75)
turtle.right(45)
turtle.forward(55)
turtle.right(90)
turtle.forward(55)
turtle.right(135)
turtle.forward(75)

turtle.closePath()

turtle.beginPath()
turtle.right(278)
turtle.forward()





    





