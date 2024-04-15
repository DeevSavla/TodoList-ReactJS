import React, { useState } from "react";
import { useTodo } from "../Context/TodoContext";

function TodoForm(){
    const [todo,setTodo]=useState("")
    const {addTodo} = useTodo()
    const add = (e)=>{
        e.preventDefault()
        if(!todo){
            return
        }
        else{
            //todo:todo can be written as todo as both field and values have same name.
            addTodo({todo,completed:false})
            // Reset the `todo` variable to an empty string after adding the todo
            setTodo("")
        }
    }
    return(
        <form onSubmit={add} className="flex">
            <input 
                type="text"
                placeholder="Write Todo"
                className="w-full border px-3 py-1.5 text-black"
                //this is called wiring.
                value={todo}
                onChange={(e)=>setTodo(e.target.value)}
            />
            <button type="submit" className="rounded-lg text-white px-3 py-1 bg-green-600">
                Add
            </button>
        </form>
    )
}
export default TodoForm