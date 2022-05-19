input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
    soundExpression.happy.play()
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
	
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Sad)
    soundExpression.sad.play()
})
soundExpression.hello.playUntilDone()
basic.showString("Hallo!")
basic.pause(2000)
basic.clearScreen()
basic.forever(function () {
	
})
