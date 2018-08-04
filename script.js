//global variables
let display = document.querySelector('#display');
let storedOperator = '';
let storedNumber = '';
let storedNumber2 = '';
let answer = '';

//takes two numbers and an operator. performs the math on the two numbers and displays answer
function operate(operator, num1, num2) {
	num1 = parseFloat(num1);
	num2 = parseFloat(num2);
	if (typeof operator === 'string') {
		switch (operator) {
			case 'add':
			return num1 + num2;
			case 'subtract':
			return num1 - num2;
			case 'multiply':
			return num1 * num2;
			case 'divide':
			if (num2 === 0) {
				return 'infinity: you divided by zero'
			} else {
				return num1 / num2;
			}
		}
	}
}

function displayScreen(string) {
	display.innerHTML = string;
}

//stores and displays number
let btns = document.querySelectorAll('.nums');
btns.forEach(button => button.addEventListener('click', (e) => {
	displayScreen('');
	if (storedOperator == '' && answer == '') {
		storedNumber += e.target.innerText;
		displayScreen(storedNumber);
	} else if (storedOperator != '' && answer == '') {
		storedNumber2 += e.target.innerText;
		displayScreen(storedNumber2);
	}
}));

//stores and displays operator
let opBtns = document.querySelectorAll('.ops');
opBtns.forEach(button => button.addEventListener('click', (e) => {
	if (storedNumber !== '' && storedNumber2 !== '') {
		storedNumber = operate(storedOperator, storedNumber, storedNumber2);
		storedOperator = '';
		storedNumber2 = '';
		displayScreen(storedNumber);
	} else {
		storedOperator = e.target.id;
		
	}
}));

//clear display
let clearBtn = document.querySelector('.clear');
clearBtn.addEventListener('click', (e) => {
	displayScreen('');
	storedNumber = '';
	storedNumber2 = '';
	storedOperator = '';
});

let equalsBtn = document.getElementById('equal');
equalsBtn.addEventListener('click', (e) => {
	if (storedNumber2 == '' || storedOperator == '') {
		return;
	}
	storedNumber = operate(storedOperator, storedNumber, storedNumber2);
	storedOperator = '';
	storedNumber2 = '';
	displayScreen(storedNumber);
});