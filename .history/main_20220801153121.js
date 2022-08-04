var courses = [
        'Ruby',
        'Javascript',
        'PHP'
]
Array.prototype.map2 = function(callback) {
    var arrayLength =this.length;
    for (var i = 0;i < arrayLength; ++i) {
        callback();
    }
}
courses.map2();