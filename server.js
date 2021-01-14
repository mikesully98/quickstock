

var express = require('express');
const ejs = require('ejs');

const connection = require('./database');

var app = express();

var usersRouter = require('./routes/users');
const { response } = require('express');
app.use('/users',usersRouter);

app.use(express.static('public'));
app.use(express.json());

app.use(require('restify').plugins.bodyParser());

app.set('view engine','ejs');

app.listen(8080);

// Get Routes - display pages
//Root Route
app.get('/',function(req,res) {
    res.render('pages/index');
    
})
app.get('/initialPicker.ejs',function(req,res) {
    res.render('pages/initialPicker');
})
app.get('/StockHome.ejs',function(req,res) {
    res.render('pages/StockHome');
})
app.get('/televisions.ejs',function(req,res) {
    res.render('pages/televisions');
})

let data;

app.post('/api', (req,res) => {
    
    console.log('I got a request!');
    data = JSON.parse(req.body);
    console.log(data.finalTelevision);

    connection.conn.connect(function(err) {
        if (err) throw err;
        console.log('Database is connected successfully !');
        var sql = `INSERT INTO tvmodels (model) VALUES ('${data.finalTelevision}')`;
        connection.conn.query(sql, function(err,result) {
            if (err) throw err;
            console.log('1 Record Inserted');
        });
      });
})