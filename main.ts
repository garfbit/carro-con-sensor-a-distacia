let Distancia = 0
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    pins.digitalWritePin(DigitalPin.P0, 1)
    Distancia = sonar.ping(
    DigitalPin.P0,
    DigitalPin.P1,
    PingUnit.Centimeters
    )
    basic.showNumber(Distancia)
    basic.pause(1000)
    if (Distancia < 10) {
        basic.showIcon(IconNames.Heart)
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
})
