import { createSelector } from 'reselect';

const selectChat = store => store.chat;

export const selectUsers = createSelector(
    [selectChat],
    chat => chat.users
);

export const selectMessages = createSelector(
    [selectChat],
    chat => chat.messages
);

export const selectCurrentUser = createSelector(
    [selectChat],
    chat => chat.currentUser
);
