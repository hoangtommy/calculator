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
function operate(operator, num1, num2) {
	return operator(num1, num2);
}

//global variables
let display = document.querySelector('#display');
let storedNumber = 0;
let storedOperator;

//display number 
function displayNumbers() {
	let btns = document.querySelectorAll('.numbers');
	btns.forEach(button => button.addEventListener('click', (e) => {
		storedNumber = e.target.innerText;
		display.innerHTML += storedNumber;
	}));
	return storedNumber;
}

//display operator
function displayOperator() {
	let opBtns = document.querySelectorAll('.operators');
	opBtns.forEach(button => button.addEventListener('click', (e) => {
		storedOperator = e.target.innerText;
		display.innerHTML += storedOperator;
	}));
}

displayNumbers();
displayOperator();
