class produto{
    #nome 
    #preco 

    constructor(nome, preco){
        this.#nome = nome;
        this.#preco = preco;
    }

    obterNome(){
        return this.#nome 
    }
    obterPreco(){
        return this.#preco 
    }
    obterDescricao(){
        document.write("Nome do produto: " + this.obterNome() + ", Preço do produto: " + this.obterPreco() + " reais.");
    }
}
class eletronico extends produto{
    #componente
    constructor(nome, preco, componete){
        super(nome, preco);
        this.#componente = componete
    }
    obterComponente(){
        return this.#componente
    }
    obterDescricao(){
        document.write("Nome do produto: " + this.obterNome() + ", Preço do produto: " + this.obterPreco() + " reais" + ", Compontente Eletronico: " + this.obterComponente());
    }
}
class Roupa extends produto{
    #tamanho;
    constructor(nome, preco, tamanho){
        super(nome, preco)
        this.#tamanho = tamanho
    }
    obterTamanho(){
        return this.#tamanho
    }
    obterDescricao(){
        document.write("Nome do produto: " + this.obterNome() + ", Preço do produto: " + this.obterPreco() + " reais" + ", Tamanho da Roupa " + this.obterTamanho());
    }
}
let nomeProduto = prompt("digite o nome do produto");
let precoProduto = prompt("digite o nome do produto");
let componenteProduto = prompt("digite o qual o componente");
let tamanhoProduto = prompt("digite o tamanho do produto");

let produto1 = new produto (nomeProduto, precoProduto);
//produto1.obterDescricao()
let produtoE = new eletronico (nomeProduto, precoProduto, componenteProduto);
//produtoE.obterDescricao()
let produtoR = new Roupa (nomeProduto, precoProduto, tamanhoProduto);
//produtoR.obterDescricao()
let produtos = [produto1, produtoE, produtoR]
/*produtos.forEach(produto => {
    produto.obterDescricao()
    console.log("-----------------------")
})*/

