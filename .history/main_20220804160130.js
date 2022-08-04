Array.prototype.some2 = function(callback) {
    for (var index in this) {
        if(this.hasOwnProperty(index)) {
            if (callback(this[index], index, this)){
                return true
            }
        }
    }
    return false
}

var courses = [
        {
            name: 'PHP',
            coin: 100,
            isFinish: false
        },
        {
            name: 'JS',
            coin: 300,
            isFinish: false
        },
        {
            name: 'Ruby',
            coin: 450,
            isFinish: false
        }
]

var result = courses.every(function(course, index, array) {
    return course.isFinish;
})
console.log(result)
