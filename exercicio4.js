
const personagem = {
    nome: "Matheus",
    idade: 23,
    generoMusical: "Pop"
}


function recebeObjeto (pessoa) {
    const novo = {
        ...pessoa,
        comidas: ["lasanha","pizza","churrasco"],
        amigo: {
        nome: "Luciano",
        idade: 25
        }
    }

console.log (`O nome da pessoa é ${novo.nome} e suas comidas preferidas são ${novo.comidas[0]}, ${novo.comidas[1]} e ${novo.comidas[2]}. Seu melhor amigo se chama ${novo.amigo.nome} e tem ${novo.amigo.idade} anos.`)

}


recebeObjeto (personagem)







