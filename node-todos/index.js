
import express from "express"
import { Todolist } from "./classes/todolist.js"


const todoList = new Todolist

const app = express()

app.use(express.json())

app.get('/todolist',(req,res)=>{

    res.json(todoList.todoLists)
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

app.get('/search',(req,res)=> {
    if(todoList.findTodo(req.body)){
        res.json({message : "todo  trouvé"})
    }else{
        res.json({message:"todo introuvable"})
    }
})

app.post('/todolist',(req,res)=>{
    const {title,content,status} =req.body
    todoList.addTodo(title,content,status)
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