
import { writeFileSync , readFileSync } from "fs"
import { Product } from "./product.js"

export class AppProduct{
    constructor(){
        this.products=[]
        this.counter=0
        this.file="produit.json"
    }

    readProduct(){
        const contenu = readFileSync(this.file).toString()
        this.products = JSON.parse(contenu)
        this.counter = (this.products[this.products.length-1] != undefined) ? this.products[this.products.length-1].id : 0
    }

    writeProduct(){
        writeFileSync(this.file, JSON.stringify(this.products))
    }

    // creation Produit
    createProduct(title,price,stock){
        const product = new Product(++this.counter,title,price,stock)
        this.products.push(product)
        this.writeProduct()
    }

    // recup Produit par id 
    findProductById(id){
        return this.products.find(p => p.id == id)
    }
}
