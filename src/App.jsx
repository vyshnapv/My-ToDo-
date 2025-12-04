import { useState,useEffect } from 'react'
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [todos,setTodos]= useState(()=>{
    const saved=localStorage.getItem("todos");
    return saved?JSON.parse(saved):[];
  })

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])

  const addTodo=(text)=>{
    setTodos([...todos,{id:crypto.randomUUID(),text,completed:false}])
  };

  const deleteTodo =(id)=>{
    setTodos(todos.filter((todo)=>todo.id!==id))
  }

  const toggleTodo =(id)=>{
    setTodos(
      todos.map((todo)=>
        todo.id === id?{...todo,completed:!todo.completed}:todo
      )
    );
  };

  const editTodo = (id,newText)=>{
    setTodos(
      todos.map((todo)=>
        todo.id===id?{...todo,text:newText}:todo
      )
    );
  };

 return (
      <div className="app">
        <h1>Todo App</h1>
        <TodoInput addTodo={addTodo}/>
        <TodoList
          todos={todos}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
          editTodo={editTodo}
        />
      </div>
  );
}

export default App
