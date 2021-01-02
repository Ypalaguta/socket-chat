import ChatActionTypes from './chat.types';
import {getUserById} from './chat.utils';

const INITIAL_STORE = {
    messages: [],   //arr of {userId, message, type} type=newUser/regular
    users: [],      //arr {userId, nickname}
    error: null,
    loadingUsers: false,
};

const chatReducer = (store = INITIAL_STORE, action) => {
    switch (action.type) {
        case ChatActionTypes.NEW_JOIN:  //add user to users array
            return {
                ...store,
                users: [...store.users, action.payload.user],
                messages: [...store.messages, {
                    message: `user ${action.payload.user.nickname} join`,
                    type: 'newLeave'
                }],
                error: null
            };
        case ChatActionTypes.NEW_MESSAGE:  //add message to messages array
            return {
                ...store,
                users: [...store.messages, {...action.payload.message, type: 'regular'}],
                error: null
            };
        case ChatActionTypes.NEW_LEAVE:  //remove user from active users arr
            return {
                ...store,
                messages: [...store.messages, {
                    message: `user ${action.payload.user.nickname} left`,
                    type: 'newLeave'
                }],
                users: store.users.filter(user => user.userId !== action.payload.user.userId),
                error: null
            };
        // case ChatActionTypes.LOADING_USERS_START:  //add message to messages array
        //     return {
        //         ...store,
        //         loadingUsers: true,
        //         error: null
        //     };
        // case ChatActionTypes.LOADING_USERS_SUCCESS:  //add message to messages array
        //     return {
        //         ...store,
        //         loadingUsers: false,
        //         error: null
        //     };
        // case ChatActionTypes.LOADING_USERS_FAILURE:  //add message to messages array
        //     return {
        //         ...store,
        //         loadingUsers: false,
        //         error: 'loading users failed'
        //     };

        default:
            return store;
    }
};

export default chatReducer;
