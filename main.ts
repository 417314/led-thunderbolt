let y = 0
let z = 0
let bright = 0
let x = 2
let dx = 1
basic.forever(function () {
    bright = 255
    z = 0
    y = 0
    basic.clearScreen()
    if (x >= 4) {
        dx = -1
    }
    if (x <= 0) {
        dx = 1
    }
    x += dx
    for (let index = 0; index < 5; index++) {
        let index = 0
        led.plotBrightness(x - dx * index, y, bright + 20)
        bright += -50
    }
    basic.pause(100)
})
