export const getUserById = (users, userId) => {
    return users.reduce((acc, user) => user.id === userId ? user.nickname : acc, 'user not found');
}