import styled from "styled-components";

export const ChatContainer = styled.div`
    width: 100%;
    height: 400px;
    display: flex;
`;
export const ChatWindowContainer = styled.div`
    flex:6;
    position: relative;
`;
export const MessageContainer = styled.div`
    padding: 3px;
    position: relative;
`;
export const InputContainer = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    padding-left: 4px;
    border-top: 1px solid;
    overflow: hidden;
`;
export const StyledInput = styled.input`
    width: 100%;
    height: 26px;
    border: 0px;
    &:active {
        border: 0px;
        outline: 0px;
    }
    &:focus {
        border: 0px;
        outline: 0px;
    }
`;
export const UsersListContainer = styled.div`
    flex:2;
    border-left: 1px solid;
`;
