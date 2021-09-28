function Car(maxSpeed = 200, delta = 5) {
    // private attribute
    let currentSpeed = 0

    // public method
    this.accelerate = function() {
        if(currentSpeed + delta <= maxSpeed) {
            currentSpeed += delta
        } else {
            currentSpeed = maxSpeed
        }
    }

    // public method
    this.getcurrentSpeed = function () {
        return currentSpeed
    }

}

const uno = new Car // Here could be "new Car()" but I didn't set others parameters, I only used the default parameters, so this "()"don't have any difference
uno.accelerate()
console.log(uno.getcurrentSpeed())

const ferrari = new Car(350, 20)
ferrari.accelerate()
ferrari.accelerate()
ferrari.accelerate()
console.log(ferrari.getcurrentSpeed())