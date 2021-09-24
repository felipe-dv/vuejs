// Function on JS is a First-Class Object (Citizens)
// Higher-order function

// Create in literal form 
function fun1() { }

// Store in a variable
const fun2 = function() { }

// Store in a array
const array = [function (a, b) { return a + b }, fun1, fun2]
console.log(array[0](2, 3))

// Store to an object attribute
const obj = {}
obj.talk = function () { return 'Hi!'}
console.log(obj.talk())

// Pass function as parameter
function run(fun) {
    fun()
}

run(function () {console.log('Running...')})

// A function can return/contain a function
function sum(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

sum(2, 3)(4)
const fivePlus = sum(2,3)
fivePlus(4)