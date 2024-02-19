import React from "react";
import styles from "./index.module.css"

function AddTodo() {
    let todo;
    
    

    function collectInput(event) {
        // console.log(event.target.value);
        todo = event.target.value;

    }
    function saveTodo() {
        // get existing list of todos from local storage
        let todos = JSON.parse (localStorage.getItem("TODO_KEY")) || [];

        // add new todo to existing list of todos
        todos.push(todo);
        // set all todos in local storage
        // console.log(todo);
        localStorage.setItem("TODO_KEY", JSON.stringify
        (todos));
    }
    

    return (
        <section className={styles.addTodo}>
            <input 
            onChange={collectInput}
    
            className={styles.addTodoInput} 
            placeholder="Start typing..."/>

            <button onClick= {saveTodo}
             className={styles.buttonS}>Create</button>
        </section>
    );
}
export default AddTodo;