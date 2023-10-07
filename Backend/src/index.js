const express = require ("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const router = require("./routes/routes");
const connectToMongo = require("./config/connector");
require("dotenv").config()

const app = express();

connectToMongo("");

app.use(express.json());

app.use(cors());

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


app.use("/api",router);


// listening backend on a port
const port = process.env.PORT || 8080;

app.listen(port,()=>{
    console.log(`App listening on port http://localhost:${port}`);
});




