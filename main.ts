radio.onReceivedValue(function (name, value) {
    if (name == "x") {
        // von -1023 bis 1023
        // zu
        // -100 bis 100
        l_r = Math.round(value / 11)
    }
    if (name == "y") {
        // von -1023 bis 1023
        // zu
        // -100 bis 100
        speed = Math.round(value / 11)
    }
    if (l_r < -20) {
        calliBot2.motor(C2Motor.rechts, C2Dir.vorwärts, -1 * l_r)
        calliBot2.motor(C2Motor.links, C2Dir.vorwärts, -0.25 * l_r)
    } else if (l_r > 20) {
        calliBot2.motor(C2Motor.links, C2Dir.vorwärts, l_r)
        calliBot2.motor(C2Motor.rechts, C2Dir.vorwärts, 0.25 * l_r)
    } else {
        if (speed < -20) {
            calliBot2.motor(C2Motor.beide, C2Dir.vorwärts, -1 * speed)
        } else if (speed > 20) {
            calliBot2.motor(C2Motor.beide, C2Dir.rückwärts, speed)
        } else {
            calliBot2.motorStop(C2Motor.beide, C2Stop.Frei)
        }
    }
})
let speed = 0
let l_r = 0
music.playTone(131, music.beat(BeatFraction.Sixteenth))
radio.setGroup(13)
