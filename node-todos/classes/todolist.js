import { Todo } from "./todo.js"

export class Todolist {
    constructor(){
        this.todoLists = []
        this.compteur= 0
        this.status = false

    }

    addTodo(title,container){
        const todo = new Todo(++this.compteur, title,container,this.status)
        this.todoLists.push(todo)
    }

    retreiveTodo(id){
        return this.todoLists.find(t=> t.id == id)
    }

    editTodo(id,title,container){
        const todo = this.retreiveTodo(id)
        if(todo != undefined){
            todo.title=title
            todo.container=container
            return true
        }
        return false
    }

    editStatus(id){
        const todo = this.retreiveTodo(id)
        if(todo != undefined){
            todo.status = !todo.status
            return true
        }
        return false
    }


    deleteTodo(id){
        const todo = this.retreiveTodo(id)
        if(todo != undefined){
            this.todoLists= this.todoLists.filter(t=>t.id != id)
            return true
        }
        return false
    }
}