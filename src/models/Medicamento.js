class Medicamento{
    name
    price
    amount
    mg
    id
    constructor(name, price, amount, mg){
        this.id = Math.floor(Math.random() * 9000) + 1000
        this.name = name
        this.price = price
        this.amount = amount
        this.mg = mg
    }
}

export default Medicamento