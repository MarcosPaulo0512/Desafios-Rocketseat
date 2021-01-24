const usuarios = [
    { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
    { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
    { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
  ];

  function checarCSS(usuario){
      for(let tec of usuario.tecnologias){
          if(tec == 'CSS') return true;
      }
      return false;
  }


  for(let i = 0; i < usuarios.length; i++){
      const usuario = usuarios[i]

      //Carlos trabalha com HTML, CSS
      if(checarCSS(usuario)) 
        console.log('Ss, usa css')
      
      console.log(`${usuario.nome} trabalha com ${usuario.tecnologias}`)
  }


  //desafio 2

  const usuarios2 = [
    {
      nome: "Salvio",
      receitas: [115.3, 48.7, 98.3, 14.5],
      despesas: [85.3, 13.5, 19.9]
    },
    {
      nome: "Marcio",
      receitas: [24.6, 214.3, 45.3],
      despesas: [185.3, 12.1, 120.0]
    },
    {
      nome: "Lucia",
      receitas: [9.8, 120.3, 340.2, 45.3],
      despesas: [450.2, 29.9]
    }
  ];

  function somaNumeros(numeros) {
    let final = 0;
    for(let numero of numeros){
        final = final + numero
    }
    return final;
  }

  function calcularSaldo(receitas, despesas){
    return somaNumeros(receitas) - somaNumeros(despesas)
  }

  for(let user of usuarios2){
      const total = calcularSaldo(user.receitas, user.despesas)

      if(total > 0){
          console.log(`O saldo de ${user.nome} foi POSITIVO de ${total}`)
      } else 
        console.log(`O saldo de ${user.nome} foi NEGATIVO de ${total}`)
  }