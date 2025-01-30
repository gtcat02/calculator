const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const resultElement = document.querySelector('.answer__item');
const plusBtn = document.getElementById('plus');
const minusBtn = document.getElementById('minus');
const submitBtn = document.getElementById('submit');

// console.log(typeof sum);
let action = '+';

plusBtn.onclick = function () {
  action = '+'
}

minusBtn.onclick = function () {
  action = '-';
}

function printResult(result) {
  if (result > 0) {
    resultElement.style.color = 'greenyellow'; 
  } else {
    resultElement.style.color = 'red';
  }
  resultElement.textContent = result;
}

function computeNumbersWithAction(inp1, inp2, actionSymbol) {
  const num1 = Number(inp1.value);
  const num2 = Number(inp2.value);

  return actionSymbol == '+' ? num1 + num2 : num1 - num2;
  // if (actionSymbol == '+') {
  //   return num1 + num2;
  // }
  // else if (actionSymbol == '-') {
  //   return num1 - num2;
  // }
}

submitBtn.onclick = function () {
  const resultNumber = computeNumbersWithAction(input1, input2, action);
  printResult(resultNumber);
}