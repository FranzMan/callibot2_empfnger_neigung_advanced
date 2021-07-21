radio.onReceivedValue(function (name, value) {
    if (name == "x") {
        l_r = value
    }
    if (name == "y") {
        speed = value
    }
    l_r = Math.round(pins.map(
    l_r,
    -1023,
    1023,
    -100,
    100
    ))
    speed = Math.round(pins.map(
    speed,
    -1023,
    1023,
    -100,
    100
    ))
    if (l_r < -60) {
        calliBot2.motor(C2Motor.rechts, C2Dir.vorwärts, 50)
        calliBot2.motor(C2Motor.links, C2Dir.vorwärts, 0)
        basic.showLeds(`
            . . . . #
            . . . . #
            . . . . #
            . . . . #
            . . . . #
            `)
    } else if (l_r < -20) {
        calliBot2.motor(C2Motor.rechts, C2Dir.vorwärts, 50)
        calliBot2.motor(C2Motor.links, C2Dir.vorwärts, 25)
        basic.showLeds(`
            . . . # .
            . . . # .
            . . . # .
            . . . # .
            . . . # .
            `)
    } else if (l_r < 20) {
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            `)
        calliBot2.motor(C2Motor.beide, C2Dir.vorwärts, 50)
    } else if (l_r < 60) {
        calliBot2.motor(C2Motor.links, C2Dir.vorwärts, 50)
        calliBot2.motor(C2Motor.rechts, C2Dir.vorwärts, 25)
        basic.showLeds(`
            . # . . .
            . # . . .
            . # . . .
            . # . . .
            . # . . .
            `)
    } else {
        calliBot2.motor(C2Motor.links, C2Dir.vorwärts, 50)
        calliBot2.motor(C2Motor.rechts, C2Dir.vorwärts, 0)
        basic.showLeds(`
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            `)
    }
})
let speed = 0
let l_r = 0
music.playTone(131, music.beat(BeatFraction.Whole))
radio.setGroup(13)
