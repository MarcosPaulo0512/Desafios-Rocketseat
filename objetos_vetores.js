const usuario = {
    nome: 'Marcos',
    idade: 15,
    empresa: {
        nome: 'Rocketseat',
        cor: 'Roxo',
        foco: 'Programação',
        endereço: {
            rua: 'Rua Guilherme Gembala',
            numero: 260
        }
    }
}
//A empresa Rocketseat está localizada em Rua Guilherme Gembala, 260
console.log(`A empresa ${usuario.empresa.nome} está localizada em ${usuario.empresa.endereço.rua}, ${usuario.empresa.endereço.numero}`)

const dev = {
    nome: 'Paulo',
    idade: 15,
    tecnologia: [
        { nome: 'Java', especialidade: 'Minecraft Plugin' }
    ] 
}

//O usuário Carlos tem 32 anos e usa a tecnologia C++ com especialidade em Desktop
console.log(`O Dev ${dev.nome} tem ${dev.idade} anos e usa a tecnologia ${dev.tecnologia[0].nome} com especialidade em ${dev.tecnologia[0].especialidade}`)