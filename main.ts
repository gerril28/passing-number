function Counter () {
    for (let index = 0; index <= 2; index++) {
        basic.showNumber(3 - index)
    }
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
