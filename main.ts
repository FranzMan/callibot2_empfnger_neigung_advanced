radio.onReceivedValue(function (name, value) {
    if (name == "x") {
        l_r = value
    }
    if (name == "y") {
        speed = value
    }
    // von -1023 bis 1023
    // zu
    // -100 bis 100
    l_r = Math.round(l_r / 11)
    // von -1023 bis 1023
    // zu
    // -100 bis 100
    speed = Math.round(speed / 11)
    if (l_r < -10) {
        basic.showIcon(IconNames.ArrowEast)
        calliBot2.motor(C2Motor.rechts, C2Dir.vorwärts, -1 * l_r)
        calliBot2.motor(C2Motor.links, C2Dir.vorwärts, -0.25 * l_r)
    } else if (l_r > 10) {
        basic.showIcon(IconNames.ArrowWest)
        calliBot2.motor(C2Motor.links, C2Dir.vorwärts, l_r)
        calliBot2.motor(C2Motor.rechts, C2Dir.vorwärts, 0.25 * l_r)
    } else {
        if (speed < -10) {
            basic.showIcon(IconNames.ArrowSouth)
            calliBot2.motor(C2Motor.beide, C2Dir.vorwärts, -1 * speed)
        } else if (speed > 10) {
            basic.showIcon(IconNames.ArrowNorth)
            calliBot2.motor(C2Motor.beide, C2Dir.rückwärts, speed)
        } else {
            basic.showIcon(IconNames.No)
            calliBot2.motorStop(C2Motor.beide, C2Stop.Frei)
        }
    }
})
let speed = 0
let l_r = 0
music.playTone(131, music.beat(BeatFraction.Sixteenth))
radio.setGroup(13)
