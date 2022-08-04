Array.prototype.some2 = function(callback) {
    for (var index in this) {
        if(this.hasOwnProperty(index)) {
            if(callback(this[index], index, this)){
                return true
            }
        }
    }
}

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

var result = courses.some2(function(course, index, array) {
    return course.isFinish;
})
console.log(result)
