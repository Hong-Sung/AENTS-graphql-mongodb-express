
var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLString = require('graphql').GraphQLString;
// import book model
var BookModel = require('./Book');
// import GraphQL BookType
var BookType = require('./BookType').BookType;

// Query
exports.updateBook = {
    type: BookType,

    /* define the arguments that we should pass to the mutation.
       Here we require both book name and the authr name.
       The id will be generated automatically. */
    args: {
        id: {
            type: new GraphQLNonNull(GraphQLString),
        },
        name: {
            type: new GraphQLNonNull(GraphQLString),
        },
        author: {
            type: new GraphQLNonNull(GraphQLString),
        },
    },

    resolve: async(root, args) => {
        // under the resolve method we get out our arguments
        const updatedModel = await BookModel.findByIdAndUpdate(args.id, args);
        if (!updatedModel) {
            throw new Error("error");
        }
        return updatedModel;
    }
}
