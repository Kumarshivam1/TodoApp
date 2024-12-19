import {createContext, useContext} from 'react';

export const TodoContext = createContext({
    todo:[{
    id: 1,
    todo: "Complete Todo App",
    completed: false
    }],
    addTodo: (todo) => {},
    deleteTodo: (id) => {},
    updateTodo: (id,todo) => {},
    toggleComplete: (id) => {}

})

export const useTodo = () => {
    return (
        useContext(TodoContext)
    )
}

export const Todoprovider = TodoContext.Provider;