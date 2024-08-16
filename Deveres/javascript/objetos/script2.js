class Pessoa{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
    getPessoa(){
        console.log("olá meu nome é " + this.nome + " e minha idade é " + this.idade + " anos.");
    }
}
//Funcinario herda da classe Pessoa, todo funcionario e uma pessoa
class Funcionario extends Pessoa{
    constructor(nome, idade, salario){
        super(nome, idade);//chama o constructor da classe Pessoa
        this.salario = salario;
    }
    getFuncionario(){
        this.getPessoa();
        console.log("é meu salario é "+ this.salario)
    }
}
let Pessoa1 = new Pessoa ("João" , 18 );
let Pessoa2 = new Pessoa ("Douglas", 1500);

let coletivoDePessoa = [];

coletivoDePessoa.push(Pessoa1, Pessoa2)
let funcionario = new Funcionario("Maria", 30, 1000000);
/*coletivoDePessoa[0].getPessoa()
coletivoDePessoa[1].getPessoa()*/
/*funcionario.getFuncionario()*/
funcionario.getFuncionario()