import { Client } from "./client.js"
import { writeFileSync , readFileSync } from "fs"

export class AppClient{
    constructor(){
        this.clients=[]
        this.counter=0
        this.file="client.json"
    }

    readClient(){
        const contenu = readFileSync(this.file).toString()
        this.clients = JSON.parse(contenu)
        this.counter = (this.clients[this.clients.length-1] != undefined) ? this.clients[this.clients.length-1].id : 0
    }

    writeClient(){
        writeFileSync(this.file, JSON.stringify(this.clients))
    }

    // creation Client
    createClient(lastname,firstname,phone){
        const client = new Client(++this.counter,lastname,firstname,phone)
        this.clients.push(client)
        this.writeClient()
    }

    // recup client par id 
    findClientById(id){
        return this.clients.find(c => c.id == id)
    }
}
