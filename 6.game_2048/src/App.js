import React, { useEffect, useState } from 'react';
import AboveGame from './component/AboveGame';
import Game from './component/Game';
import Header from './component/Header';
import useLocalStorage from './hook/useLocalStorage';

const App = () => {
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useLocalStorage('bestScore', 0);

    useEffect(() => {
        if (score > bestScore) {
            setBestScore(score);
        }
    })

    return (
        <div className="container">
            <Header score={score} bestScore={bestScore}/>
            <AboveGame />
            <Game setScore={setScore}/>
        </div>
    );
}

export default App;
