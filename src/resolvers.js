
const users = [
    { id: 1, name: 'Rafael', email: 'rafaelbozzeti@gmail.com'},
    { id: 2, name: 'Ana', email: 'anacarkawribas@gmail.com'},
];


module.exports = {
    Query: {
        users: () => users,
        user: () => { users[0] }
    },

    Mutation: {
        createUser: () => users[0],
    },
};