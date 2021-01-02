import React from 'react';
import {
    ChatContainer,
    ChatWindowContainer,
    InputContainer,
    MessageContainer,
    StyledInput,
    UsersListContainer
} from "./chat.styles";


export default function Chat() {
    return (
        <ChatContainer>
            <ChatWindowContainer>
                <MessageContainer>
                    <span>Nickname: </span>
                    <span>message example</span>
                </MessageContainer>
                <InputContainer>
                    <StyledInput type='text' placeholder='message text, press enter to send'/>
                </InputContainer>
            </ChatWindowContainer>
            <UsersListContainer>
                <div>Nickname</div>
            </UsersListContainer>
        </ChatContainer>
    )
}
