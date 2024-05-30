let currentOperation = '';
let previousOperation = '';

function appendNumber(number) {
  currentOperation += number;
  updateDisplay();
}

function appendOperator(operator) {
  if (currentOperation !== '') {
    currentOperation += ' ' + operator + ' ';
    updateDisplay();
  }
}

function appendDecimal() {
  if (!currentOperation.includes('.')) {
    currentOperation += '.';
    updateDisplay();
  }
}

function calculate() {
  previousOperation = currentOperation;
  try {
    currentOperation = eval(currentOperation);
  } catch (error) {
    currentOperation = 'Error';
  }
  updateDisplay();
}

function clearEntry() {
  currentOperation = '';
  updateDisplay();
}

function clearAll() {
  currentOperation = '';
  previousOperation = '';
  updateDisplay();
}

function updateDisplay() {
  document.getElementById('previous-operation').textContent = previousOperation;
  document.getElementById('current-operation').textContent = currentOperation;
}