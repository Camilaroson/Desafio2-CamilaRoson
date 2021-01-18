//creo variable con el nombre del archivo para utilizar luego
let calcular = './calculos';

let operacion = async (numero1: number, numero2: number, o: string): Promise<any> =>  {
 let op = null;
 switch (o.toLowerCase()){
    case 'suma':
        //aca va lo importado
        op = await import(calcular).then(m => m.Suma);
        break
    case 'resta':
        //aca va lo importado
        op = await import(calcular).then(m => m.Resta);
        break
    default: 
        return console.log(`${o} no es una operacion valida`)


}
            return new op(numero1, numero2).resultado();
}

let operaciones = async (numero1:number , numero2:number , o:string) => {
const resultado = await operacion(numero1,numero2,o);
console.log(resultado)
};

operaciones(8, 2, 'resta');