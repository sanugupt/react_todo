import React from "react";
import { Todo } from "./modal";
import { Single_todo } from "./single_todo";
interface Props {
  todoData: Todo[];
  setTodoData: React.Dispatch<React.SetStateAction<Todo[]>>;
}
export const TodoAllList: React.FC<Props> = ({ todoData, setTodoData }) => {
  return (
    <div className="todoall_data_block">
    
        {todoData.map((i) => {
          return (
            <Single_todo
              item={i}
              key={i.id}
              todoData={todoData}
              setTodoData={setTodoData}
            />
          );
        })}
   
    </div>
  );
};
