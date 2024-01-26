import React from "react";

function Todo({ todo, setTodo }) {

    const deleteBtnHandler = (id) => {
        const shouldDelete = window.confirm("Todo를 삭제하시겠습니까?")
        if (shouldDelete) {
            setTodo((prevTodo) => {
                const newTodoList = prevTodo.filter((todo) => todo.id !== id);
                return newTodoList;
            });
        }
    }
    const toggleDoneHandler = (item, isDone) => {
        setTodo((prevTodo) => {
            const updatedTodo = prevTodo.map((todo) =>
                todo.id === item.id ? { ...todo, isDone: !todo.isDone } : todo
            );
            return updatedTodo;
        });
    }
  
  return (
    todo.map(function (item) {
      return (
        <div key={item.id} className="todoList">
          <div className="itemBox">
            <h3 className="title_textStyle">{item.title}</h3>
            <p>{item.content}</p>
            <div>
              <button onClick={() => deleteBtnHandler(item.id)}>삭제하기</button>
              <button onClick={() => {
                if(item.isDone) {
                  toggleDoneHandler(item, true) 
                }else{
                  toggleDoneHandler(item, false)
                }}}>{!item.isDone ? "완료하기" : "취소하기"}</button>
            </div>
          </div>
        </div>
      );
    })
  );
}

export default Todo;