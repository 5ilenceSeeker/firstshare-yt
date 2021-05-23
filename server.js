const express = require('express');
const app = express();
const path = require('path');
const PORT=process.env.PORT || 3000;
const cors=require('cors');

app.use(express.static('public'));  //for css
app.use(express.json());            //for json

const connectDB = require('./config/db');
connectDB();
//Cors
const corsOptions = {
    origin:['http://localhost:3000','http://localhost:5000','http://localhost:3300', 'http://localhost:8080', 'http://127.0.0.1:3000']
}
app.use(cors(corsOptions));
//Template engine
app.set('views',path.join(__dirname,'/views')); //for ejs
app.set('view engine','ejs');

//Routes
app.use('/api/files', require('./routes/files'));
app.use('/files',require('./routes/show'));  //for render to dowload page
app.use('/files/download',require('./routes/download'));

app.listen(PORT,() => {
    console.log(`Listening on port ${PORT}`) ;
})