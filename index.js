// Your code here
function mapToNegativize(arr){
    return arr.map(function(ele) {
        return ele === 0 ? ele : ele * -1
    })
}

function mapToNoChange(arr) {
    return arr.map(ele => ele)
}

function mapToDouble(arr) {
    return arr.map(ele => ele * 2)
}

function mapToSquare(arr) {
    return arr.map(ele => ele**2)
}

function reduceToTotal(arr, intVal=0) {
    return arr.reduce(function(accm,ele){
        return accm + ele
    },intVal)
}

function reduceToAllTrue(arr) {
    return !arr.map(ele => !!ele).includes(false)
}

function reduceToAnyTrue(arr) {
    return arr.map(ele => !!ele).includes(true)
}
