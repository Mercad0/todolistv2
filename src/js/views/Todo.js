import React from "react";
import { FcOk } from "react-icons/fc";
import { Home } from "./home";


export const Todo = ({ text, todo, todos, setTodos }) => {
   const deleteTodo = () => {
      setTodos(todos.filter((e) => e.id !== todo.id));
    };
    return (
      <div className="todo-List">
        <li clasname="todo-item">{text}</li>
        <button onClick={deleteTodo} className="remove-btn">
          <FcOk />
        </button>
      </div>
    );
  };
  