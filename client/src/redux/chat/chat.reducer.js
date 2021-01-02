import ChatActionTypes from './chat.types';
import {getUserById} from './chat.utils';

const INITIAL_STORE = {
    currentUser: null,
    messages: [],   //arr of {userId, message, type} type=newUser/regular
    users: [],      //arr {userId, nickname}
    error: null,
    loadingCurrentUser: false,
};

const chatReducer = (store = INITIAL_STORE, action) => {
    switch (action.type) {
        case ChatActionTypes.NEW_JOIN:  //add user to users array
            return {
                ...store,
                users: action.payload.users,
                messages: [...store.messages, {
                    ...action.payload.user,
                    text: `user ${action.payload.user.nickname} join`,
                    type: 'newJoin'
                }],
                error: null
            };
        case ChatActionTypes.NEW_MESSAGE:  //add message to messages array
            return {
                ...store,
                messages: [...store.messages, {...action.payload.message}],
                error: null
            };
        case ChatActionTypes.NEW_LEAVE:  //remove user from active users arr
            return {
                ...store,
                messages: [...store.messages, {
                    ...action.payload.user,
                    text: `user ${action.payload.user.nickname} left`,
                    type: 'newLeave',
                }],
                users: action.payload.users,
                error: null
            };

        case ChatActionTypes.GET_USER_START:  //add message to messages array
            return {
                ...store,
                currentUser: null,
                loadingCurrentUser: true,
                error: null
            };
        case ChatActionTypes.GET_USER_SUCCESS:  //add message to messages array
            return {
                ...store,
                currentUser: action.payload.user,
                loadingCurrentUser: false,
                error: null
            };
        case ChatActionTypes.GET_USER_FAILURE:  //add message to messages array
            return {
                ...store,
                loadingCurrentUser: false,
                error: 'loading user failed'
            };

        default:
            return store;
    }
};

export default chatReducer;
