import Medicamento from "../models/Medicamento.js";
import { bst } from "./dependencies.js";

let btnAdd = document.getElementById("btnAdd")
let btnSearch = document.getElementById("btnSearch")
let dataMax = document.getElementById("maxName")
let dataMin = document.getElementById("minName")
let cardContainer = document.getElementById("containerCard")

//let divInorder = document.getElementById("")
dataMax.textContent="Árbol vacío"
dataMin.textContent="Árbol vacío"
function showMaxProduct(div){
    dataMax.innerHTML=""
    let data = bst.max()
    divToDisplayElements(data,div)
}

function showMinProduct(div){
    dataMin.innerHTML=""
    let data = bst.min()
    divToDisplayElements(data,div)
}

btnAdd.addEventListener("click",()=>{
    let name = document.getElementById("nameAdd").value
    let price = document.getElementById("priceAdd").value
    let amount = document.getElementById("amountAdd").value
    let validation = document.getElementById("validation")
    validation.innerHTML=""
    validationAdd(name.toUpperCase(),price,amount,validation)

    //console.log(bst)
})

function validationAdd(name,price,amount,validation){
    if(name.trim().length!=0 && price.trim().length!=0 && amount.trim().length!=0){
        let medicamento = new Medicamento(name, price, amount)
        bst.add(medicamento)
        validation.style.color="#2bc88c"
        validation.textContent="EXITOSO"
        showMaxProduct(dataMax)
        showMinProduct(dataMin)
        inorderTravel()
    }
    else{
        validation.textContent="ERROR"
        validation.style.color = "#d5d564"
    }
}

btnSearch.addEventListener("click",()=>{
    let nombre = document.getElementById("nameSearch").value
    let validation = document.getElementById("valditionSearch")
    let divShow=document.getElementById("showProductFound")
    validation.innerHTML=""
    divShow.innerHTML=""
    let search = bst.search(nombre.toUpperCase())
    validationSearch(search, validation, divShow)
})

function validationSearch(data, validation, divShow){
    if(data!=null){
        validation.style.color = "#2bc88c"
        validation.textContent="Encontrado"
        divToDisplayElements(data,divShow)
    }
    else{
        validation.style.color = "#d5d564"
        validation.textContent="No encontrado"
    }
}

function divToDisplayElements(data,divShow){
    let idShow = document.createElement('h3')
    idShow.textContent = "Id: " + data.value.id
    let nombreShow = document.createElement('h3')
    nombreShow.textContent = "Nombre: " + data.value.name
    let priceShow = document.createElement('h3')
    priceShow.textContent = "Precio: " + data.value.price
    let amountShow = document.createElement('h3')
    amountShow.textContent = "Cantidad: " + data.value.amount
    divShow.appendChild(idShow)
    divShow.appendChild(nombreShow)
    divShow.appendChild(priceShow)
    divShow.appendChild(amountShow)
}

function inorderTravel(){
    cardContainer.innerHTML=""
    bst.inorder((data)=>{
        let card = document.createElement('div')
        card.classList.add('card-style')
        divToDisplayElements(data,card)
        cardContainer.appendChild(card)
    })
}
