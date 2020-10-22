const express = require('express');
const app = express();
const path = require('path');


const indexRoute = require('./routes/index');

//settings
app.set('port', 3000);
app.set('view engine','ejs');
app.engine('html', require('ejs').renderFile);
app.set('views', path.join(__dirname, 'views'));

//middlewares

//routes
app.use(indexRoute);


//static files


//listening
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'))
});

