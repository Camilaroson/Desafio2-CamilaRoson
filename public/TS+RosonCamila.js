"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
//creo variable con el nombre del archivo para utilizar luego
let calcular = './calculos';
let operacion = async (numero1, numero2, o) => {
    let op = null;
    switch (o.toLowerCase()) {
        case 'suma':
            //aca va lo importado
            op = await Promise.resolve().then(() => __importStar(require(calcular))).then(m => m.Suma);
            break;
        case 'resta':
            //aca va lo importado
            op = await Promise.resolve().then(() => __importStar(require(calcular))).then(m => m.Resta);
            break;
        default:
            return console.log(`${o} no es una operacion valida`);
    }
    return new op(numero1, numero2).resultado();
};
let operaciones = async (numero1, numero2, o) => {
    const resultado = await operacion(numero1, numero2, o);
    console.log(resultado);
};
operaciones(8, 2, 'resta');
