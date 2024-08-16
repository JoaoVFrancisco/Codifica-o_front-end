class Casa{
    //atributos casa
    constructor(proprietario, rua, bairo, cidade, numero){
        this.proprietario =proprietario;
        this.rua = rua;
        this.bairo = bairo;
        this.cidade = cidade;
        this.numero = numero;
    }
    getCasa(){
        console.log("o proprietario e:" + this.proprietario);
        
    }
    venda(novoProprietario){
        this.proprietario = novoProprietario
    }
}

let casa1 = new Casa("Joao", "Jose ramos", "Santo antonio", "vitoria" , 3);
casa1.getCasa()
casa1.venda("Raquel");
casa1.getCasa()