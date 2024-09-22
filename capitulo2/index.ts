const arrayNumeros = [100, 60, 50, 10, 30, 20, 90, 110]

function buscaMenor(array: number[]): number {
    let menorIndice = 0
    let menor = array[menorIndice]

    for(var index = 0; index < array.length; index++){
        const num = array[index];
        if(num < menor){
            menor = num;
            menorIndice = index;
        }
    }
    return menorIndice;
}

function ordenacaoPorSelecao(array: number[]): number[]{
    let arrayCrescente: Array<number> = [];

    while (array.length > 0) {
        const menorIndice = buscaMenor(array);
        arrayCrescente.push(array[menorIndice]);
        array.splice(menorIndice, 1);
    }

    return arrayCrescente;
}

const arrayOrdenado = ordenacaoPorSelecao(arrayNumeros);
console.log(arrayOrdenado)