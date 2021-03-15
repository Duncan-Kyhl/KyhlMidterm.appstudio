let calculation = prompt('Would you like to calculate an average, or a remainder?\n(Type: `average`, or `remainder`)')

if (calculation == 'average') {
  alert(`The average is ${calcAvg(number1,number2,number3)}.`)

} else if (calculation == 'remainder') {
  let value = Number(prompt('Enter a number to be divided:'))
  let divisor = Number(prompt('Enter a second number to divide the previous:'))
  alert(`The remainder is ${divideTwo(value,divisor)}.`)
}

function calcAvg(num1,num2,num3) {
  let sum = (num1 + num2 + num3)
  let avg = sum/3
  return avg
}

function divideTwo(a,b) {
  return (a % b)
}