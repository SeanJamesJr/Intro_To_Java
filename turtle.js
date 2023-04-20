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

turtle.setSpeed(0.9)

turtle.setPosition(50,140)

turtle.setFillStyle("cyan")
turtle.beginPath()
for (let i=0; i < 4; i++) {
    console.log(i)
    turtle.forward(75)
    turtle.right(90)
    }
    turtle.closePath()
    turtle.fill('cyan')

turtle.setFillStyle("cyan")
turtle.beginPath()

turtle.forward(75)
turtle.right(45)
turtle.forward(55)
turtle.right(90)
turtle.forward(55)
turtle.right(135)
turtle.forward(75)
turtle.closePath()
turtle.fill()



turtle.setPosition(80,120)
turtle.beginPath()
turtle.right(270)
turtle.forward(20)
turtle.right(268)
turtle.forward(20)
turtle.right(270)
turtle.forward(20)
turtle.right(270)
turtle.forward(20)
turtle.closePath()

turtle.setPosition(50,75)
turtle.beginPath()
turtle.right(180)
turtle.forward(20)
turtle.right(180)
turtle.right(270)
turtle.forward(20)
turtle.right(90)
turtle.forward(20)
turtle.right(90)
turtle.forward(20)
turtle.closePath()
turtle.setPosition(125,75)

turtle.beginPath()
turtle.right(273)
turtle.forward(20)
turtle.right(270)
turtle.forward(20)
turtle.right(270)
turtle.forward(20)
turtle.right(270)
turtle.forward(20)
turtle.closePath()













    





