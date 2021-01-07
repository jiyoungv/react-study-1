import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const Home = () => <h6>Home</h6>;
const Page1 = () => <h6>Page1</h6>;
const Page2 = () => <h6>Page2</h6>;

const App = () => {
    const [page, setPage] = useState('');

    useEffect( () => {
        window.onpopstate = (event) => {
            // console.log(`location: ${document.location}, state: ${event.state}`);
            setPage(event.state);
        };
    }, []);

    const onClick1 = () => {
        const page = 'page1';
        window.history.pushState(page, '', '/page1');
        setPage(page);
    }

    const onClick2 = () => {
        const page = 'page2';
        window.history.pushState(page, '', '/page2');
        setPage(page);
    }    

    return (
        <div>
            <button onClick={onClick1}>페이지 1번</button>
            <button onClick={onClick2}>페이지 2번</button>
            {!page && <Home /> }
            {page === 'page1' && <Page1 /> }
            {page === 'page2' && <Page2 /> }
        </div>
    )
}


ReactDOM.render(
    <App />,
    document.querySelector('#root')
);