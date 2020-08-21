function doSomething3 () {
    led.plot(0, 2)
    led.plot(1, 2)
    led.plot(2, 2)
    led.plot(3, 2)
    led.plot(4, 2)
}
function doSomething () {
    led.plot(0, 0)
    led.plot(1, 0)
    led.plot(2, 0)
    led.plot(3, 0)
    led.plot(4, 0)
}
function doSomething5 () {
    led.plot(0, 4)
    led.plot(1, 4)
    led.plot(2, 4)
    led.plot(3, 4)
    led.plot(4, 4)
}
function doSomething2 () {
    led.plot(0, 1)
    led.plot(1, 1)
    led.plot(2, 1)
    led.plot(3, 1)
    led.plot(4, 1)
}
function doSomething4 () {
    led.plot(0, 3)
    led.plot(1, 3)
    led.plot(2, 3)
    led.plot(3, 3)
    led.plot(4, 3)
}
doSomething()
basic.pause(100)
doSomething2()
basic.pause(200)
doSomething3()
basic.pause(500)
doSomething4()
basic.pause(1000)
doSomething5()
basic.forever(function () {
	
})
