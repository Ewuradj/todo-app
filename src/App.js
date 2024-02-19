import React from "react";
import Header from "./components/header";
import AddTodo from "./components/add-todo";
import TodoList from "./components/todo-List";

function App() {
  return(
    <React.Fragment>
      <Header/>
      <AddTodo/>
      <TodoList/>
    </React.Fragment>
  );
  
}

export default App;
