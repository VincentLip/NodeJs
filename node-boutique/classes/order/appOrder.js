
import { writeFileSync , readFileSync } from "fs"
import { Order } from "./order.js"

export class AppOrder{
    constructor(){
        this.orders=[]
        this.counter=0
        this.file="order.json"
    }

    readOrder(){
        const contenu = readFileSync(this.file).toString()
        this.orders = JSON.parse(contenu)
        this.counter = (this.orders[this.orders.length-1] != undefined) ? this.orders[this.orders.length-1].id : 0
    }

    writeOrder(){
        writeFileSync(this.file, JSON.stringify(this.orders))
    }

    // creation Client
    createOrder(client,product){
        const order = new Order(++this.counter,client,product)
        console.log(order)
        this.orders.push(order)
        this.writeOrder()
    }

    // recup client par id 
    findOrderById(id){
        return this.clients.find(o => o.id == id)
    }
}
