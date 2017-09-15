let express = require('express')
let router = express.Router()
let models = require('../models')

//========================================================= Tampilkan
router.get('/', function(req, res) {
  models.Supplier.findAll().then(function(Supplier) {
    res.render('suppliers',{dataSupplier:Supplier});
  })
});
//========================================================== add
router.get('/add', function(req, res) {
  res.render('suppliers-add',{err: false});
})
router.post('/add', function(req,res) {
  models.Supplier.create({
    name : req.body.name,
    kota : req.body.kota
  })
  .then(() => {
    res.redirect('/suppliers')
  })
  .catch(() => {
    res.render('teacher-add')
  })
})
//========================================================== edit


module.exports = router
