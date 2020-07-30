import React, { Component } from 'react'
import TodoItem from './TodoItem'

class TodoList extends Component {
    render() {
        const {items,clearList,handleDelete,handleEdit} = this.props
        return (
            <div>
                <ul className="list-group my-5">
                    <h3 className="text-capitalize text-center">Todo list</h3>
{
    //javascript for grabbing the items which we got   (46:33 doubt near key), task.item is actually title of the todo task
    items.length?
    items.map(task => {
        return(
            <TodoItem 
            key={task.id} 
            title={task.item} 
            handleDelete={() => handleDelete(task.id)}
            handleEdit={() => handleEdit(task.id)}           
            />
        )
    }):
    <p className="text-center mt-5">Nothing to show right now, add any item</p>
}
                    <button onClick={clearList} className="btn btn-danger text-capitalize mt-5">clear list</button>
                </ul>
            </div>
        )
    }
}

export default TodoList 


//handleDelete cannot be directly written as {handleDelete(task.id)} because this will call the function, which we do not want, so we
//pass an arrow function which calls the handleDelete function with id passed as task.id