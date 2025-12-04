import {useState} from "react";

function TodoItem({todo,deleteTodo,toggleTodo,editTodo}){
    const [isEditing,setIsEditing]=useState(false);
    const [text,setText]=useState(todo.text);

    const saveEdit=()=>{
        editTodo(todo.id,text);
        setIsEditing(false)
    };

    return(
        <div className="todo-item">
          <input 
             type="checkbox" 
             checked={todo.completed}
             onChange={()=>toggleTodo(todo.id)}
          />

          {isEditing?(
            <input
              className="edit-input"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          ):(
            <span className={todo.completed ? "completed" : ""}>{todo.text}</span>
          )}

          <div className="buttons">
             {isEditing?(
               <button className="edit-btn" onClick={saveEdit}>Save</button>
             ):(
               <button className="edit-btn" onClick={()=>setIsEditing(true)}>Edit</button>
             )}

             <button className="delete-btn" onClick={()=>deleteTodo(todo.id)}>Delete</button>
          </div>
        </div>
    )
}

export default TodoItem;

