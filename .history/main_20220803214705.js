Array.prototype.filter2 = function(callback) {
    var output = [];
    for ( var index in this) {
        if(this.hasOwnProperty(index)) {
            var result = callback(this[index], index, this)
            if(result) {
                output.push(this[index]);
            }
        }
    }
    return output;
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
    return course.coin < 300;
})
console.log(filterCourses)
