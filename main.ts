let Distancia = 0
basic.forever(function () {
    Distancia = sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
    )
    basic.showNumber(Distancia)
    if (Distancia < 10) {
        basic.showIcon(IconNames.No)
        pins.digitalWritePin(DigitalPin.P0, 0)
    } else {
        basic.showIcon(IconNames.Heart)
        pins.digitalWritePin(DigitalPin.P0, 1)
    }
})
