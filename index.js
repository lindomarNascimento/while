// while = laços de repetição 
// do while
// for


// laços do javascript
// Map
// forEach
// find
// filter
// reduce


const listaNome = [
  "lindOmar", //0
  "Claudiono", //1
  "vanessA", //2
  "ludimillA" // 3
] // array = lista


// for (var index = 0; index <= 3; index++) {
//   console.log(listaNome[index].toLowerCase(), index+ 1)
// }

// let index = 10

// while(index <= 3) {
//   console.log(listaNome[index].toLowerCase())

//   index++
// }

// do {
//   console.log(listaNome[3].toLowerCase())
//   index++
// } while(index <= 3)



// listaNome.map(function (index, i) {
//   console.log(index.toUpperCase(), i+ 1)
// })

// const fitroDoNome = listaNome.filter(function (name, index) {
//   return name.includes('l')
// })

// console.log('filtroDoNome', fitroDoNome)
// = recebe var index = 0
// = comparação var index == 0
// = comparação var index === 0


// listaNome.forEach(function (nome, index) { 
//   console.log(nome, index+1)
// })




const sorteio = [
  "Ana Carina Alves",
  "Anderson Franca",
  "Daniele Maria",
  "Diogo Negreiros",
  "Edson Xavier",
  "Fernanda Araujo",
  "Gabriel Brantes",
  "helaine Cristina Ribeiro",
  "Henrique Maestrello",
  "Inez Prazeres",
  "Juliana Da Cruz",
  "Kemilly Mendes Pardinho",
  "Lais Kimberlly",
  "Ludimila Bárbara",
  "Manu Borges",
  "Marcos Kulman",
  "Saffirah Gameplay (Amanda C. Hipólito)",
  "Vanessa Arcanjo"
]

const numero =  Math.floor(Math.random() * (sorteio.length - 0) + 0)

console.log(sorteio[numero])