class Carro{
    marca: string;
    aro:number;
    constructor(marca:string, aro:number){
        this.marca = marca;
        this.aro;
    }
    verificarAro(){
        return `o aro do carro é: ${this.aro}`;
    }
}
let ferrari = new Carro("porshe", 30);
console.log(ferrari);