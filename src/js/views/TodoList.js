import React from "react";
import { Todo } from "./Todo";

export const TodoList = ({ todos, setTodos }) => {
  return (
    <div className="todoBox">
      <ul>
        {todos.map((todo) => (
          <Todo
            setTodos={setTodos}
            todos={todos}
            text={todo.text}
            id={todo.id}
            key={todo.id}
            todo={todo}
          />
        ))}
      </ul>
    </div>
  );
};
