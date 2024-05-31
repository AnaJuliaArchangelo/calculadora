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
    // Utilize Function constructor para avaliar a expressão de forma mais segura que eval
    currentOperation = new Function('return ' + currentOperation)();
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

// Adicionei exemplos de código HTML para melhor entendimento:

// HTML:
// <div id="previous-operation"></div>
// <div id="current-operation"></div>
// <button onclick="appendNumber('1')">1</button>
// <button onclick="appendOperator('+')">+</button>
// <button onclick="appendOperator('-')">-</button>
// <button onclick="appendOperator('*')">*</button>
// <button onclick="appendOperator('/')">/</button>
// <button onclick="appendDecimal()">.</button>
// <button onclick="calculate()">=</button>
// <button onclick="clearEntry()">CE</button>
// <button onclick="clearAll()">C</button>
