
import express from "express"
import { Todolist } from "./classes/todolist.js"
import {writeFileSync , readFileSync} from "fs"


const todoList = new Todolist()

const app = express()

app.use(express.json())

app.get('/todolist',(req,res)=>{

    const contenu = readFileSync("data.json").toString()

    res.json(JSON.parse(contenu))
})

app.get('/todolist/:id',(req,res)=>{
    const todo = todoList.retreiveTodo(req.params.id)
    if(todo != undefined){
        res.json(todo)
    }else{
        res.json({message : "aucune todo trouvé"})
    }
})

app.put('/todolist/:id',(req,res)=> {
    const {title,content} =req.body
    if(todoList.editTodo(req.params.id,title,content)){
        res.json({message : "todo modifié"})
    }else{
        res.json({message:"erreur modification"})
    }
})

app.put('/todolist/:id/status',(req,res)=> {
    if(todoList.editStatus(req.params.id)){
        res.json({message : "status modifié"})
    }else{
        res.json({message:"erreur modification"})
    }
})

app.get('/todolist/search/:search',(req,res)=> {
    res.json(todoList.findTodo(req.params.search))
})

app.post('/todolist',(req,res)=>{
    const {title,content} =req.body
    todoList.addTodo(title,content)
    res.json({message :"todo ajoutée"})

})

app.delete('/todolist/:id',(req,res)=> {
    if(todoList.deleteTodo(req.params.id)){
        res.json({message :"todo supprimée"})
    }else{
        res.json({message: "erreur"})
    }
})

app.listen(3000,()=>{
    console.log("go")
})