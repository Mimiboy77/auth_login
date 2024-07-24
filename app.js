require('dotenv').config();
const express = require('express');
const connectDB = require('./server/config/db')
const router = require("./server/routes/page")
const expressLayouts = require('express-ejs-layouts');
const app = express();
connectDB();
const PORT = 2000;
app.use(expressLayouts);
app.use(express.urlencoded({ extended: true }));
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use("", require('./server/routes/page'));
app.listen(PORT, (err) => {
    if (err) {
       console.log(err); 
    }
    console.log(`conected to ${PORT}`);
})