//Genero esta interfaz asi la utilizo en varias clases. 
interface calculo {
    resultado(): Promise<any>;
}

class Suma implements calculo{

    private num1 : number;
    private num2 : number;

    constructor(num1:number , num2:number){
        this.num1 = num1
        this.num2 = num2
    }

    public async resultado(): Promise<number>{
        return this.num1+this.num2
    }

}

class Resta implements calculo{
    private num1 : number;
    private num2 : number;

    constructor(num1:number , num2:number){
        this.num1 = num1
        this.num2 = num2
    }

    public async resultado(): Promise<number>{
        return this.num1-this.num2
    }

}


export = {
    Suma,
    Resta
}