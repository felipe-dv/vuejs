const students = [
    { name: 'John', grade: 7.3, sch_holder: false}, 
    { name: 'Mary', grade: 9.2, sch_holder: true}, 
    { name: 'Peter', grade: 9.8, sch_holder: false}, 
    { name: 'Annie', grade: 8.7, sch_holder: true} 
]

console.log(students.map(s => s.grade))
const result = students.map(s => s.grade).reduce(function(accumulator, current) {
    console.log(accumulator, current)
    return accumulator + current
}/* If an initial value is desired, it can be entered here. Ex: ,10 */)

console.log(result)