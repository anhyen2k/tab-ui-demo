

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

var filterCourses = courses.filter2(function(course, index, array) {
    return course.coin < 300;
})
console.log(filterCourses)
