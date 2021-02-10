// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!Array.isArray(matrix) || matrix.length === 0) return ([])
    let result = []
    matrix.forEach((arr, index) => {
        if (index % 2 !== 0) {
            result = result.concat(arr.reverse())
        } else {
            result = result.concat(arr)
        }
    })
    return result
}
