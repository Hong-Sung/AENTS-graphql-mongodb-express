
var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLString = require('graphql').GraphQLString;
// import GraphQL BookType
var BookType = require('./BookType').BookType;
// import book model
var BookModel = require('./Book');

// remove
exports.deleteBook = {
    type: BookType,

    /* define the arguments that we should pass to the mutation.
       Here we require both book name and the authr name.
       The id will be generated automatically. */
    args: {
        id: {
            type: new GraphQLNonNull(GraphQLString),
        },
    },

    resolve: async(root, args) => {
        // under the resolve method we get out our arguments
        const removedModel = await BookModel.findByIdAndRemove(args.id);
        if (!removedModel) {
            throw new Error("error");
        }
        return removedModel;
    }
}
