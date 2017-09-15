let express = require('express');
let bodyParser = require('body-parser');
//--------------------------------------------------------
let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine', 'ejs');
//--------------------------------------------------------
let suppliers = require ('./routers/suppliers.js')
//--------------------------------------------------------
app.use('/suppliers', suppliers)

app.listen(3000, function(){
  console.log('Jalankan');
})
