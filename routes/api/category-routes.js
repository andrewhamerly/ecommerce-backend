const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// find all categories
// be sure to include its associated Products
router.get('/', async (req, res) => {
  try {
    // Find all categories and include their associated products
    const categories = await Category.findAll({
      include: [
        {
          model: Product,
          as: 'products',
        },
      ],
    });

    res.status(200).json(categories);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// find one category by its `id` value
// be sure to include its associated Products
router.get('/:id', async (req, res) => {
  try {
    // Extract the category id from the route parameters
    const { id } = req.params;

    // Find one category by its id and include its associated products
    const category = await Category.findOne({
      where: { id },
      include: [
        {
          model: Product,
          as: 'products',
        },
      ],
    });

    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }

    res.status(200).json(category);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// create a new category
router.post('/', async (req, res) => {
  try {
    // Create a new category with the data from the request body
    const newCategory = await Category.create(req.body);

    // Respond with the created category
    res.status(201).json(newCategory);
  } catch (err) {
    console.error(err);
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const { id } = req.params;

    // Update the category with the data from the request body
    const [updated] = await Category.update(req.body, {
      where: { id }
    });

    // Check if any rows were affected
    if (updated) {
      const updatedCategory = await Category.findOne({ where: { id } });
      res.status(200).json(updatedCategory);
    } else {
      res.status(404).json({ message: 'Category not found' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// delete a category by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    // Delete the category by its id
    const deleted = await Category.destroy({
      where: { id }
    });

    if (deleted) {
      res.status(200).json({ message: 'Category deleted successfully' });
    } else {
      res.status(404).json({ message: 'Category not found' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

module.exports = router;
