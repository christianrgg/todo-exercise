import { Todo } from "./todo.class";

export class TodoList {
    
    constructor() {
        // this.todos = [];
        this.cargarLocalStorage();
    }

    nuevoTodo(todo){
        this.todos.push(todo);
        this.guardarLocaltSorage();
    }

    eliminarTodo(id){
       this.todos = this.todos.filter(todo => todo.id != id);
       this.guardarLocaltSorage();
    }

    marcarCompletado(id){
        for (const todo of  this.todos) {
            
            console.log(id, todo.id)

            if(todo.id == id) {
                todo.completado = !todo.completado;
                this.guardarLocaltSorage();
                break
            }
        }
    }

    eliminarCompletados(){
        this.todos = this.todos.filter(todo => !todo.completado)
    }

    guardarLocaltSorage(){
        localStorage.setItem(`todo`, JSON.stringify(this.todos));
    }

    cargarLocalStorage(){
        this.todos = (localStorage.getItem(`todo`))
                     ? JSON.parse(localStorage.getItem(`todo`))
                     :[];

        this.todos = this.todos.map(obj => Todo.fromJson(obj));
    }
}