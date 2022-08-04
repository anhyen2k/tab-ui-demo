Array.prototype.every2 = function(callback) {
    var output = true;
    
    for (var index in this) {
        if(this.hasOwnProperty(index)) {
            var result = callback(this[index], index, this) 
                if(!result) {
                    output = false;
                    break;
                }
            }
            return output;
        }
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
            isFinish: true
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
