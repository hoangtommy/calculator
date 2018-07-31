//create add function
function add(...arguments) {
	let result = arguments.reduce((total, num) => {
		return total + num;
	});
	return result;
}

//create subtract function
function subtract(...arguments) {
	let result = arguments.reduce((total, num) => {
		return total - num;
	});
	return result;
}

//create product function
function multiply(...arguments) {
	let result = arguments.reduce((total, num) => {
		return total * num;
	});
	return result;
}

//create divid
function divide(...arguments) {
	let result = arguments.reduce((total, num) => {
		return total / num;
	});
	return result;
}

//function that takes two numbers and an operator. performs the math on the two numbers
function calculate(operator, num1, num2) {
	return operator(num1, num2);
}

