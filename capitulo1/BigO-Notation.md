# Big O Notation

A notação Big O serve para medir o quão rápido é um algoritmo.

Para calcular a quantidade de "saltos" que uma busca binária pulará até encontrar o elemento final pode se usar log2(nº de elementos). O resultado será o numero de saltos.

A notação Big O serve para verificar se o tempo de execução aumenta conforme a lista aumenta, ou não. Não é sobre tempo mas sim eficiência.

```bash
Tamanho da lista = n
notação bigO = O(n)

O(nº operações) = Ex. busca binária = O(log n)
```

a notação Big O sempre vai estipular o tempo de execução para a pior hipotese

| Notação        | Exemplo           | Descrição                                         |
|----------------|-------------------|---------------------------------------------------|
| O(1)           | Acessando um elemento do array diretamente | Constant time complexity |
| O(n)           | Pesquisa simples  | Conhecido como tempo linear                       |
| O(log n)       | Pesquisa binária  | Também conhecido como tempo logarítmico           |
| O(n * log n)   | Quick sort        | Um algoritmo rápido de ordenação                  |
| O(n^2)         | Ordenação por seleção |  É um algoritmo lento de ordenação            |
| O(n!)          | Traveling salesman problem | Problema do caixeiro viajante, é um algoritmo muito lento |

**Nota:** A notação Big O sempre vai estipular o tempo de execução para a pior hipótese.

## O caixeiro-viajante (Traveling salesman problem)
---
O problema do caixeiro-viajante é um dos mais complexos na ciência da computação. Suponha que você tenha um caixeiro-viajante que precisa ir a 5 cidades. O caixeiro quer passar por todas as cidades percorrendo uma distância mínima. Como podemos encontrar o melhor caminho?
A solução mais básica seria analisar cada percurso possível e sua distancia para então definir qual é o menor caminho.
Logo, para gerar todos os percursos disponíveis seriam necessárias 120 permutações (5!). Se fossem 6 cidades o número aumenta para 720 permutações, 7 cidades viram 5050 operações e por ai vai...

Desta forma, esse problema tem o tempo de execução **O(n!)**, ou o tempo fatorial.

Mas se esse algoritmo é tão ruim basta utilizar outro, correto? Infelizmente não, pois esse problema não possui outra solução. Não existe um algoritmo mais rápido para esse problema.

## Recapitulando o Capitulo 1
- A pesquisa binária é muito mais rápida do que a pesquisa simples
- *O(log n)* é mais rápido que *O(n)* e *O(log n)* fica ainda mais rápido conforme os elementos da lista aumentam
- A rapidez de um algoritmo não é medida em segundos
- O tempo de execução de um algoritmo é medido por meio de seu crescimento
- O tempo de execução dos algoritmos é expresso na notação Big O

# Tempo de Execução

A letra O nas fórmulas na verdade é uma constante de tempo de uma execução completa de um iteração.

### Exemplo:
- Pesquisa simples: *10ms *  n*
- Pesquisa binária: *1s * log n*
  
  Vendo assim parece que a pesquisa simples é mais rapida que a pesquisa binária.
  Vamos supor que estamos realizando uma busca em uma lista de 4 bilhões de elementos.
 
```bash
# Pesquisa simples
10ms * 4 bilhões = 463 dias

# Pesquisa binária
1s * 32 = 32 segundos\
```