//create add function
function add(...nums) {
	let result = nums.reduce((total, num) => {
		return total + num;
	});
	return result;
}

//create subtract function
function subtract(...nums) {
	let result = nums.reduce((total, num) => {
		return total - num;
	});
	return result;
}

//create product function
function multiply(...nums) {
	let result = nums.reduce((total, num) => {
		return total * num;
	});
	return result;
}

//create divid
function divide(...nums) {
	let result = nums.reduce((total, num) => {
		return total / num;
	});
	if (result === Infinity) {
		display.innerHTML = 'you can\'t divide by zero';
	}
	return result;
}

//takes two numbers and an operator. performs the math on the two numbers and displays answer
function operate(operator, num1, num2) {
	if (typeof operator === 'string') {
		switch (operator) {
			case 'add':
			return add(num1, num2);
			case 'subtract':
			return subtract(num1, num2);
			case 'multiply':
			return multiply(num1, num2);
			case 'divide':
			return divide(num1, num2);
		}
	}
	return display.innerHTML = operator(num1, num2);
}

//global variables
let display = document.querySelector('#display');
let storedOperator;
let storedNumber = '';
let storedNumber2 = '';

//display number
let btns = document.querySelectorAll('.numbers');
btns.forEach(button => button.addEventListener('click', (e) => {
	display.innerHTML = '';
	display.innerHTML += e.target.innerText;
	getNumber();
}));

//store numbers and return 
function getNumber() {
	if (storedNumber !== '') {
		return storedNumber2 = Number(display.innerHTML);
	}
	return storedNumber = Number(display.innerHTML);
}

//display and store operator
let opBtns = document.querySelectorAll('.ops');
opBtns.forEach(button => button.addEventListener('click', (e) => {
	display.innerHTML = '';
	storedOperator = e.target.id;
	display.innerHTML += e.target.innerText;
	getOperator();
}));

//clear display
let clearBtn = document.querySelector('.clear');
clearBtn.addEventListener('click', (e) => {
	display.innerHTML = '';
	storedNumber = '';
	storedNumber2 = '';
	storedOperator = '';
});

//display and store operator
function getOperator() {
	return storedOperator;
}

let equalsBtn = document.getElementById('equal');
equalsBtn.addEventListener('click', (e) => {
	display.innerHTML = operate(storedOperator, storedNumber, storedNumber2);
});