function calculadora(operacao, numeros){
    let resultado = 0;
    switch(operacao){
        case '+':
             resultado = 0
            for(i = 0; i < numeros.length; i++){
                resultado += numeros[i]
            };
             return resultado;
            break;
            case '-':
             resultado = 0;
            for(i = 0; i < numeros.length; i++){
                resultado -= numeros[i]
            };
             return resultado;
            break;
            case '*':
             resultado = 1;
            for(i = 0; i < numeros.length; i++){
                resultado *= numeros[i]
            };
             return resultado;
            break;
    }
}
console.log(calculadora("z" , [1,53,6,8]));
module.exports = calculadora;