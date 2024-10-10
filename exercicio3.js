const filme = {
    nome: "O Iluminado",
    diretor: "Stanley Kubrick",
    anoLançamento: 1980,
    elenco: ["Jack Nicholson" , "Shelley Duvall" , "Danny Lloyd "],
    //personagem:["Jack Torrance", "Wendy Torrance" , "Danny Torrance"],
    JaViu: true
}
filme.personagem = ["Jack Torrance", "Wendy Torrance" , "Danny Torrance"]
console.log (`${filme.elenco[0]} interpreta ${filme.personagem[0]}`)
console.log (`${filme.elenco[1]} interpreta ${filme.personagem[1]}`)
console.log (`${filme.elenco[2]} interpreta ${filme.personagem[2]}`)

filme.elenco[0] = "Xuxa"

console.log (filme)

console.log (`${filme.elenco[0]} interpreta ${filme.personagem[0]}`)
console.log (`${filme.elenco[1]} interpreta ${filme.personagem[1]}`)
console.log (`${filme.elenco[2]} interpreta ${filme.personagem[2]}`)