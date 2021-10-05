input.onGesture(Gesture.Shake, function () {
    [
    images.createImage(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `),
    images.createImage(`
        . . . . .
        . # . . .
        . . . . .
        . . . # .
        . . . . .
        `),
    images.createImage(`
        . . . . .
        . # . . .
        . . # . .
        . . . # .
        . . . . .
        `),
    images.createImage(`
        . . . . .
        . # . # .
        . . . . .
        . # . # .
        . . . . .
        `),
    images.createImage(`
        . . . . .
        . # . # .
        . . # . .
        . # . # .
        . . . . .
        `),
    images.createImage(`
        . . . . .
        # # . # #
        # # . # #
        . # # # .
        # . . . #
        `)
    ]._pickRandom().showImage(0)
})
