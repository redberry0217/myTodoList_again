import React from "react";
import Todo from "./Todo";

function TodoList({ todo, setTodo }) {
    const todoItemList = todo.filter((item) => !item.isDone)
    const doneItemList = todo.filter((item) => item.isDone)
    
  return (
    <section className="padding-10 marginBottom-30">
        <h3>To do</h3>
        {todoItemList.length === 0 ? (
          '아직 등록된 todo가 없습니다.'
        ) : (
          <Todo todo={todoItemList} setTodo={setTodo}/>
        )}
        <h3>Done</h3>
        {doneItemList.length === 0 ? (
          '아직 완료된 todo가 없습니다.'
        ) : (
          <Todo todo={doneItemList} setTodo={setTodo}/>
        )}
    </section>
  );
}

export default TodoList;
