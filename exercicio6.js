const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)

/*

    a) O que vai ser impresso no console?

        console.log(cachorro)
        Juca
        3
        SRD

        console.log(gato)
        Juba
        3
        SRD

        console.log(tartaruga)
        Jubo
        3
        SRD

    b) O que faz a sintaxe dos três pontos antes do nome de um objeto?

        Copia as chaves e valores de um objeto previamente declarado "..."

*/