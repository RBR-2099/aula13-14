/*
a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão. 

b) Escreva uma função que receba um objeto de cada vez e retorne um array com as seguintes informações:
1. O valor de `nome`
2. O numero de caracteres do valor `nome`
3. O valor de `idade`
4. O valor de `profissão`
5. O numero de caracteres do valor `profissão`
*/

const pessoa1 = {
    nome: "Raul",
    idade: "43",
    profissão: "bancário"

}

function minhaFuncao (pessoa1){
    const resultado = [pessoa1.nome, pessoa1.nome.length, pessoa1.idade, pessoa1.profissão, pessoa1.profissão.length]
    return resultado

}
console.log(minhaFuncao(pessoa1))

const pessoa2 = {
    nome: "Amanda",
    idade: 34,
    profissão: "empresária"

}

function minhaFuncao (pessoa2){
    const resultado = [pessoa2.nome, pessoa2.nome.length, pessoa2.idade, pessoa2.profissão, pessoa2.profissão.length]
    return resultado

}
console.log(minhaFuncao(pessoa2))