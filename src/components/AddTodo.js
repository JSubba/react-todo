const AddTodo = ({ inputTodo, setInputTodo, enterTodo, addTodo }) => {
    return (
        <div className="add-todo">
            <input
                type="text"
                placeholder="✍ add your item"
                className="input-todo"
                value={inputTodo}
                onChange={(e) => setInputTodo(e.target.value)}
                onKeyUp={enterTodo}
            />
            <button className="add-btn" onClick={addTodo}>
                ➕
            </button>
        </div>
    );
};

export default AddTodo;
