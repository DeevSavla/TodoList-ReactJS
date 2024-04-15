import { createContext,useContext } from "react";

export const TodoContext = createContext({
    todos:[
        {
            id:1,
            todo:"Todo msg",
            completed:false,
        }
    ],
    addTodo:(todo)=>{},
    updateTodo:(id,todo)=>{},
    //you will the id of which todo to edit and also the previous data.
    deleteTodo:(id)=>{},
    toggleComplete:(id)=>{}
})
//by default it should have a null object {}

export const useTodo=()=>{
    return useContext(TodoContext)
}
//useContext needs an context on which you are doing your work

export const TodoProvider = TodoContext.Provider