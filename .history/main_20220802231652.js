// var courses = [
//         'Ruby',
//         'Javascript',
//         'PHP'
// ]
Array.prototype.map2 = function(callback) {
    var output = [], arrayLength = this.length;
    for (var i = 0; i < arrayLength; ++i) {
        var result = callback(this[i], i);
        output.push(result);
    }
    return output;
}


const numbers = [1, 2, 3];

console.log(numbers.Map2(function (number) {
    return number * 2;
})) // Output: [2, 4, 6]