import React from 'react';

const Header = ({ score, bestScore }) => {
    return (
        <div className="heading">
            <h1 className="title">2048</h1>
            <div className="scores-container">
                <div className="score-container">{score}</div>
                <div className="best-container">{bestScore}</div>
            </div>
        </div>
    );
}

export default Header;
