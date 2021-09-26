const grades = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

// No callback
const lowGrades1 = []
for (let i in grades) {
    if (grades[i] < 7) {
        lowGrades1.push(grades[i])
    }
}

console.log(lowGrades1)

// With callback

const lowGrades2 = grades.filter(function (grades) {
    return grades < 7
})

console.log(lowGrades2)

const lowGrades3 = grades.filter(grade => grade < 7)
console.log(lowGrades3)

/* Or:
const gradesLowerThan7 = grade => grade < 7
const lowGrades3 = grades.filter(gradesLowerThan7)
console.log(lowGrades3)
*/