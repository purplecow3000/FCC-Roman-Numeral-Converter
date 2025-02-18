const number = document.getElementById('number');
const convertBtn = document.getElementById('convert-btn');
const output = document.getElementById('output');

const conversion = [
  {roman: "M", arabic: 1000},
  {roman: "CM", arabic: 900},
  {roman: "D", arabic: 500},
  {roman: "CD", arabic: 400},
  {roman: "C", arabic: 100},
  {roman: "XC", arabic: 90},
  {roman: "L", arabic: 50},
  {roman: "XL", arabic: 40},
  {roman: "X", arabic: 10},
  {roman: "IX", arabic: 9},
  {roman: "V", arabic: 5},
  {roman: "IV", arabic: 4},
  {roman: "I", arabic: 1}
  ]

const getOutput = number => {
  number = Number.parseInt(number)

  if (!Number.isInteger(number)) {
    output.innerHTML = "Please enter a valid number"
    return
  } else if (number < 1) {
    output.innerHTML = "Please enter a number greater than or equal to 1"
    return
  } else if (number > 3999) {
    output.innerHTML =  "Please enter a number less than or equal to 3999"
    return
  }

  let test = []

  conversion.forEach(({roman, arabic}) => {
    while (number >= arabic) {
      test.push(roman)
      number -= arabic
    }
  })
  console.log(test)
  output.innerHTML = `${test.join("")}`
  return
}

convertBtn.addEventListener("click", () => {
  getOutput(number.value);
  number.value = ""
  });
