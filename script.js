const firstNumberInput = document.getElementById('firstNumber')
const secondNumberInput = document.getElementById('secondNumber')
const operatorSelectInput = document.getElementById('operator')
const calculateButton = document.getElementById('calculate')
const resultParagraph = document.getElementById('result')

function calculate() {
  const firstNumber = parseFloat(firstNumberInput.value)
  const secondNumber = parseFloat(secondNumberInput.value)
  const operator = operatorSelectInput.value
  let result

  animate(false)

  if (isNaN(firstNumber) || isNaN(secondNumber)) {
    resultParagraph.textContent = 'Please enter a valid number'
    animate(true)
    return
  }

  switch (operator) {
    case '+':
      result = firstNumber + secondNumber
      break
    case '-':
      result = firstNumber - secondNumber
      break
    case '*':
      result = firstNumber * secondNumber
      break
    case '/':
      if (secondNumber === 0) {
        resultParagraph.textContent = 'Division by zero is not allowed'
        animate(true)
        return
      }
      result = firstNumber / secondNumber
      break
    case '%':
      result = firstNumber % secondNumber
      break
    case '**':
      result = firstNumber ** secondNumber
      break
    default:
      result = 'Invalid operator'
      animate(true)
  }

  resultParagraph.textContent = 'Result: ' + result
}

calculateButton.addEventListener('click', calculate)

const animate = function (isError) {
  resultParagraph.style.transform = 'translateY(-20px)'
  resultParagraph.style.opacity = '0'
  isError
    ? (resultParagraph.style.backgroundColor = '#ffb7b7')
    : (resultParagraph.style.backgroundColor = '#aeffb2')
  setTimeout(() => {
    resultParagraph.style.transform = 'translateY(0)'
    resultParagraph.style.opacity = '1'
    isError
      ? (resultParagraph.style.backgroundColor = '#ffb7b7')
      : (resultParagraph.style.backgroundColor = '#aeffb2')
  }, 100)
}
