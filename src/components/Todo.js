import { useState } from "react";
import AddTodo from "./AddTodo";
import RemoveButton from "./RemoveButton";
import ShowTodo from "./ShowTodo";
import "./style.css";

const Todo = () => {
    const [inputTodo, setInputTodo] = useState("");
    const [todos, setTodos] = useState([]);
    const [todoEdit, setTodoEdit] = useState();
    const [toggleEdit, setToggleEdit] = useState(false);

    const enterTodo = (event) => {
        if (event.keyCode === 13) {
            event.preventDefault();
            document.querySelector(".add-btn").click();
        }
    };

    const addTodo = () => {
        if (!inputTodo) {
            alert("Add your Todo");
        } else if (inputTodo.length && toggleEdit) {
            setTodos(
                todos.map((todo) => {
                    if (todo.id === todoEdit) {
                        return { ...todo, name: inputTodo };
                    } else {
                        return todo;
                    }
                })
            );
            setInputTodo([]);
            setTodoEdit();
            setToggleEdit(false);
        } else {
            const newInputTodo = {
                id: Math.floor(Math.random() * 1000) + 1,
                name: inputTodo,
            };

            setTodos([...todos, newInputTodo]);
            setInputTodo("");
        }
    };

    const editTodo = (id) => {
        const toEdit = todos.find((todo) => {
            return todo.id === id;
        });
        setInputTodo(toEdit.name);
        setTodoEdit(id);
        setToggleEdit(true);
    };

    const deleteTodo = (id) => {
        const toDeleteTodo = todos.filter((todo) => {
            return todo.id !== id;
        });
        setTodos(toDeleteTodo);
    };

    const removeAll = () => {
        const deleteAll = window.confirm("Delete all Todos?");
        deleteAll && setTodos([]);
    };

    return (
        <>
            <div className="container">
                <AddTodo
                    inputTodo={inputTodo}
                    setInputTodo={setInputTodo}
                    enterTodo={enterTodo}
                    addTodo={addTodo}
                    editTodo={editTodo}
                />
                <ShowTodo
                    todos={todos}
                    editTodo={editTodo}
                    deleteTodo={deleteTodo}
                />
                <RemoveButton removeAll={removeAll} />
            </div>
        </>
    );
};

export default Todo;
