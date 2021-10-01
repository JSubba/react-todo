const ShowTodo = ({ todos, editTodo, deleteTodo }) => {
    return (
        <div className="show-todo">
            {todos.map((todo) => {
                return (
                    <div key={todo.id}>
                        <div className="each-todo">
                            <h3>{todo.name}</h3>
                            <div className="wrapper">
                                <button onClick={() => editTodo(todo.id)}>
                                    ✏️
                                </button>
                                <span>
                                    <button onClick={() => deleteTodo(todo.id)}>
                                        ❌
                                    </button>
                                </span>
                            </div>
                        </div>
                        <div className="space"></div>
                    </div>
                );
            })}
        </div>
    );
};

export default ShowTodo;
