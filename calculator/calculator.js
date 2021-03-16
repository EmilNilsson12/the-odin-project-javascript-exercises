function add (num1, num2) {
	return num1 + num2
}

function subtract (num1, num2) {
	return num1 - num2
}

function sum (arr) {
	if (arr.length > 0) {
		return arr.reduce((accumulator, value) => {
			return accumulator + value
		})
	}
	else {
		return 0
	}
}

function multiply (arr) {
	return arr.reduce((accumulator, value) => {
		return accumulator * value
	})
}

function power(base, exponent) {
	return Math.pow(base, exponent)
}

function factorial(num) {
	if (num == 0) {
		return 1
	}
	else {
		return num * factorial(num - 1)
	}
}

export { 
	add
	,subtract
	,sum
	,multiply
	,power
	,factorial };

/* module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
} */