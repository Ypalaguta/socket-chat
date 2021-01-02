import React from 'react';
import {useDispatch} from "react-redux";
import {getUserStart, getUserSuccess, getUserFailure} from "../../redux/chat/chat.actions";
import axios from "axios";

function Login({history}) {
    const dispatch = useDispatch();
    const getUser = () => {
        dispatch(getUserStart());
        return axios.post('/public/login')
            .then(res => {
                dispatch(getUserSuccess(res.data))
                history.push('/chat')
            })
            .catch(err => dispatch(getUserFailure(err)))
    }
    return (
        <button onClick={getUser}>login</button>
    )
}

// export default connect(null, {getUserStart})(Login)
export default Login