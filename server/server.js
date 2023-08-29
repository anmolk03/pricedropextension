const express = require('express')
const app = express()
const port = 3000

app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);

const mongoose = require("mongoose");
mongoose.connect(
    "mongodb+srv://mongodbuser:random123@cluster0.lscs7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);

const db = mongoose.connection;
db.on("connected", function(){
    console.log('Mongoose connection done')
});
db.on("error", function(err){
    console.log('Mongoose connection error '+err)
});

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get("/save-products", (request, response) => {
    response.send("This is a 'Get' response from background.js");
});

// app.post("/save-products", (req, res) => {
//     console.log("req.body in save-products route: ", req.body);
//     res.send("jai hind!");
// });

app.post("/save-products", (req, res) => {
    // console.log("req in save-products route:");
    console.log(req.body);
    res.send("got the response");
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})