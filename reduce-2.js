const students = [
    { name: 'John', grade: 7.3, sch_holder: false}, 
    { name: 'Mary', grade: 9.2, sch_holder: true}, 
    { name: 'Peter', grade: 9.8, sch_holder: false}, 
    { name: 'Annie', grade: 8.7, sch_holder: true} 
]

// Challenge 1: Are all students on scholarships?
const allsch_holder = (result, sch_holder) => result && sch_holder
console.log(students.map(s => s.sch_holder).reduce(allsch_holder))

// Challenge 2: Are any student on a scholarship?
const anysch_holder = (result, sch_holder) => result || sch_holder
console.log(students.map(s => s.sch_holder).reduce(anysch_holder))