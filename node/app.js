// const express = require('express');
// const mongoose = require("mongoose")
// const cors = require('cors')
// const app = express();
// const router = require("./routes/api")

// // app.use(bodyParser.json({ extended: false }));
// // app.use(bodyParser.urlencoded({
// //     extended: false
// // }));

// const options = cors.CorsOptions = {
//     allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "X-Access-Token"],
//     credentials: true,
//     methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
//     preflightContinue: false
// };

// app.use(cors());
// app.use(function (req, res, next) {

//     res.setHeader('Access-Control-Allow-Origin', '*');

//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

//     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

//     next();
// });
// const connectionsParams = {
//     newUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true,
//     // useFindAndModify: true
// }
// mongoose.connect(process.env.DB_CONNECT, connectionsParams)
//     .then(() => {
//         console.log("Connected to db");
//     })
//     .catch((err) => {
//         console.log("error: " + err)
//     })

// // app.use(bodyParser.json());

// app.use(function (req, res, next) {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
//     res.setHeader('Access-Control-Allow-Credentials', true); next();
// })

// // app.use((req, res, next) => {
// //     console.log("ConnectinRegister" + req.body.name + " " + req.body.password);
// //     next();
// // })

// app.use('/', router);

// app.listen(4200, () => {
//     console.log("Listening in port 4200 ")
// })


const express = require('express');
const app = express();
const mongoose = require('mongoose');
const router = require('./routes/api');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();




const connectionParams = {
    newUrlParser: true,
    useCreateIndex: true,
    useUndifiedTopology: true
}

mongoose.connect(process.env.DB_CONNECT, connectionParams)
    .then(() => {
        console.log('connected to db');
    })
    .catch((err) => {
        console.log("error" + err);
    })


app.use(bodyParser.json())
app.use('/', router)

app.listen(4500, () => {
    console.log("listening on port 4200");
})