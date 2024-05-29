import Medicamento from "../models/Medicamento.js";
import { bst } from "./dependencies.js";

/*let product = new Medicamento("paracetamol",124,30,965856)
bst.add(product)

let product2 = new Medicamento("angulo",130,30,965856)
bst.add(product2)
*/
let product3 = new Medicamento("brazo",51,30,965856)
bst.add(product3)

let product4 = new Medicamento("pierna",50,30,965856)
bst.add(product4)

console.log(bst)
let max = bst.max()
if(max!==null){
    console.log(max)
}
else{
    console.log("ARBOL VACIO")
}