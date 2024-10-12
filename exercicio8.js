/*
a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos (um array que sempre terá exatamente três apelidos). Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo: 
*/



// Exemplo de entrada

function minhaFuncao(objeto) {
	return objeto
}

const pessoa = {
    nome: "Vitor Hugo", 
    apelidos: ["Vitinho", "Vitão", "Vit"]
 }

const novaPessoa = { ...pessoa, apelidos : ["Vi", "Tor", "Huguinho"]}


console.log (minhaFuncao(`Eu sou o ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}`))  

 // Exemplo de saída: "Eu sou Vitor, mas pode me chamar de: Vitinho, Vitão ou Vit"

/*
 b) Agora, usando o operador spread, crie um novo objeto mantendo o valor da propriedade nome, mas com uma nova lista de três apelidos. Depois, chame a função feita no item anterior passando como argumento o novo objeto
 */


console.log (minhaFuncao(`Eu sou o ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos.novaPessoa[0]}, ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}`))  
''