import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const Home = () => <h6>Home</h6>;
const Page1 = () => <h6>Page1</h6>;
const Page2 = ({ match }) => {
    return (
        <div>
            <ul>
                <li><Link to={`${match.url}/one`}>1번</Link></li>
                <li><Link to={`${match.url}/two`}>2번</Link></li>
            </ul>
            <div>
                <Route exact path={match.url} render={() => <p>여기는 page2 입니다.</p>} />
                <Route path={`${match.url}/:etcId`} component={Etc} />
            </div>
        </div>
    )
};
const Etc = ({ match }) => {
    return (
        <p>{`page2번에 파라미터는 ${match.params.etcId}`}</p>
    )
};

const App = () => {
    return (
        <BrowserRouter>
            <nav>
                <ul>
                    {/* to에 따라, 페이지 라우팅 */}
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/page1">page1</Link></li>
                    <li><Link to="/page2">page2</Link></li>
                </ul>
            </nav>
            <div style={{ background: '#ffc7c3'}}>
                {/* path에 따라, 해당 component 렌더링 */}
                <Route exact path="/" component={Home}/>
                <Route path="/page1" component={Page1}/>
                <Route path="/page2" component={Page2}/>
            </div>
        </BrowserRouter>
    );
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);

