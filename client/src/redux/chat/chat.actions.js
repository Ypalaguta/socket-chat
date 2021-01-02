import ChatActionTypes from "./chat.types";

export const getUserStart = () => ({
    type: ChatActionTypes.GET_USER_START
})
export const getUserSuccess = (user) => ({
    type: ChatActionTypes.GET_USER_SUCCESS,
    payload: {user}
})
export const getUserFailure = (err) => ({
    type: ChatActionTypes.GET_USER_FAILURE,
    payload: {err}
})

export const newJoinReceived = (data) => ({
    type: ChatActionTypes.NEW_JOIN,
    payload: data
})
export const newMessageReceived = (data) => ({
    type: ChatActionTypes.NEW_MESSAGE,
    payload: data
})
export const newLeaveReceived = (data) => ({
    type: ChatActionTypes.NEW_LEAVE,
    payload: data
})


// export const newMessageReceived = (message) => ({
//     type: ChatActionTypes.ADD_JOIN,
//     payload: {message}
// })
// export const newMessageReceived = (message) => ({
//     type: ChatActionTypes.ADD_MESSAGE,
//     payload: {message}
// })



// export function getUserStart() {
//     return (dispatch) => {
//         dispatch({
//             type: ChatActionTypes.GET_USER_START
//         })
//         axios.post('/public/login')
//             .then(res => dispatch(getUserSuccess(res.data)))
//             .catch(err => dispatch(getUserFailure(err)))
//     };
// }