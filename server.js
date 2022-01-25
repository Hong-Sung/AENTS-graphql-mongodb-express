const express = require('express');
const app = express();
const mongoose = require('mongoose');
var { graphqlHTTP } = require('express-graphql');
const BookSchema = require('./BookSchema').BookSchema;

// connnecting to mongodb
mongoose.connect('mongodb://mongo/myappdb', (err) => { if (err) throw err; console.log("connected to mongo"); })

app.set('port', (process.env.PORT || 4000));

// add the schema to graphql-express
app.use('/graphql',
        graphqlHTTP({
            schema: BookSchema,
            rootValue: global,
            graphiql: true,
        })
);

app.listen(app.get('port'), () => { console.log("Node app is running at localhost:" + app.get('port')) } );
