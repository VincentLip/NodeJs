import express from "express"
import { Data } from "./classes/data.js"
import fs from "fs"




const data = new Data()

const app = express()

app.use(express.json())



app.get('/contacts',(req,res) => {
        data.start();
        res.json(data.contacts)
    
})

app.get('/contacts/:id',(req,res) => {
    const contact = data.recupContact(req.params.id)
    if(contact != undefined) {
        res.json(contact)
    }else {
        res.json({message : "aucun contact avec cet id"})
    }
})

app.put('/contacts/:id',(req,res) => {
    const {nom, prenom, telephone,email} = req.body
    if(data.modifierContact(req.params.id,nom, prenom, telephone,email)) {
        res.json({message : "contact modifié"})
        fs.appendFileSync("data.csv",`${req.params.id};${nom};${prenom};${telephone};${email}\n`)
    }else {
        res.json({message : "erreur modification"})
    }

})

app.post('/contacts',(req,res) => {
    const {nom, prenom, telephone,email} = req.body

    data.ajouterContact(nom, prenom, telephone,email)
    res.json({message : "contact ajouté"})
})

app.delete('/contacts/:id',(req,res) => {
    if(data.supprimerContact(req.params.id)) {
        res.json({message : "contact supprimé"})
    }else {
        res.json({message : "erreur"})
    }
})


app.listen(3000, () => {
    console.log("go")
})
