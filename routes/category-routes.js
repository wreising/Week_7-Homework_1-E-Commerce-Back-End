const router = require('express').Router()
const res = require('express/lib/response')
const { Category, Product } = require('../models')

// The `/api/categories` endpoint

router.get('/categories', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({
    include: [Product]
  })
    .then(categories => { res.json(categories) })
})

router.get('/categories/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne({
    where:
    {
      id: req.params.id
    },
    include: [Product]
  })
    .then(categories => { res.json(categories) })
})

router.post('/categories', (req, res) => {
  // create a new category
  Category.create(req.body)
    .then(categories => {
      res.json(categories)
    })
})

router.put('/categories/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(req.body, { where: { id: req.params.id } })
    .then(categories => {
      res.json(categories)
    })
})

router.delete('/categories/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({ where: { id: req.params.id } })
    .then(categories => {
      res.json(categories)
    })
})

module.exports = router
