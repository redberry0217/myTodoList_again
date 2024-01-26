import './App.css';
import InputArea from './components/InputArea';
import TodoList from './components/TodoList';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {
  const [todo, setTodo] = useState([]);
  return (
    <>
    <InputArea todo={todo} setTodo={setTodo}></InputArea>
    <TodoList todo={todo} setTodo={setTodo}></TodoList>
    <Footer />
    </>
  );
}

export default App;
