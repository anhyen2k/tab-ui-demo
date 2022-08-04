var courses = [
        {
            name: 'PHP',
            coin: 100
        },
        {
            name: 'JS',
            coin: 300
        },
        {
            name: 'Ruby',
            coin: 450
        }
]

var filterCourses = courses.filter(function(course, index, array) {
    return course.coin < 300;
})
console.log(filterCourses)
