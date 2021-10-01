const RemoveButton = ({ removeAll }) => {
    return (
        <div>
            <button className="remove-btn" onClick={removeAll}>
                Remove All
            </button>
        </div>
    );
};

export default RemoveButton;
