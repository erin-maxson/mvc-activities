// TODO: Add a comment indicating how this file fits into the MVC framework (is it a Model, a View, or a Controller?) and what it is responsible for handling.
// this file is a controller and controls how the application runs the data in the model

const router = require('express').Router();

// TODO: Add a comment describing the purpose of the get route -- gets the template data from the model
router.get('/', async (req, res) => {
//TODO: Add a comment describing the purpose of the render method -- renders all of the template data from the model
  res.render('all');
});

module.exports = router;
