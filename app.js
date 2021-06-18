const express = require('express')
const path = require('path')
const async = require('async');
var bodyParser  = require("body-parser")
var cookieParser  = require( "cookie-parser");
const {Users} = require("./database/models")

// hbs view
const registerHelper =  require("./lib/hbsHelper");

// app module
const indexRouter = require("./routes/index");

var app = express() 

// connect to db
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(
  'khvw', 
  'khvw', 
  '	Xk3PXK-5kmg_', 
  {
  host: 'den1.mysql5.gear.host',
  dialect: 'mysql'
});

(async() => {
  try {
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();




//

app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'hbs');
app.set('view options', { layout: 'layout/layout' });

// var bodyParser1 = require('bodyParser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// view engine helper
registerHelper();
app.set('view engine', 'hbs');
app.engine('html', require('hbs').__express);


// mo port cho web

// router chinh
app.use('/', indexRouter);

const port = process.env.PORT || 3333;
const server = app.listen(port, () =>{
    console.log("server started")
})