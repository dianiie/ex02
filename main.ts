let Num = 10000
let SUM = 0
basic.pause(5000)
basic.forever(function () {
    serial.writeNumber(Num)
    Num += -10
    serial.writeString(",")
    serial.writeLine("")
    basic.pause(100)
})
