import React, { useState } from 'react';

const App = () => {
    const [input, setInput] = useState('');
    const [currentId, setCurrentId] = useState(1);
    const [todo, setTodo] = useState([]);
    const [showOdd, setShowOdd] = useState(false);
    
    const onChange = (e) => {
        setInput(e.target.value);
    }

    const onAdd = () => {
        const newTodo = {id: currentId, desc: input};
        setCurrentId(currentId + 1);
        setTodo([...todo, newTodo]);
        setInput('');
    };

    const onDelete = (e) => {
        const deleteId = Number(e.target.dataset.id);
        const newTodo = todo.filter(todo => todo.id !== deleteId);
        setTodo(newTodo);
    }

    const onShowOdd = () => {
        setShowOdd(!showOdd);
    }

    return (
        <div>
            <h1>To-do-list</h1>
            <ul>
                {todo
                    .filter((_, idx) => (showOdd ? idx % 2 === 0 : true))
                    .map(todo => {
                    return (
                        <li key={todo.id}>
                            <span>{todo.id}번 {todo.desc} </span>
                            <button data-id={todo.id} onClick={onDelete}>Delete</button>
                        </li>    
                    )
                })}
            </ul>
            <div>
                <input type="text" value={input} onChange={onChange}/>
                <button onClick={onAdd}>add</button>
            </div>
            <div>
                <button onClick={onShowOdd}>
                    {showOdd ? '모두 다 보이게 하기' : '홀수만 보이게 하기'}
                </button>
            </div>
        </div>
    )
}

export default App;