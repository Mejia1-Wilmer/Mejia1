led.plot(0, 0)
music.playMelody("- C5 B A G F E D ", 120)
basic.forever(function () {
    basic.showLeds(`
        . # . # .
        # . # . #
        # . . . #
        . # . # .
        . . # . .
        `)
})
