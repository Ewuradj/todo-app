import {useState, useEffect} from "react";
import { useLocalStorage } from 'usehooks-ts'


function TodoList() {
    // let todos = ["Take fufu", "Take ginger"];
    // let todos = [];
    const [todos, setTodos] = useLocalStorage("TODO_KEY", []);


    // function getTodos() {
    //     // get all todos from storage and store it.
    //     let todos = JSON.parse(localStorage.getItem
    //         ("TODO_KEY")) || [];
    //     // update React state
    //     setTodos(todos);
    // }

    // useEffect(getTodos, []);


    return (
        <div >

            <ul>
                {todos.map(function (todo, index) {
                    return <li key={index}>{todo}</li>
                })}

            </ul>

        </div>
    );


}
export default TodoList;