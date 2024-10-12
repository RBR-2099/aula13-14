


function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender")) // Dúvida: Pq neste caso se usou as aspas?
console.log(minhaFuncao(pessoa, "altura"))


/*
a) O que vai ser impresso no console?
    false
    undefined

b) Explique o valor impresso no console. Você sabe por que isso aconteceu?
   Quando a função é chamada ela busca primeiro pela propriedade "backender"
   que está presente no objeto e retorna seu valor: "false".
   Porém quando a função chama "altura" e não encontra essa propriedade no
   objeto "pessoa", ela imprime a resposta padrão destes casos, que é "undefined"
*/