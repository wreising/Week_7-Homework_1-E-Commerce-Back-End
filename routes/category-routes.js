const router = require('express').Router()
const { Category, Product } = require('../models')

// The `/api/categories` endpoint

router.get('/categories', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({
    include: [Product]
  })
    .then(categories => {
      res.json(categories)
    })
})

router.get('/categories/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne({
    where:
      { id: req.params.id },
    include: [Product]
  })
    .then(category => {
      res.json(category)
    })
})

router.post('/categories', (req, res) => {
  // create a new category
})

router.put('/categories/:id', (req, res) => {
  // update a category by its `id` value
})

router.delete('/categories/:id', (req, res) => {
  // delete a category by its `id` value
})

module.exports = router
