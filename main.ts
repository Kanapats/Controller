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
huskylens.initI2c()
huskylens.initMode(protocolAlgorithm.ALGORITHM_OBJECT_TRACKING)
basic.forever(function () {
    huskylens.request()
    if (huskylens.isAppear(1, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        basic.showIcon(IconNames.SmallSquare)
    }
    if (huskylens.readeBox(1, Content1.xCenter) > 190) {
        currentX += 3
        PTKidsBIT.servoWrite2(Servo_Write2.S0, Math.constrain(currentX, 5, 175))
    } else if (huskylens.readeBox(1, Content1.xCenter) > 10) {
        currentX += -3
        PTKidsBIT.servoWrite2(Servo_Write2.S0, Math.constrain(currentX, 5, 175))
    }
    if (huskylens.readeBox(1, Content1.yCenter) > 150) {
        currentY += -3
        PTKidsBIT.servoWrite2(Servo_Write2.S1, Math.constrain(currentY, 35, 170))
    } else if (huskylens.readeBox(1, Content1.yCenter) > 10) {
        currentY += 3
        PTKidsBIT.servoWrite2(Servo_Write2.S1, Math.constrain(currentY, 35, 170))
    }
})
