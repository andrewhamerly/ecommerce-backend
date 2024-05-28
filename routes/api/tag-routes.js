const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// find all tags
// be sure to include its associated Product data
router.get('/', async (req, res) => {
  try {
    const tagData = await Tag.findAll({
      include: [ Product, {model: Tag, through: ProductTag}]
  });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// find a single tag by its `id`
// be sure to include its associated Product data
router.get('/:id', async (req, res) => {
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: [ Product, {model: Tag, through: ProductTag}]
  });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Create a new tag
router.post('/', async (req, res) => {
  try {
    const tag = await Tag.create(req.body);

    // If there are associated product IDs, create entries in the ProductTag model
    if (req.body.productIds && req.body.productIds.length) {
      const productTagIdArr = req.body.productIds.map((product_id) => {
        return {
          product_id,
          tag_id: tag.id,
        };
      });
      await ProductTag.bulkCreate(productTagIdArr);
    }

    // Respond with the created tag
    res.status(200).json(tag);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

// update a tag's name by its `id` value
router.put('/:id', async (req, res) => {
  try {
    // Extract the tag id from the route parameter
    const { id } = req.params;

    // Update the tag name based on the id
    const [updated] = await Tag.update(req.body, {
      where: { id }
    });

    if (updated) {
      const updatedTag = await Tag.findOne({ where: { id } });
      res.status(200).json(updatedTag);
    } else {
      res.status(404).json({ message: 'Tag not found' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// delete on tag by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    // Extract the tag id from the route parameters
    const { id } = req.params;

    // Delete the tag by its id
    const deleted = await Tag.destroy({
      where: { id }
    });

    if (deleted) {
      res.status(200).json({ message: 'Tag deleted successfully' });
    } else {
      res.status(404).json({ message: 'Tag not found' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

module.exports = router;
