import { Contact } from "./contact.js"
import fs from "fs"
import LineByLine from "n-readlines"


export class Data {
    constructor(){
        this.contacts = []
        this.compteur = 0
    }

    ajouterContact(nom , prenom,telephone, email) {
        const contact = new Contact(++this.compteur, nom , prenom,telephone, email)
        this.contacts.push(contact)
        fs.appendFileSync("data.csv",`${this.compteur};${nom};${prenom};${telephone};${email}\n`)
    }

    recupContact(id){
        return this.contacts.find(c => c.id == id)
    }

    modifierContact(id, nom, prenom,telephone,email){
        const contact = this.recupContact(id)
        if(contact != undefined){
            contact.nom = nom
            contact.prenom = prenom
            contact.telephone = telephone
            contact.email = email
            return true
        }
        return false
    }

    supprimerContact(id){
        const contact = this.recupContact(id)
        if(contact != undefined){
            this.contacts = this.contacts.filter(c => c.id != id)
            return true
        }
        return false
    }

    start(){
        this.contacts = []
        const lineReader = new LineByLine("data.csv")
        let line
        while(line = lineReader.next()){
            const donnees = line.toString().split(';')
            const contact = {id : +donnees[0] ,nom : donnees[1], prenom : donnees[2],telephone : donnees[3], email : donnees[4]}
            this.contacts.push(contact)
        }
        if(this.contacts.length != 0){
            this.compteur = this.contacts[this.contacts.length-1].id
        }

    }
}