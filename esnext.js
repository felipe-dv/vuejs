// default parameter
function log(text = 'Node') {
    console.log(text)
}

log()


// rest operator
function total(...numbers) {
    let total = 0
    numbers.forEach(n => total += n)
    return total
}

console.log(total(2, 3, 4, 5))


// ES8: Object.values/Object.entries
const obj = { a: 1, b: 2, c: 3 }
console.log(Object.values(obj))
console.log(Object.entries(obj))


// Improvement in literal notation
const name = 'John'
const person = {
    name,
    hello() {
        return 'Hello people!'
    }
}

console.log(person.name, person.hello())


// Class
class Animal {}
class Dog extends Animal {
    talk() {
        return 'Au au!'
    }
}

console.log(new Dog().talk())


// rest ... operator(put together/spread)
// use rest with function parameter


// use spread with object
const employee = { name: 'Maria', salary: 12348.99 }
const clone = { active: true, ...employee }
console.log(clone)

// use spread with array
const groupA = ['John', 'Peter', 'Mary']
const finalGroup = ['Maria']