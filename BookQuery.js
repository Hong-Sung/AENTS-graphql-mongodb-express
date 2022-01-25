var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLList = require('graphql').GraphQLList;
var BookType = require('./BookType').BookType;
var BookModel = require('./Book');

// Query
exports.BookQuery = new GraphQLObjectType({
    name: 'Query',
    fields: () => {
        return {
            books: {
                type: new GraphQLList(BookType),
                resolve: async () => {
                    const books = await BookModel.find();
                    if (!books) {
                        throw new Error("error while fetching data");
                    }
                    return books;
                }
            }
        }
    }
})
