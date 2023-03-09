const number9 = document.querySelector('.number-9')
const number8 = document.querySelector('.number-8')
const viewFinder = document.querySelector('.viewfinder-numbers')
const sum = document.querySelector('.sum')
const equal = document.querySelector('.equal')
let response = document.querySelector('.response')
const buttonClear = document.querySelector('.background-red')
const moreOrLess = document.querySelector('.more-or-less')
/*click no botão 9
comentarios de varias linhas
asdasasd*/

// comentario de uma linha
number9.addEventListener('click', function () {
  console.log('viewFinder', viewFinder.textContent)
  viewFinder.textContent = viewFinder.textContent + 9
})

number8.addEventListener('click', function () {
  console.log('viewFinder', viewFinder.textContent)
  viewFinder.textContent = viewFinder.textContent + 8
})

sum.addEventListener('click', function () {
  viewFinder.textContent = viewFinder.textContent + '+'
})

equal.addEventListener('click', function () {
  console.log('viewFinder', eval(viewFinder.textContent))
  response.textContent = eval(viewFinder.textContent)
})

buttonClear.addEventListener('click', function () {
  // window.location.reload()
  // outra maneira de fazer é:

  viewFinder.textContent = ''
  response.textContent = ''
})

moreOrLess.addEventListener('click', function () {
  viewFinder.textContent = eval(viewFinder.textContent * -1)
})

// DOM 