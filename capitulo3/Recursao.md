# Recursão

"Os loops podem melhorar o desempenho do seu programa. A recursão melhora o desempenho do seu programador. Escolha o que for mais importante para a sua situação."

Toda função recursiva tem 2 partes: 'caso-base' e 'caso recursivo'

Caso recursivo é quando a função chama a si mesma. O caso-base pe quando a função não chama a si mesma novamente, de forma que o programa não se retorna em um loop infinito.

```javascript
function regressiva(i){
    console.log(i);
    if(i <= 1){ //caso-base
        return
    }
    else{ // caso recursivo
        regressiva(i - 1)
    }
}
```

## A pilha (call-stack)
Pilha -> LIFO, last in first out

é uma polha com as instruções presentes no código
Quando cvoê chama uma função, é adicionado na pilha.
Logo, quando você adiciona uma função dentro de outra função a chamada de função fica pausada em um estado parcialmente completo.