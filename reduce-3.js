Array.prototype.reduce2 = function(callback, initVal) {
    const initIndex = initVal ? 0 : 1
    let accumulator = initVal || this[0]
    for (let i = initIndex; i < this.length; i++) {
        accumulator = callback(accumulator, this[i], i, this)
    }
    return accumulator
}

const sum = (total, value) => total + value
const nums = [1, 2, 3, 4, 5, 6]
console.log(nums.reduce2(sum, 21))