
const array = [1, 2, 3, 4, 5, 6]


function quickSort(array: number[]): number[]{
    // 1. Defino a condição de parada
    if(array.length < 2){
        return array
    }
    // 2. Defino o pivo
    const elementoCentral = Math.floor(array.length / 2)
    const pivo = array[elementoCentral]

    // 3. Divido o array em dois
    const arrayMenor = array.filter((num) => num < pivo)
    const arrayMaior = array.filter((num) => num > pivo)
    
    // 4. Executo o quickSort recursivamente
    const arrayOrdenado = quickSort(arrayMenor).concat([pivo]).concat(quickSort(arrayMaior))

    return arrayOrdenado
}

console.time('Quicksort');
console.log(quickSort(array)) 
console.timeEnd('Quicksort');