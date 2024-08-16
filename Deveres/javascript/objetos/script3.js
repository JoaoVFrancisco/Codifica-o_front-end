class Pessoa {
    #nome;
    #idade;

    constructor(nome , idade){
        this.#nome = nome
        this.#idade = idade
    }

    obterNome(){
        return this.#nome;    
    }
    obterIdade(){
        return this.#idade
    }
    obterDescricao(){
        console.log("Nome: " + this.#nome +", Idade: "+ this.#idade);
    }
}
class Funcionario extends Pessoa{
    #departamento;
    constructor(nome, idade, departamento){
        super(nome, idade);
        this.#departamento = departamento
    }
    ObterDepartamento(){
        return this.#departamento
    }
    obterDescricao(){
        console.log("Nome: " + this.obterNome() +", Idade: "+ this.obterIdade() + ", Departamento: " + this.ObterDepartamento());
    }
}

class Cliente extends Pessoa{
    #dataCadastro;
    constructor(nome, idade, dataCadastro){
        super(nome, idade);
        this.#dataCadastro = dataCadastro
    }
    obterDataCadastro(){
        return this.#dataCadastro
    }
    obterDescricao(){
        console.log("Nome: " + this.obterNome() +", Idade: "+ this.obterIdade() + ", Data Cadastro: " + this.obterDataCadastro());
    }
}
let pessoa1 = new Pessoa("Jorgin", 23);
let pessoaF = new Funcionario("Walter", 23, "ADM");
let pessoaC = new Cliente("Henrique", 23, "10/02/2024")

let pessoas = [pessoa1, pessoaF, pessoaC]
pessoas.forEach(pessoas => {
    pessoas.obterDescricao();
    console.log("------------------------------")
})
/*console.log("Nome: " +pessoa1.obterNome() +", Idade: "+ pessoa1.obterIdade());*/
/*pessoaC.obterDescricao()*/