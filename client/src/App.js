import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import Chat from './pages/chat/chat.component';
import Login from './pages/login/login.component';
import AppWrap from "./components/app-wrap/app-wrap.component";
import {selectCurrentUser} from "./redux/chat/chat.selectors";

function App() {
    const currentUser = !useSelector(selectCurrentUser);
    return (
        <AppWrap>
            <Switch>
                <Route exact path='/chat'>
                    {currentUser ? <Chat/> : <Redirect to='/'/>}
                </Route>
                <Route path='/' component={Login}/>
            </Switch>
        </AppWrap>
    );
}

export default App;
