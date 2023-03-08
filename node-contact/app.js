const express = require('express');

const app = express()

const contact = [];


app.use(express.json())

app.get('/data/',(req,res)=>{
    res.json(contact);
    
    
});

app.get('/data/:number',function(req,res){

    if(req.params.number == contact[req.params.number].id){
        res.json(contact[req.params.number])
    }
})

app.post('/',(req,res)=>{

    contact.push(req.body)
    res.json(req.body)
})

app.put('/data/:number',function(req,res){

    if(req.params.number == contact[req.params.number].id){
        res.send(contact.splice(req.params.number,1,req.body))
    }
})

app.delete('/data/:number',function(req,res){

    if(req.params.number == contact[req.params.number].id){
        res.send(contact.splice(req.params.number,1))
    }
})


app.listen(3000,function(){
    console.log('app.js ecoute sur port 3000')
})