// import React from "react";
import styles from "./index.module.css";
import {useLocalStorage} from 'usehooks-ts';
import {useState} from "react";

function AddTodo() {
    const [todos, setTodos] = useLocalStorage
    ("TODO_KEY", []);
    // let todo;
    const [todo, setTodos] = useState("");
    
    

    function collectInput(event) {
        // todo = event.target.value;
        setTodo(event.target.value)

        // console.log(event.target.value);

    }
    const collectInput = (event) =>{
        setTodo(event.target.value);
    }
    function saveTodo() {
        let todos = JSON.parse (localStorage.getItem("TODO_KEY")) || [];
        // get existing list of todos from local storage

        // add new todo to existing list of todos
        // todos.push(todo);
        // set all todos in local storage
        // console.log(todo);
        setTodos([...todos, todo]);
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