let screen_text = document.getElementById('screen-text');
let num_operation = document.getElementById('num-operation');
let numbers = '';
let operation = [];

screen_text.textContent = '0';

function one() {
  numbers += '1';
  display_operation();
  num_operation.textContent += numbers;
  evalu();
}

function two() {
  numbers += '2';
  display_operation();
  num_operation.textContent += numbers;
  evalu();
}

function three() {
  numbers += '3';
  display_operation();
  num_operation.textContent += numbers;
  evalu();
}

function four() {
  numbers += '4';
  display_operation();
  num_operation.textContent += numbers;
  evalu();
}
function five() {
  numbers += '5';
  display_operation();
  num_operation.textContent += numbers;
  evalu();
}

function six() {
  numbers += '6';
  display_operation();
  num_operation.textContent += numbers;
  evalu();
}
function seven() {
  numbers += '7';
  display_operation();
  num_operation.textContent += numbers;
  evalu();
}

function eight() {
  numbers += '8';
  display_operation();
  num_operation.textContent += numbers;
  evalu();
}
function nine() {
  numbers += '9';
  display_operation();
  num_operation.textContent += numbers;
  evalu();
}

function zero() {
  numbers += '0';
  display_operation();
  num_operation.textContent += numbers;
  evalu();
}

function point() {
  if (!numbers.includes('.')) {
    numbers += '.';
  }
  display_operation();
  num_operation.textContent += numbers;
}

function remove() {
  if (numbers != 0) {
    numbers = '';
  } else {
    operation.pop();
  }

  num_operation.textContent = '';
  for (const i of operation) {
    num_operation.textContent += i;
  }
  evalu();
}

function reset2() {
  operation.length = 0;
  numbers = '';
  screen_text.textContent = 0;
  num_operation.textContent = '';
}

function check_operation(operator) {
  if (numbers != '') {
    operation.push(numbers);
  }
  if (isNaN(operation[operation.length - 1])) {
    operation[operation.length - 1] = operator;
  } else {
    operation.push(operator);
  }
}

function add() {
  check_operation('+');
  display_operation();
  numbers = '';
}

function sub() {
  check_operation('-');
  display_operation();
  numbers = '';
}

function mul() {
  check_operation('*');
  display_operation();
  numbers = '';
}

function div() {
  check_operation('/');
  display_operation();
  numbers = '';
}

function evalu() {
  operation.push(numbers);

  for (let i = 0; i < operation.length; i += 2) {
    if (i == 0) {
      val_num = Number(operation[i]);
    } else if (operation[i - 1] == '+') {
      val_num += Number(operation[i]);
    } else if (operation[i - 1] == '*') {
      val_num *= Number(operation[i]);
    } else if (operation[i - 1] == '-') {
      val_num -= Number(operation[i]);
    } else if (operation[i - 1] == '/') {
      val_num /= Number(operation[i]);
    }
  }
  if (val_num == Infinity) {
    val_num = 0;
  }
  operation.pop();
  screen_text.textContent = val_num;
}

function display_operation() {
  screen_text.textContent = 0;
  num_operation.textContent = '';
  for (const i of operation) {
    num_operation.textContent += i;
  }
}
