# Capitulo 5 - Tabelas Hash

Funções hash geram tempo de execução O(1).

Ela é uma função na qual você insere uma string e ela retorna um número.

As funções hash devem ser consistentes, ou seja sempre que inserir a String "maçã" deve retornar o número 4.

Além disso, a função deve mapear diferentes palavras para diferentes números. Ou seja, se colocar "maçã" deve sempre retornar 4.

## Como funciona uma função hash?

Um exemplo de utilização seria adicionar a palavra "maçã" e ela retornar o valor 4. Esse valor pode ser utilizado como um índice de um array onde esse item está armazenado. Desta forma o tempo de execução seria o(1).

A ideia é passar um texto na função hash e ela retornar o índice do array que contem o valor procurado. Essa é o conceito de **tabela hash** ou HashMap, map, dicionário.

## Evitando entradas duplicadas
Utilizar o método .get de uma tabela hash é bom para verificar valores duplicados.

## Utilizando tabelas hash como cache
Cache -> Relembrar dados em vez de recalculá-los a cada solicitação.

Exemplo página de login do facebook. O facebook não precisa pensar como é a página de login nem realizar consultas e cálculos por ser uma página estática e igual para todos. Porém a homescreen do facebook já é diferente, lá precisa realizar cálculos e tarefas diferentes para cada usuário.

Os dados do cache são salvos em hashmaps.

## Colisoes
Colisão é quandoduas chaves são indicadas para o mesmo espaço.
A solução encontrada para colisões é iniciar uma lista encadeada no espaço conflitante.

uma boa função hash distribui os valores no array simetricamente.