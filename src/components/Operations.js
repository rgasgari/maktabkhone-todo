import React, { Component } from 'react';
import todoStore from '../stores/TodoStore';
import {observer} from 'mobx-react';

@observer
class Operations extends Component {

    filterCompleted(){
        todoStore.filterCompleted()
    }

    filterActives(){
        todoStore.filterActives()
    }

    getAll(){
        todoStore.populateList()
    }

    clearCompleted(){
        todoStore.clearCompleted()
    }

    render(){
        return (
            <footer className="footer">
                <span className="todo-count"><strong>{todoStore.remainedCount}</strong> item left</span>
                <ul className="filters">
                    <li>
                        <a className="selected" href="#/" onClick={ () => this.getAll() }>All</a>
                    </li>
                    <li>
                        <a href="#/active" onClick={ () => this.filterActives() }>
                            Active
                        </a>
                    </li>
                    <li>
                        <a href="#/completed" onClick={ () => this.filterCompleted() }>
                            Completed
                        </a>
                    </li>
                </ul>
                <button className="clear-completed" onClick={ () => this.clearCompleted() }>Clear completed</button>
            </footer>
        )
    }
}

export default Operations;