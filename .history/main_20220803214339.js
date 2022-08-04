Array.prototype.filter2 = function(callback) {
    for ( var index in this) {
        if(this.hasOwnProperty(index)) {
            callback(this[index], index, this)
        }
    }
}

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
    // return course.coin < 300;
    console.log(course, index, array)
})
console.log(filterCourses)
