radio.onReceivedValue(function (name, value) {
    if (name == "x") {
        x = value
    }
    if (name == "y") {
        y = value
    }
    basic.showNumber(x)
    basic.showNumber(y)
})
let y = 0
let x = 0
radio.setGroup(13)
