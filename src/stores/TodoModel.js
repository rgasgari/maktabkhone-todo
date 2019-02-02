import {observable, action} from 'mobx';

export default class TodoModel {
    store
    id
    @observable title
    @observable isCompleted

    constructor(store, title, isCompleted, id){
        this.id = id;
        this.title = title;
        this.isCompleted = isCompleted;
        this.store = store;
    }

    @action
    toggle(){
        this.isCompleted = !this.isCompleted;
    }
}