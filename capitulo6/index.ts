
// Grafo de conexões de amigos, onde voce é o nó inicial e seus amigos são os nós finais
const grafo: { [key: string]: string[] } = {
    voce: ['alice', 'bob', 'claire'],
    alice: ['peggy'],
    bob: ['anuj', 'peggy'],
    claire: ['thom', 'jonny'],
    peggy: [],
    anuj: [],
    thom: [],
    jonny: []
}

console.log(grafo["voce"]); // ['alice', 'bob', 'claire']

// Busca de vendedores de manga

function buscarVendedorDeManga(){
    let filaPesquisa: string[] = grafo["voce"];
    let pesquisados: string[] = [];

    while(filaPesquisa.length > 0){
        let pessoa = filaPesquisa.shift();
        if(pessoa && pesquisados.indexOf(pessoa) === -1){
            if(pessoaEVendedoraDeManga(pessoa)){
                console.log(pessoa + " é um vendedor de manga!");
                return true;
            } else {
                filaPesquisa = filaPesquisa.concat(grafo[pessoa]);
                pesquisados.push(pessoa);
            }
        }
    }

    function pessoaEVendedoraDeManga(pessoa: string){
        return pessoa[pessoa.length - 1] === 'm';
    }
}
buscarVendedorDeManga();