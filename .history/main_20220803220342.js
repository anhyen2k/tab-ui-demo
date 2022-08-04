

var courses = [
        {
            name: 'PHP',
            coin: 100,
            isFinish: true
        },
        {
            name: 'JS',
            coin: 300,
            isFinish: false
        },
        {
            name: 'Ruby',
            coin: 450,
            isFinish: true
        }
]

var result = courses.some(function(course, index, array) {
    return course.isFinish;
})
console.log(result)
