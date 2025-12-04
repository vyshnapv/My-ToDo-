import { useState } from "react";

function TodoInput({addTodo}){
    const [text,setText]=useState("");

    const handleSubmit =(e)=>{
        e.preventDefault();
        if(!text.trim()){
            return
        }

        addTodo(text);
        setText("")
    }

    return(
        <form onSubmit={handleSubmit} className="todo-input">
            <input 
               type="text" 
               placeholder="Enter todo..."
               value={text}
               onChange={(e)=>setText(e.target.value)}
            />

            <button>Add</button>
        </form>
    )
}


export default TodoInput;