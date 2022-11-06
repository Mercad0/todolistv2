import React, { useState } from "react";
import "../../styles/home.css";
import { TodoList } from "./TodoList";
import { Form } from "./Form";

export const Home = () => {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className="text-center">
      <div className="todoListBox">
        <header>
          <h1> To Do List</h1>
        </header>
        <Form
          setInputText={setInputText}
          inputText={inputText}
          setTodos={setTodos}
          todos={todos}
        />
        <div className="todoAI">
          <TodoList setTodos={setTodos} todos={todos} />
          <span class="pink">
            {" "}
            Todos Left: <span class="itemsLeft">{"" + todos.length}</span>{" "}
          </span>
        </div>
      </div>
    </div>
  );
};

// function countTodos () {
//   if (todos.length = 0 )
//   }
