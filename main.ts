radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        calliBot2.motorStop(C2Motor.beide, C2Stop.Bremsen)
        basic.showIcon(IconNames.No)
    }
    if (receivedNumber == 1) {
        calliBot2.motor(C2Motor.beide, C2Dir.vorw&#228;rts, 50)
        basic.showIcon(IconNames.ArrowSouth)
    }
    if (receivedNumber == 2) {
        calliBot2.motor(C2Motor.beide, C2Dir.r&#252;ckw&#228;rts, 50)
        basic.showIcon(IconNames.ArrowNorth)
    }
    if (receivedNumber == 3) {
        calliBot2.motor(C2Motor.rechts, C2Dir.vorw&#228;rts, 50)
        calliBot2.motorStop(C2Motor.links, C2Stop.Bremsen)
        basic.showString("L")
    }
    if (receivedNumber == 4) {
        calliBot2.motor(C2Motor.links, C2Dir.vorw&#228;rts, 50)
        calliBot2.motorStop(C2Motor.rechts, C2Stop.Bremsen)
        basic.showString("R")
    }
})
radio.setGroup(13)
