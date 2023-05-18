document.getElementById('calc-sum').addEventListener('click', function () {
  var num1 = document.getElementById('num1')
  var num2 = document.getElementById('num2')
  var msgm = document.getElementById('msgm')

  num1 = Number(num1.value)
  num2 = Number(num2.value)

  const formiValid = (num1, num2, msgm)
  if (num1 > num2) {
    alert('A validação aconteceu com sucesso')
  } else if (num1 < num2) {
    alert('A validação só acontecerá caso o campo-A seja maior que o Campo-B ')
  }
  if (num1 == num2) {
    alert('A validação só acontecerá caso o campo-A seja maior que o Campo-B')
  }
})
