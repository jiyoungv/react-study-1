import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Button from './Button.js';

const Container = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <Button/>
            <div style={{marginTop: 50}}>
                <span>카운트: </span>
                <span style={{marginRight: 10}}>{count}</span>
                <button onClick={() => setCount(count + 1)}>증가</button>
                <button onClick={() => setCount(count - 1)}>감소</button>
            </div>
        </div>
    );
}

ReactDOM.render(
    <Container/>,
    document.querySelector('#root')
);