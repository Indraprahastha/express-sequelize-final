let express = require('express');
let bodyParser = require('body-parser');
//--------------------------------------------------------
let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine', 'ejs');
//--------------------------------------------------------
let index = require ('./routers/index.js')
let suppliers = require ('./routers/suppliers.js')
let items = require ('./routers/items.js')
//--------------------------------------------------------
app.use('/', index)
app.use('/suppliers', suppliers)
app.use('/items', items)

app.listen(3000, function(){
  console.log('Jalankan');
})
