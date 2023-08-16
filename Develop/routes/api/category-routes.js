const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
  const categoryData = await Category.findAll({
    include: [{ model: Product }]
  });
  res.status(200).json(categoryData);
} catch (err) {
  res.status(500).json(err);
}
});

router.get('/:id', async (req, res) => {
  try{
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }]
    })
    if(!categoryData) {
    res.status(404).json({ message: 'No Category found with that id!' });
      return;
  }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const newCategory = await Category.create({
      category_name: req.body.category_name,
    })
    res.status(201).json(newCategory);
  } catch (err) {
    res.status(500).json(err);
  }
  // create a new category
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const updatedCategory = await Category.update({
      category_name: req.body.category_name,
    },
    {
      where: {
        id: req.params.id,
      }
    })
    res.status(200).json(updatedCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const deletedCategory = await Category.destroy({
      where: {
        id: req.params.id,
      }
    })
    res.json(deletedCategory)
    res.status(204).json({ message: 'This Category was successfully deleted' });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
