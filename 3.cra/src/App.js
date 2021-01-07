import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import data from './data.json';

const App = () => {
    const [isShow, setIsShow] = useState(false);
    const [btnMsg, setBtnMsg] = useState(false);

    const onClick = () => {
        setIsShow(!isShow);
        setBtnMsg(!btnMsg);
    }

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <button onClick={onClick}>
                    {btnMsg ? 
                    `봤으면 다시 눌러주세요`
                    : `지금 뭐하고 있나요? 😮`}
                </button>
                <p>
                    {isShow ? 
                    `${data.name}은 ${data.study}를 사용해보고 있습니다! ` +
                    `${data.message}` 
                    : `버튼 눌러보세요`}
                </p>
                
            </header>
        </div>
    );
}

export default App;
