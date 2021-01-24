const nome = 'Paulo'
const sexo = 'M'
const idade = 15
const contribuicao = 0

const somaIdade = idade + contribuicao


if (sexo === 'M'){
    if(somaIdade > 95 && contribuicao > 35)
        console.log(`${nome}, você pode se aposentar`)
    else 
        console.log(`${nome}, você não pode se aposentar`)
} else {
    if(somaIdade > 85 && contribuicao > 30)
        console.log(`${nome}, você pode se aposentar`)
    else 
        console.log(`${nome}, você não pode se aposentar`)
}