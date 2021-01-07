import React, {createContext, useContext, useState } from "react";

const UserContext = createContext('nothing');

const App = () => {
    const [name, setName] = useState('jiyoung');

    return (
        <div>
            <UserContext.Provider value={name}>
                <h1>App Component</h1>
                <Person />
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </UserContext.Provider>    
        </div>
    );
}

const Person = React.memo(() => {
    return (
        <>
            <h2>Person Component</h2>
            <Profile />
            <Profile2 />
        </>
    );
});

const Profile = () => {
    return (
        <>
            <h3>Profile Component</h3>
            <p>Context API는 부모 컴포넌트는 상관없이 할아버지 컴포넌트에서도 데이터를 받을 수 있어요</p>        
            <UserContext.Consumer>
                {username => <p>{`${username}은 App Component에서 내려왔어요!`}</p>}
            </UserContext.Consumer>
        </>
    );
};

const Profile2 = () => {
    const username = useContext(UserContext);

    return (
        <>
            <p>useContext Hook을 사용하면 훨씬 간단하게 사용할 수 있어요</p>        
            <p>{`두번째 내려온 ${username}`}</p>
        </>
    );
};

export default App;
