//criacao de vetores;
let seuSigno = [[], []]
seuSigno[1][1] = prompt(`Digite seu Signo `);
seuSigno[1][1] = seuSigno[1][1].toUpperCase(); // converter para tudo MAIUSCULO;

//condicionais
// datas de todos os signos

if (seuSigno[1][1] === "ÁRIES" || seuSigno[1][1] === "ARIES") {
  console.log(`Voce nasceu entre os dias 21 de março a 20 de abril`);
}
if (seuSigno[1][1] === "TOURO" || seuSigno[1][1] === "TOURO") {
  console.log(`Voce nasceu entre os dias 21 de abril a 20 de maio`);
}
if (seuSigno[1][1] === "GÊMEOS" || seuSigno[1][1] === "GÊMEOS") {
  console.log(`Voce nasceu entre os dias 21 de maio a 20 de junho`);
}
if (seuSigno[1][1] === "CÃNCER" || seuSigno[1][1] === "CANCER") {
  console.log(`Voce nasceu entre os dias 21 de junho a 22 de julho`);
}
if (seuSigno[1][1] === "LEÃO" || seuSigno[1][1] === "LEÃO") {
  console.log(`Voce nasceu entre os dias 23 de julho a 22 de agosto`);
}
if (seuSigno[1][1] === "VIRGEM" || seuSigno[1][1] === "VIRGEN") {
  console.log(`Voce nasceu entre os dias 23 de agosto a 22 de setembro`);
}
if (seuSigno[1][1] === "LIBRA" || seuSigno[1][1] === "LIBRA") {
  console.log(`Voce nasceu entre os dias 23 de setembro a 22 de outubro`);
}
if (seuSigno[1][1] === "ESCORPIÃO" || seuSigno[1][1] === "ESCORPIAO") {
  console.log(`Voce nasceu entre os dias 23 de outubro a 21 de novembro`);
}
if (seuSigno[1][1] === "SAGITÁRIO" || seuSigno[1][1] === "SAGITARIO") {
  console.log(`Voce nasceu entre os dias 22 de novembro a 21 de dezembro`);
}
if (seuSigno[1][1] === "CAPRICÓRNIO" || seuSigno[1][1] === "CAPRICORNIO") {
  console.log(`Voce nasceu entre os dias 22 de dezembro a 20 de janeiro`);
}
if (seuSigno[1][1] === "AQUÁRIO" || seuSigno[1][1] === "AQUARIO") {
  console.log(`Voce nasceu entre os dias 21 de janeiro a 19 de fevereiro`);
}
if (seuSigno[1][1] === "PEIXES" || seuSigno[1][1] === "PEIXES") {
  console.log(`Voce nasceu entre os dias 19 de fevereiro a 20 de março`);
}

//laço de repetiçao
//saber qual as datas de todos os signos;
while (seuSigno[2] !== "0") { // Enquando não for 0, repete os signos;

  seuSigno[2] = prompt(`1 - Digite outro signo, 1 para seu SIGNO perfeito ou 0 para fechar`);
  seuSigno[2] = seuSigno[2].toUpperCase(); // converter para tudo MAIUSCULO;
 
  
  if (seuSigno[2][1] === "ÁRIES") {
    console.log(`Voce nasceu entre os dias 21 de março a 20 de abril`);
  }
  if (seuSigno[2][1] === "TOURO") {
    console.log(`Voce nasceu entre os dias 21 de abril a 20 de maio`);
  }
  if (seuSigno[2][1] === "GÊMEOS") {
    console.log(`Voce nasceu entre os dias 21 de maio a 20 de junho`);
  }
  if (seuSigno[2][1] === "CÂNCER") {
    console.log(`Voce nasceu entre os dias 21 de junho a 22 de julho`);
  }
  if (seuSigno[2][1] === "LEÃO") {
    console.log(`Voce nasceu entre os dias 23 de julho a 22 de agosto`);
  }
  if (seuSigno[2][1] === "VIRGEM") {
    console.log(`Voce nasceu entre os dias 23 de agosto a 22 de setembro`);
  }
  if (seuSigno[2][1] === "LIBRA") {
    console.log(`Voce nasceu entre os dias 23 de setembro a 22 de outubro`);
  }
  if (seuSigno[2][1] === "ESCORPIÃO") {
    console.log(`Voce nasceu entre os dias 23 de outubro a 21 de novembro`);
  }
  if (seuSigno[2][1] === "SAGITÁRIO") {
    console.log(`Voce nasceu entre os dias 22 de novembro a 21 de dezembro`);
  }
  if (seuSigno[2][1] === "CAPRICÓRNIO") {
    console.log(`Voce nasceu entre os dias 22 de dezembro a 20 de janeiro`);
  }
  if (seuSigno[2][1] === "AQUÁRIO") {
    console.log(`Voce nasceu entre os dias 21 de janeiro a 19 de fevereiro`);
  }
  if (seuSigno[2][1] === "PEIXES") {
    console.log(`Voce nasceu entre os dias 19 de fevereiro a 20 de março`);
  }
// laço de repetiçao dentro de um laço de repetiçao
//saber qual o seu signo perfeito
  if (seuSigno[2] === "1") {
    let signoPerfeito = 1
    while (signoPerfeito !== "0") {
      signoPerfeito = prompt(`2 - Digite SEU signo para saber seu PAR perfeito, 0 para voltar ao signos ou 'SAIR'`);
      signoPerfeito = signoPerfeito.toUpperCase();// converter para tudo MAIUSCULO;
//condicionais dentro do segundo laço de repetiçao

      if (signoPerfeito === "ARIES") {
        console.log(`Signo Perfeito: Seu par perfeito no signo são: Leão E Sagitário`);
      }
      if (signoPerfeito === "TOURO") {
        console.log(`Signo Perfeito: Seu par perfeito no signo é: Virgem `);
      }
      if (signoPerfeito === "GEMEOS") {
        console.log(`Signo Perfeito: Seu par perfeito no signo É: Aquário!`);
      }
      if (signoPerfeito === "CANCER") {
        console.log(`Signo Perfeito: Seu par perfeito no signo é: Escorpião!`);
      }
      if (signoPerfeito === "LEAO") {
        console.log(`Signo Perfeito: Seu par perfeito no signo é: Libra!`);
      }
      if (signoPerfeito === "VIRGEM") {
        console.log(`Signo Perfeito: Seu par perfeito no signo é: Capricórnio! `);
      }
      if (signoPerfeito === "LIBRA") {
        console.log(`Signo Perfeito: Seu par perfeito no signo é: Aquário!`);
      }
      if (signoPerfeito === "ESCORPIAO") {
        console.log(`Signo Perfeito: Seu par perfeito no signo é Peixes`);
      }
      if (signoPerfeito === "SAGITARIO") {
        console.log(`Signo Perfeito: Seu par perfeito no signo é Áries`);
      }
      if (signoPerfeito === "CAPRICORNIO") {
        console.log(`Signo Perfeito: Seu par perfeito no signo é Touro`);
      }
      if (signoPerfeito === "AQUARIO") {
        console.log(`Signo Perfeito: Seu par perfeito no signo é Gêmeos`);
      }
      if (signoPerfeito === "PEIXES") {
        console.log(`Signo Perfeito: Seu par perfeito no signo é Câncer`);
      }
      if (signoPerfeito === "SAIR") {
        seuSigno[2] = "0"
        break
      }
     break
    }
  }


}

//Entretenimento com condicional para saber qual seu SIGNO favorito;
let favorito = prompt("Qual seu SIGNO favorito?")

if (favorito !== "virgem") {
  console.log(`Seu SIGNO favorito é ${favorito}? Péssima escolha...`)
} else {
  console.log("Você é uma pessoa muito linda e carinhosa escolhendo o signo de VIRGEM!")
}
