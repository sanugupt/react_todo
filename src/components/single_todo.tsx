import React, { useEffect, useRef, useState } from "react";
import { Todo } from "./modal";
import { FiEdit } from "react-icons/fi";
import { AiFillDelete } from "react-icons/ai";
import { TiTick } from "react-icons/ti";
interface Props {
  item: Todo;
  todoData: Todo[];
  setTodoData: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export const Single_todo: React.FC<Props> = ({
  item,
  todoData,
  setTodoData,
}) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(item.todo);
  const inputRef=useRef<HTMLInputElement>(null);
  const handleDelete = (id: number) => {
    console.log("hello");
    setTodoData(todoData.filter((i) => i.id !== id));
  };
  const handleDone = (id: number) => {
    setTodoData(
      todoData.map((i) => (i.id === id ? { ...i, isDone: !i.isDone } : i))
    );
  };

  const handleEditList = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    console.log("hello")
    setTodoData(
      todoData.map((i) => (i.id === id ? { ...i, todo:editTodo } : i))
    );
    setEdit(false);
  };
useEffect(()=>{
inputRef.current?.focus();
},[edit])
  return (
    <form onSubmit={(e) => handleEditList(e, item.id)}>
      <div className="single_todo_block">
        {edit ? (
          <input
            value={editTodo}
            ref={inputRef} 
            onChange={(e) => setEditTodo(e.target.value)}
          />
        ) : item.isDone ? (
          <s>{item.todo} </s>
        ) : (
          <span>{item.todo} </span>
        )}

        <div className="single_icon">
          <FiEdit onClick={()=>{
               if (!edit && !item.isDone) {
                setEdit(!edit);
              }
          }} />
          <AiFillDelete onClick={() => handleDelete(item.id)} />
          <TiTick onClick={() => handleDone(item.id)} />
        </div>
      </div>
    </form>
  );
};
