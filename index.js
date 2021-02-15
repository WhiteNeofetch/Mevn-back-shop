const express = require ('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const http = require('http')
const { routes } = require ('./src/routes')
const cors = require('cors')
// join бд
mongoose.connect(
    "mongodb+srv://root:root@cluster0.2mhqw.mongodb.net/mevn?retryWrites=true&w=majority",{
         useCreateIndex: true,
        useNewUrlParser:true,
        useUnifiedTopology: true,
    });

//инициализация приложения
const app = express();
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

routes.forEach((item) =>{
    console.log(item)
    app.use(`/api/v1/${item}`,require(`./src/routes/${item}`));
});

//роуты


const PORT = 3000;
http.createServer({},app).listen(PORT);

console.log('server run');