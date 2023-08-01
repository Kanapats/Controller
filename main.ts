let yaxis = 0
let xaxis = 0
let value: string[] = []
let msg = ""
let currentX = 98
let currentY = 45
PTKidsBIT.servoWrite2(Servo_Write2.S0, currentX)
basic.pause(700)
PTKidsBIT.servoWrite2(Servo_Write2.S1, currentY)
basic.pause(700)
PTKidsBIT.servoWrite2(Servo_Write2.S2, 54)
basic.pause(700)
PTKidsBIT.servoWrite2(Servo_Write2.S3, 80)
basic.pause(700)
PTKidsBIT.servoWrite2(Servo_Write2.S4, 80)
basic.pause(700)
basic.showIcon(IconNames.Yes)
basic.pause(500)
basic.showIcon(IconNames.SmallSquare)
basic.forever(function () {
    msg = serial.readLine()
    value = msg.split(",")
    xaxis = parseFloat(value[0])
    yaxis = parseFloat(value[1])
    if (xaxis > 370) {
        currentX += 1
        PTKidsBIT.servoWrite2(Servo_Write2.S0, Math.constrain(currentX, 5, 175))
    } else if (xaxis < 270) {
        currentX += -1
        PTKidsBIT.servoWrite2(Servo_Write2.S0, Math.constrain(currentX, 5, 175))
    }
    if (yaxis > 290) {
        currentY += 1
        PTKidsBIT.servoWrite2(Servo_Write2.S1, Math.constrain(currentY, 35, 170))
    } else if (yaxis < 190) {
        currentY += -1
        PTKidsBIT.servoWrite2(Servo_Write2.S1, Math.constrain(currentY, 35, 170))
    }
})
