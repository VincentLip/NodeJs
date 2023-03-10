import { AppClient } from "./classes/client/appClient.js";
import express from "express"
import { AppProduct } from "./classes/product/appProduct.js";
import { AppOrder } from "./classes/order/appOrder.js";

const dataclient = new AppClient()
const dataproduct = new AppProduct()
const dataorder = new AppOrder()

const api = express()

api.use(express.json())

//****************************************************************/
//******************Client****************************************/
//****************************************************************/

//Enpoint creation client
api.post('/client', (req,res) => {
    const {lastname,firstname,phone} = req.body
    if( lastname != undefined && firstname != undefined && phone != undefined){
        dataclient.createClient(lastname,firstname,phone)
        res.json({message : "client ajouté"})
    }else {
        res.json({message : "Merci de transmettre un nom / prenom et telephone"})
    }
})

// Endpoint pour récuperer tous les clients
api.get('/client', (req,res) => {
    res.json(dataclient.clients)
})

// Endpoint pour recuperer un seul client
api.get('/client/:id', (req,res) => {
    const client = dataclient.findClientById(req.params.id)
    if( client != undefined){
        res.json(client)
    }else {
        res.json({message : "client introuvable"})
    }
})

//****************************************************************/
//******************Produit***************************************/
//************************************************************** */

//Enpoint creation client
api.post('/produit', (req,res) => {
    const {title,price,stock} = req.body
    if( title != undefined && price != undefined && stock != undefined){
        dataproduct.createProduct(title,price,stock)
        res.json({message : "produit ajouté"})
    }else {
        res.json({message : "Merci de transmettre un titre / prix et stock"})
    }
})

// Endpoint pour récuperer tous les clients
api.get('/produit', (req,res) => {
    res.json(dataproduct.products)
})

// Endpoint pour recuperer un seul client
api.get('/produit/:id', (req,res) => {
    const product = dataproduct.findProductById(req.params.id)
    if( product != undefined){
        res.json(product)
    }else {
        res.json({message : "produit introuvable"})
    }
})

//****************************************************************/
//******************Commande****************************************/
//****************************************************************/

//Enpoint creation commande
api.post('/commande', (req,res) => {
    
    if(dataclient.clients != 0 && dataproduct.products !=0){
        for(let i=0 ; i < dataclient.clients.length ; i++){
            if(dataclient.clients[i].lastname === req.body.lastname 
            && dataclient.clients[i].firstname === req.body.firstname
            && dataclient.clients[i].phone === req.body.phone){
                
                dataorder.createOrder(dataclient.clients[i])
                res.json({message : "Client ajouté à la commande"})

                // for(let j=0 ; j < dataproduct.products.length ; j++){
                //     if(dataproduct.products[j].title === req.body.title 
                //     && dataproduct.products[j].price === req.body.price
                //     && dataproduct.products[j].stock === req.body.stock){
                //         console.log(req.body)
                //         }

                // }

            }else{
                res.json({message : "Le client n'existe pas"})
            }
            
        }
    }else{
        res.json({message : "Pas de client pour effectuer une commande"})
    }

})

// Endpoint pour récuperer toutes les commandes
api.get('/commande', (req,res) => {
    res.json(dataorder.orders)
})

// Endpoint pour recuperer une seule commande
api.get('/commande/:id', (req,res) => {
    const order = dataorder.findOrderById(req.params.id)
    if( order != undefined){
        res.json(order)
    }else {
        res.json({message : "commande introuvable"})
    }
})


api.listen(3000, () => {
    dataclient.readClient()
    dataproduct.readProduct()
    dataorder.readOrder()
    console.log("go")
})