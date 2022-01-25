
var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLString = require('graphql').GraphQLString;

var BookModel = require('./Book');
var BookType = require('./BookType').BookType;

// Query
exports.addBook = {
    type: BookType,
    /* define the arguments that we should pass to the mutation.
       Here we require both book name and the authr name.
       The id will be generated automatically. */
    args: {
        name: {
            type: new GraphQLNonNull(GraphQLString),
        },
        author: {
            type: new GraphQLNonNull(GraphQLString),
        },
    },
    resolve: async(root, args) => {
        // under the resolve method we get out our arguments
        const uModel = new BookModel(args);
        const newBook = await uModel.save();
        if (!newBook) {
            throw new Error("error");
        }
        return newBook;
    }
}
