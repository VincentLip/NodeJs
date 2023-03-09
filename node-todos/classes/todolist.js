import { Todo } from "./todo.js"
import {writeFileSync, readFileSync} from "fs"

export class Todolist {
    constructor(){
        this.todoLists = []
        this.compteur= 0
        this.status = false

    }

    addTodo(title,content){
        const todo = new Todo(++this.compteur, title,content,this.status)
        this.todoLists.push(todo)
        writeFileSync("data.json",JSON.stringify(this.todoLists))

    }

    retreiveTodo(id){
        return this.todoLists.find(t=> t.id == id)
    }

    editTodo(id,title,content){
        const todo = this.retreiveTodo(id)
        if(todo != undefined){
            todo.title=title
            todo.content=content
            writeFileSync("data.json",JSON.stringify(this.todoLists))
            return true
        }
        return false
    }

    editStatus(id){
        const todo = this.retreiveTodo(id)
        if(todo != undefined){
            todo.status = !todo.status
            writeFileSync("data.json",JSON.stringify(this.todoLists))
            return true
        }
        return false
    }

    deleteTodo(id){
        const todo = this.retreiveTodo(id)
        if(todo != undefined){
            this.todoLists= this.todoLists.filter(t=>t.id != id)
            writeFileSync("data.json",JSON.stringify(this.todoLists))
            return true
        }
        return false
    }

    findTodo(search){

        return this.todoLists.filter(t => t.title.includes(search))
    }


}