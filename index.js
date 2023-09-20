const formulariozinho = document.querySelector("form");
const resposta = document.querySelector("h2");

var abacaxi = []; // declara o array globalmente

formulariozinho.addEventListener("submit", (e) => {
  e.preventDefault();

  let numero = Number(formulariozinho.bango.value);

  if (numero >= 0 && numero <= 100) {
    formulariozinho.bango.value = ""; //limpa o seletor

    abacaxi.push(numero); //adiciona o numero
    abacaxi.sort(funcaoSort); //ordena

    //mostrar array
    let arrayzinho = getArrayzinho(abacaxi);
    resposta.innerText = arrayzinho;
  } else {
    alert("USUARIO informe um numero entre **0 e 100**");

    formulariozinho.bango.value = ""; //limpa o seletor
  }
});

formulariozinho.bbbb.addEventListener("click", () => {
  if (!formulariozinho.checkValidity()) {
    alert("informe um numero para ser retirado");
    formulariozinho.bango.focus();

  } else {
    let numero = Number(formulariozinho.bango.value);

    if (existeNaLista(numero, abacaxi)) {
      deletarNumero(numero, abacaxi);
    
      //exibir array
      let arrayzinho = getArrayzinho(abacaxi);
      resposta.innerText = arrayzinho;

      formulariozinho.bango.value = ""; //limpa o seletor

    } else {
      alert("o numero não esta na lista");
      formulariozinho.bango.value = ""; //limpa o seletor
      formulariozinho.bango.focus();
    }
  }
});

function deletarNumero(x, array) {
    
  while (existeNaLista(x, array)) {
        array.splice(array.indexOf(x), 1);
      }
    }


function getArrayzinho(array) {
  let arrayString = "";
  for (let i = 0; i < array.length; i++) {
    arrayString += "\n" + array[i] + "-" + i;
  }
  return arrayString;
}

function existeNaLista(x, array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == x) {
      return true;
    }
  }
  return false;
}

function funcaoSort(a, b) {
  return a - b;
}
