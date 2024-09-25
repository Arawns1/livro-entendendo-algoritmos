# Quicksort

Técnica dividir para conquistar = Uma nova maneira de pensar sobre a resolução de problemas, tornando-se mais uma alternativa diante de problemas.

O _quicksort_ utiliza a técnica de **Dividir para Conquistar (DC)**

## Dividir para conquistar
Os algoritmos DC são recursivos. Assim, para resolver um problema utilizando DC, você deve seguir dois passos:
- Descubrir o caso-base, que deve ser o caso mais simples possível;
- Divida ou diminua o seu problema até que ele se torne o caso-base; 

A recursão salva o estado das funções anteriores parcialmente executadas

Linguagens de programação funcional não possuem loops

O quicksort se baseia em definir um pivo, colocar para a esquerda elementos menores que ele e maiores para a direita.
Caso o array tenha um ou nenhum elemento chega ao fim da recursão.
O passo a passo é:

1. Escolher um pivo
2. Particionar o array em dois subarrays, separando-os entre elementos menores do que o pivô e elementos maiores do que o pivô.
3. Executar o quicksort recursivamente em ambos os subarrays até atingir a condição de parada.


O tempo médio de execução do quick sort é *O(n * log n)*, porém no pior caso pode chegar a *O(n²)*.
O **merge sort** possui tempo de execução *O(n * log n)*.

## Merge sort vs Quicksort
