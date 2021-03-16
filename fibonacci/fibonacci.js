export const fibonacci = function(index) {

    if (index < 0) {
        return "OOPS"
    }
    else if (index == 1) {
        return 1
    }
    else if (index < 2) {
        return index
    }
    else {
        return fibonacci(index - 1) + fibonacci(index - 2)
    }
}

//module.exports = fibonacci
