import { useState,useRef } from "react";

interface Props{
todolist:string;
setTodoList:React.Dispatch<React.SetStateAction<string>>
handleAdd:(e:React.FormEvent)=>void;
}
export const InputField:React.FC<Props>=({todolist, setTodoList,handleAdd})=>{
    const inputRef=useRef<HTMLInputElement>(null);

    return(
        <>
        <form onSubmit={(e)=>{handleAdd(e); inputRef.current?.blur()}}>
        <div className="input_block">
            <input type="text" ref={inputRef} placeholder="Enter a task" className="input_sec" value={todolist} onChange={(e)=>setTodoList(e.target.value)}/>
            <button className="go_btn" type="submit">Go</button>
        </div>
        </form>
     
        </>
    )
}