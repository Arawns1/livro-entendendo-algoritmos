

// Pesquisa simples

function encontrarComPesquisaSimples(lista: Array<number>, numero: number) {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] === numero) {
      return i;
    }
  }
  return -1;
}

// Pesquisa binária
function encontrarComPesquisaBinaria(lista: Array<number>, numero: number) {
  let inicio = 0;
  let fim = lista.length - 1;
  let meio = Math.floor((inicio + fim) / 2);

  while (lista[meio] !== numero && inicio < fim) {
    if (numero < lista[meio]) {
      fim = meio - 1;
    } else {
      inicio = meio + 1;
    }
    meio = Math.floor((inicio + fim) / 2);
  }

  return lista[meio] === numero ? meio : -1;
}

const numeroProcurado = 99;
let listaComCemElementos: Array<number> = [];

for (let i = 0; i < 1000; i++) {
  listaComCemElementos.push(i);
}

console.time('Pesquisa simples');
console.log(encontrarComPesquisaSimples(listaComCemElementos, numeroProcurado));
console.timeEnd('Pesquisa simples');

console.time('Pesquisa binária');
console.log(encontrarComPesquisaBinaria(listaComCemElementos, numeroProcurado));
console.timeEnd('Pesquisa binária');