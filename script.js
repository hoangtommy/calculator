//global variables
let display = document.querySelector('#display');
let storedOperator = '';
let storedNumber = '';
let storedNumber2 = '';
let answer = '';

//create add function
function add(...nums) {
	return nums.reduce((total, num) => {
		return total + num;
	});
}

//create subtract function
function subtract(...nums) {
	return nums.reduce((total, num) => {
		return total - num;
	});
}

//create product function
function multiply(...nums) {
	return nums.reduce((total, num) => {
		return total * num;
	});
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
	num1 = parseFloat(num1);
	num2 = parseFloat(num2);
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
}

//stores and displays number
let btns = document.querySelectorAll('.numbers');
btns.forEach(button => button.addEventListener('click', (e) => {
	display.innerHTML = '';
	if (storedOperator == '' && answer == '') {
		storedNumber += e.target.innerText;
		display.innerHTML = storedNumber;
	} else if (storedOperator != '' && answer == '') {
		storedNumber2 += e.target.innerText;
		display.innerHTML = storedNumber2;
	}
}));

//stores and displays operator
let opBtns = document.querySelectorAll('.ops');
opBtns.forEach(button => button.addEventListener('click', (e) => {
	display.innerHTML = '';
	if (storedNumber !== '' && storedNumber2 !== '') {
		storedNumber = operate(storedOperator, storedNumber, storedNumber2);
		storedOperator = '';
		storedNumber2 = '';
		display.innerHTML = storedNumber;
	}
	storedOperator = e.target.id;
	display.innerHTML = e.target.innerText;
}));

//clear display
let clearBtn = document.querySelector('.clear');
clearBtn.addEventListener('click', (e) => {
	display.innerHTML = '';
	storedNumber = '';
	storedNumber2 = '';
	storedOperator = '';
});

let equalsBtn = document.getElementById('equal');
equalsBtn.addEventListener('click', (e) => {
	storedNumber = operate(storedOperator, storedNumber, storedNumber2);
	storedOperator = '';
	storedNumber2 = '';
	display.innerHTML = storedNumber;
});