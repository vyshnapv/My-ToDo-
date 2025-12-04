import TodoItem from "./TodoItem";

function TodoList({todos,deleteTodo,toggleTodo,editTodo}){
    return(
        <div className="todo-list">
          {todos.length===0 && <p>No todos yet!</p>}
          {todos.map((todo)=>(
            <TodoItem
              key={todo.id}
              todo={todo}
              deleteTodo={deleteTodo}
              toggleTodo={toggleTodo}
              editTodo={editTodo}
            />
          ))}
        </div>
    )
}

export default TodoList;