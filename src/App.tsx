import React, { useRef } from "react";
import logo from "./logo.svg";
import "./assets/css/all.css";
import { useState } from "react";
import { InputField } from "./components/input_fields";
import { Todo } from "./components/modal";
import { TodoAllList } from "./components/todo_All_List";

const App: React.FC = () => {
  const [todolist, setTodoList] = useState<string>("");
  const [todoData, setTodoData] = useState<Todo[]>([]);
  console.log(todolist);
  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todolist) {
      setTodoData([
        ...todoData,
        { id: Date.now(), todo: todolist, isDone: false },
      ]);
      setTodoList("");
    }
  };

  console.log(todoData);
  return (
    <>
      <section className="taskify_container">
        <div className="taskify_sec">
          <h2 className="heading">Taskify</h2>
          <InputField
            todolist={todolist}
            setTodoList={setTodoList}
            handleAdd={handleAdd}
          />
          <TodoAllList 
          todoData={todoData} 
          setTodoData={setTodoData} 
          />
        </div>
      </section>
    </>
  );
};

export default App;
