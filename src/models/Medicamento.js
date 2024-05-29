class Medicamento{
    name
    price
    amount
    id
    constructor(name, price, amount){
        this.id = Math.floor(Math.random() * 9000) + 1000
        this.name = name
        this.price = price
        this.amount = amount
    }
}

export default Medicamento