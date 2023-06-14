class Animal {
    andar(){
        console.log("o animou andou");
    }
}
class Cachorro extends Animal {
    nome: string;
    constructor(nome: string){
        super();
        this.nome = nome;
    }
    latir(){
        console.log('Au Au');
    }
}