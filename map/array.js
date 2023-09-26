// 1
const arr = [1, 2, 3, 4, 5, 6]

arr.map((numero) => {
  console.log(numero)
})




/* for(var i= 0; i < arr.length; i++){
  console.log(arr[i])
}
 */
// 2
const usuarios = [
  {
    nome: "Eduardo",
    idade: 22
  },
  {
    nome: "João",
    idade: 30,
  },
  {
    nome: "Claudio",
    idade: 40
  }
]
usuarios.map(usuario => {
  console.log(usuario.nome, usuario.idade)
})


// 3
const vendas = [
  {
    produto: "Estojo",
    preco: 50.00,
    qtdVendidas: 10
  },
  {
    produto: "Lapis",
    preco: 2.00,
    qtdVendidas: 20
  },
  {
    produto: "Branquinho",
    preco: 7.00,
    qtdVendidas: 15
  }
]

// Saída: O Estojo vendeu 10 unidades a R$ 50.00 que no total fica R$total
vendas.map(({produto, preco, qtdVendidas}) => {
  console.log(`O ${produto} vendeu ${qtdVendidas} unidades a R$ ${preco} que no total fica R$${preco * qtdVendidas}` )
})

const vendas2 =  vendas.filter(produto => {
  return produto.preco > 10.00
})

console.log(vendas2)




const produto2 = {
  nome: "Estojo",
  preco: 50.00,
  qtdVendidas: 10
}

const {nome, preco} = produto2


const nomeProduto = produto2.nome
const precoProduto = produto2.preco

console.log(nomeProduto, precoProduto)
console.log(nome, preco)