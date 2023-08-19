const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  try {
    const tagData = await Tag.findAll({
      include: [{ model: Product }]
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
  // find all tags
  // be sure to include its associated Product data
});

router.get('/:id', async (req, res) => {
  try{
    const tagData = await Tag.findByPk(req.params.id, {
      include: [{
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock']
      }]
    });
    if(!tagData) {
    res.status(404).json({ message: 'No Tag found with that id!' });
      return;
  }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
  // find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const newtag = await Tag.create({
      tag_name: req.body.product_name,
    })
    res.status(201).json(newtag);
  } catch (err) {
    res.status(500).json(err)
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try{
    const updatedTag = await Tag.update({
      tag_name: req.body.tag_name,
    },
    {
      where: {
        id: req.params.id,
      }
    })
    res.status(200).json(updatedTag) 
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await Tag.destroy({
      where: {
        id: req.params.id,
      }
    });
    res.status(204).json({ message: 'This Product was successfully deleted' });
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
