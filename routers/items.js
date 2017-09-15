let express = require('express')
let router = express.Router()
let models = require('../models')

//========================================================= Tampilkan
router.get('/', function(req, res) {
  models.Item.findAll().then(function(Item) {
    res.render('items',{dataItem:Item});
  })
});
//========================================================== add
router.get('/add', function(req, res) {
  res.render('items-add',{err: false});
})
router.post('/add', function(req,res) {
  models.Item.create({
    name : req.body.name,
    brand : req.body.brand,
    codeitem : req.body.codeitem,
  })
  .then(() => {
    res.redirect('/items')
  })
})
//========================================================== edit
router.get('/edit/:id', (req, res) => {
  models.Item.findAll({
    where: {
      id: req.params.id
    }
  }).then(dataItem => {
      res.render('items-edit', {dataItem:dataItem})
  })
})


router.post('/edit/:id', (req, res) => {
  models.Item.update({
    name : req.body.name,
    brand : req.body.brand,
    codeitem : req.body.codeitem,
  },{
    where: {
      id: req.params.id
    }
  })
  .then(()=>{
    res.redirect('/items')
  })
})
//========================================================== delete
router.get('/delete/:id', (req, res) => {
  models.Item.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(()=>{
    res.redirect('/items')
  })
})

module.exports = router
