import {observable, action} from 'mobx';
import TodoModel from './TodoModel'

class TodoStore {
    allTodos = new Map([]);
    lastID = 0;
    @observable observableTodos = new Map([]);
    @observable remainedCount = 0 // number of non-completed items

    @action
    addTodo(title){
        this.allTodos.set((this.lastID).toString(),new TodoModel(this,title,false,this.lastID++));
        this.increaseCount();
        this.populateList();
    }

    @action
    removeTodo(id){
        if(!this.allTodos.get(id.toString()).isCompleted)
            this.decreaseCount();

        this.allTodos.delete(id.toString());
        this.populateList();
    }

    @action
    filterCompleted(){
        this.observableTodos = new Map(
            [...this.allTodos].filter(
                ([id,todo]) => todo.isCompleted)
        );
    }

    @action
    filterActives(){
        this.observableTodos = new Map(
            [...this.allTodos].filter(
                ([id,todo]) => !todo.isCompleted)
        )
    }

    @action
    populateList(){
        this.observableTodos = new Map([...this.allTodos]);
    }

    @action
    clearCompleted(){
        this.allTodos = new Map(
            [...this.allTodos].filter(
                ([id,todo]) => !todo.isCompleted)
        )
        this.populateList();
    }

    @action
    increaseCount(){
        this.remainedCount++;
    }

    @action
    decreaseCount(){
        this.remainedCount--;
    }


}

const todoStore = new TodoStore();
export default todoStore;