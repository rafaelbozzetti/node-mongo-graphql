const user = require('./User');

module.exports = {
    Query: {
        users: () => user.find(),
        user: (_, { id } ) => user.findById(id),
    },

    Mutation: {
        createUser: (_, { name, email }) => User.create({ name, email }),
    },
};