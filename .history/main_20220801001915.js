courses = [
    {
        id: 1,
        name:'Javascript',
        coin: 7
    },
    {
        id: 2,
        name:'PHP',
        coin: 9
    },
    {
        id: 3,
        name:'Ruby',
        coin: 11
    },
    {
        id: 4,
        name:'React',
        coin: 12
    },
    {
        id: 5,
        name:'Python',
        coin: 12
    }
]
function courseHandler(course) {
    console.log(course)
}
var newCourses = courses.map(courseHandler);