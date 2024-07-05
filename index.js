var express = require("express")
var { createHandler } = require("graphql-http/lib/use/express")
var { buildSchema } = require("graphql")
var { ruruHTML } = require("ruru/server")
const textToBase64Barcode = require('./barcode'); // Adjust the path as necessary
const path = require('path');

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    hello: String
  }
`)
 
// The root provides a resolver function for each API endpoint
var root = {
  hello() {
    return "Hello world!"
  },
}
 
var app = express()
 
// Create and use the GraphQL handler.
app.all(
  "/graphql",
  createHandler({
    schema: schema,
    rootValue: root,
  })
)

// app.set('view engine', 'pug');
// app.set('views', path.join(__dirname, 'views')); // Ensure this path is correct

app.get('/barcode/:id', function(req, res, next) { 
  const barcode = textToBase64Barcode(req.params.id);
  return res.json({imgBase64: imgBase64})

});

// app.get("/barcode", (_req, res) => {
// })

// Serve the GraphiQL IDE.
app.get("/", (_req, res) => {
  res.type("html")
  res.end(ruruHTML({ endpoint: "/graphql" }))
})
 
// Start the server at port
app.listen(4000)
console.log("Running a GraphQL API server at http://localhost:4000/graphql")