# Ordenação por Seleção

Lista binárias e outros algoritmos de busca só funcionam se estiverem ordenados, por isso é importante aprender algoritmos de ordenação.

## Arrays e listas encadeadas
Para compreender listas e arrays é necessário ter uma noção básica de como funciona a memória. A principio a memória é um gigante armário de correspondências onde cada gaveta corresponde um slot da memória

Array = Salva as informações na memória de forma continua.

O problema do array é que pode ser que ele precise ocupar mais slots porém o slot a seguir já está ocupado. Quando isso acontece o computador precisa alterar todo o posicionamento do array para um novo espaço da memória em que caiba mais informações. Isso demanda processamento e tempo. Portanto, adicionar itens em um array pode ser bem lento.

Um forma de resolver isso é alocar/reservar memória para um array com um tamanho superior ao que você precisará. Por exemplo, se você tem um array de 3 itens reservar 10 te garante que não será necessário alterar todo o array de lugar até ele ser totalmente preenchido. Entretanto, você pode não usar a memória que usou sendo desperdiçada ou usar todo o espaço reservado tendo que mover para outro lugar.

*Listas encadeadas resolvem o problema de adição*

Cada item armazena o endereço do próximo item da lista.

|          | Arrays | Listas |
|----------|--------|--------|
| Leitura  | O(1)   | O(n)   |
| Inserção | O(n)   | O(1)   |
| Deleção  | O(n)   | O(1)   |

A leitura de array é O(1) pois conseguimos acessar diretamente pelo indice
Já a leitura de lista é O(n) pois precisamos percorrer, no pior dos casos, todas os endereços de memória para encontrar o elemento

A inserção de array é O(n) pois no pior caso terá que reorganizar todos os elementos
A inserção na lista é O(1) pois pode ser inserido em qualquer posição
A deleção na lista é O(1) pois basta mudar a referência da posição do próximo elemento.

## Ordenação por seleção
Exemplo, um lista com bandas e a quantidade de vezes que ela foi tocada.
Uma forma de ordenar as que foram mais tocadas para as que foram menos seria ir em cada item da lista, pegar o com maior valor e salvar em uma nova lista ordenada.

Dessa forma, seria necessário percorrer toda a lista para descobri qual o maior valor e então salvar na nova lista ordenada. Como percorre toda a lista, essa operação demoraria O(n). Digamos que na lista tem 7 bandas, para finalizar a ordenação seria necessário percorrer toda a lista 7 vezes ( O(n) * O(n) ...).

No fim, esse algoritmo é considerar de tempo *O(n²)* pois precisa passar multiplas vezes por toda a lista.

A ordenação por seleção é um algoritmo bom, mas não muito rápido. O quicksort é um algoritmo de ordenação mais rápido que tem tempo de execução *O(n log n)*
