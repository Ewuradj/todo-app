import React from "react";
import Header from "./components/header";
import AddTodo from "./components/add to do";
import TodoList from "./components/to do list";

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
