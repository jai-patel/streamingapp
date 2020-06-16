const express    = require('express');
const app        = express();
const fs         = require('fs');
const bodyParser = require('body-parser');
const mongoose   = require('mongoose');

//USE BODY PARSER
app.use(bodyParser.urlencoded({extended: true}));

//PUBLIC FOLDEr
app.use(express.static('public'));


//VIEW ENGINE SET TO EJS
app.set('view engine', 'ejs');

app.get('/', (req,res)=>{
    res.render('landing.ejs');
});

app.get('/player', (req,res)=>{
    res.writeHead(200,{'Content-Type': 'video/mp4'});
    let rs=fs.createReadStream('./library/vids/video.mp4');
    rs.pipe(res);
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

