let 結束時間 = 0
input.setAccelerometerRange(AcceleratorRange.EightG)
let 搖晃分數 = 0
let 加分上限 = 27
let 關卡 = 0
let 開始時間 = input.runningTime()
basic.forever(function () {
    搖晃分數 += Math.map(Math.constrain(input.acceleration(Dimension.Strength), 1000, 12000), 0, 12000, 0, 加分上限)
    搖晃分數 += -5
    if (搖晃分數 < 0) {
        搖晃分數 = 0
    } else if (搖晃分數 >= 150) {
        關卡 += 1
        if (關卡 == 5) {
            結束時間 = input.runningTime()
            while (true) {
                basic.showString("TIME:")
                basic.showNumber((結束時間 - 開始時間) / 1000)
            }
        }
        搖晃分數 = 0
        加分上限 += -3
    }
    led.plotBarGraph(
    搖晃分數,
    150
    )
})
