var courses = [
        'Ruby',
        'Javascript',
        'PHP'
]
Array.prototype.map2 = function(callback) {
    var arrayLength = this.length;
    for (var i = 0; i < arrayLength; ++i) {
        callback(this[i], i);
    }
}
courses.map2(function(course, index) {
    console.log(index, course)
});