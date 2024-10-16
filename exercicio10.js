let carrinho = []

const fruta1 = {
    nome: 'laranja',
    disponibilidade: true
}

const fruta2 = {
    nome: 'maçã',
    disponibilidade: true
}

const fruta3 = {
    nome: 'limão',
    disponibilidade: true
}

function recebe(fruta) {
    carrinho.push(fruta)
}
recebe(fruta1)
recebe(fruta2)
recebe(fruta3)
 
console.log(carrinho)