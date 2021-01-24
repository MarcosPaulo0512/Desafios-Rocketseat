const nome = 'Marcos'
const peso = '65'
const altura = 1.61

const imc = peso / (altura * altura)

if(imc > 30)
    console.log(`${nome}, você está acima do peso.`)
else 
    console.log(`${nome}, você não está acima do peso.`)