const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
  const dbData = await Category.findAll({
    include: [{ model: Product }]
  });
  res.status(200).json(dbData);
} catch (err) {
  res.status(500).json(err);
}
});

router.get('/:id', async (req, res) => {
  try{
    const dbData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }]
    })
    if(!dbData) {
    res.status(404).json({ message: 'No Category found with that id!' });
      return;
  }
    res.status(200).json(dbData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
