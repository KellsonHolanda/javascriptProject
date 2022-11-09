// Utilizando o método construtor que exija colocar uma marca, cor, distância da viagem, consumo e valor do combustível.
// E indique o valor gasto com a viagem. 
class carro{
    marca;
    cor;
    distância;
    consumo;
    valorGasolina;
    gastoMédio; 

    constructor (marca, cor, distância, consumo, valorGasolina){
        this.marca = marca;
        this.cor = cor;
        this.distância = distância;
        this.consumo = consumo;
        this.valorGasolina = valorGasolina;
        this.gastoMédio = distância/consumo *valorGasolina;
    };
    
         
    
    describe (){
        console.log(`Com o carro ${this.marca} de cor ${this.cor} o valor gasto para a viagem foi de ${this.gastoMédio}.`)
    };
}
const viagem1 = new carro('celta', 'azul', 200, 12, 4.05);

viagem1.describe();