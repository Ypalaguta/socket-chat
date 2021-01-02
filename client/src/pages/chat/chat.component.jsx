import React, {useEffect, useState} from 'react';
import {
    ChatContainer,
    ChatWindowContainer,
    InputContainer,
    MessageContainer,
    StyledInput,
    UsersListContainer
} from "./chat.styles";
import {io} from 'socket.io-client';
import {useSelector, useDispatch} from "react-redux";
import {selectCurrentUser, selectMessages, selectUsers} from "../../redux/chat/chat.selectors";
import {newJoinReceived, newLeaveReceived, newMessageReceived} from "../../redux/chat/chat.actions";

let socket = null;

export default function Chat() {
    const currentUser = useSelector(selectCurrentUser);
    const dispatch = useDispatch();
    const messages = useSelector(selectMessages);
    const users = useSelector(selectUsers);
    useEffect(() => {
        socket = io();
        socket.on("NEW_JOIN", (data) => dispatch(newJoinReceived(data)))
        socket.on("NEW_MESSAGE", (data) => dispatch(newMessageReceived(data)))
        socket.on("NEW_LEAVE", (data) => dispatch(newLeaveReceived(data)))
        socket.emit('NEW_JOIN', {user: currentUser});
        // setTimeout(()=>socket.emit('NEW_JOIN', {user: currentUser}), 1000)
    }, [])
    useEffect(() => () => {
        // socket.emit('NEW_LEAVE', {user: currentUser});
    })
    const sendMessage = (text) => {
        socket.emit('NEW_MESSAGE', text);
    }
    const [inputValue, setInputValue] = useState('');
    const handleInput = event => setInputValue(event.target.value);
    const handleKeyPress = event => {
        if(event.charCode===13) {
            sendMessage(inputValue);
            setInputValue('');
        }
    }
    return (
        <ChatContainer>
            <ChatWindowContainer>
                {messages.map(message => <MessageContainer>
                    {message.type === 'regular' ? <span>{message.nickname}: </span> : null}
                    {message.type === 'regular' ? <span>{message.text}</span> :
                        <div style={{textAlign: 'center'}}>{message.text}</div>}

                </MessageContainer>)}
                <InputContainer>
                    <StyledInput type='text' placeholder='message text, press enter to send'
                    onInput = {handleInput} value={inputValue} onKeyPress={handleKeyPress}/>
                </InputContainer>
            </ChatWindowContainer>
            <UsersListContainer>
                {users.map(user =>
                    <div>{user.nickname}</div>
                )}
            </UsersListContainer>
        </ChatContainer>
    )
}
