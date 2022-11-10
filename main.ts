let y = 0
let x = 0
let dx = 1
basic.forever(function () {
    basic.clearScreen()
    y = 0
    if (x >= 4) {
        dx = -1
    }
    if (x <= 0) {
        dx = 1
    }
    x += dx
    for (let index = 0; index < 5; index++) {
        led.plotBrightness(x - 2, y - 1, 30)
        led.plotBrightness(x + 1, y + 2, 60)
        led.plot(x, y)
        y += 1
    }
    basic.pause(100)
})
