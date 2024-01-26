import React, { useState } from "react";

function InputArea({ todo, setTodo }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const submitBtnHandler = (event) => {
    event.preventDefault();
    if (!title || !content) {
        alert("제목과 내용을 모두 입력해 주세요.");
    } else {
        const todoItem = {
            id: Date.now(),
            title,
            content,
            isDone: false,
          };
      setTodo([...todo, todoItem]);
      setTitle("");
      setContent("");
    }
  }
 
  return (
    <>
      <form className="text-align-center padding-10" onSubmit={submitBtnHandler}>
        제목: <input value={title} onChange={(event) => setTitle(event.target.value)}/>
        내용: <input value={content} onChange={(event) => setContent(event.target.value)}/>
        <button type="submit">등록하기</button>
      </form>
      <hr />
    </>
  );
}

export default InputArea;