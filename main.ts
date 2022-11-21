function Counter () {
    for (let index = 0; index <= 2; index++) {
        music.playTone(262, music.beat(BeatFraction.Quarter))
        basic.showNumber(3 - index)
    }
    music.playTone(392, music.beat(BeatFraction.Whole))
    basic.showString("GO !")
}
input.onButtonPressed(Button.A, function () {
    counter += -1
    basic.showNumber(counter)
})
input.onButtonPressed(Button.AB, function () {
    Counter()
})
input.onButtonPressed(Button.B, function () {
    counter += 2
    basic.showNumber(counter)
})
let counter = 0
counter = 0
basic.showNumber(counter)
