function circularArrayRotation(a, k, queries) {
    for (var i = 0; i < k; i++) {
        var popedValue = 0
        popedValue = a.pop()
        a.unshift(popedValue)
    }

    var result = []
    for (let j of queries) {
        result.push(a[j])
    }

    return result
}

var a = [1, 2, 3]
var k = 2
var queries = [0, 1, 2]
console.log(circularArrayRotation(a, k, queries))