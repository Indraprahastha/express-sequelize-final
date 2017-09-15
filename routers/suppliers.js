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
})
//========================================================== edit
router.get('/edit/:id', (req, res) => {
  models.Supplier.findAll({
    where: {
      id: req.params.id
    }
  }).then(dataSupplier => {
      res.render('suppliers-edit', {dataSupplier:dataSupplier})
  })
})


router.post('/edit/:id', (req, res) => {
  models.Supplier.update({
    name: req.body.name,
    kota: req.body.kota
  },{
    where: {
      id: req.params.id
    }
  })
  .then(()=>{
    res.redirect('/suppliers')
  })
})
//========================================================== delete
router.get('/delete/:id', (req, res) => {
  models.Supplier.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(()=>{
    res.redirect('/suppliers')
  })
})

module.exports = router
