//express set up
const express = require('express');
const router = express.Router();
// adds express check() and validator() methods
const { check, validationResult } = require('express-validator'); //originally: require('express-validator/check') but received error in CL: express-validator: requires to express-validator/check are deprecated.You should just use require("express-validator") instead.
    // const checkModule = require('express-validator/check');
    // const check = checkModule.check;
    // const validationResult = checkModule.validationResult;
//array for storing users
const users = [];

// *USER ROUTES*

// GET /api/users 200 - Returns the currently authenticated user
router.get('/users', (req, res) => {
    res.json(users);
  });

// check() returns a "validation chain". Any number of validation methods can be called on a validation chain to validate a field. 
const nameValidationChain = check('name')
  .exists({ checkNull: true, checkFalsy: true })
  .withMessage('Please provide a value for "name"');
// check() returns a "validation chain". Any number of validation methods can be called on a validation chain to validate a field. 
const emailValidationChain = check('name')
  .exists({ checkNull: true, checkFalsy: true })
  .isEmail()
  .withMessage('Please provide a value for "email"');

// POST /api/users 201 - Creates a user, sets the Location header to "/", and returns no content
router.post('/users', nameValidationChain, emailValidationChain, (req, res) => {
    // Attempt to get the validation result from the Request object.
    const errors = validationResult(req); //validationResult extracts the validation errors from a request and makes them available in a Result object.
    // If there are validation errors...
    if (!errors.isEmpty()) {
      // Use the Array `map()` method to get a list of error messages.
      const errorMessages = errors.array().map(error => error.msg);
      // Return the validation errors to the client.
      res.status(400).json({ errors: errorMessages });
    } else {
      // Get the user from the request body.
      const user = req.body;
  
      // Add the user to the `users` array.
      users.push(user);
  
      // Set the status to 201 Created and end the response.
      res.status(201).end();
    }
  });
  
// *COURSE ROUTES*
// GET /api/courses 200 - Returns a list of courses (including the user that owns each course)
router.get('/courses', (req, res) => {
    
  });
// GET /api/courses/:id 200 - Returns a the course (including the user that owns the course) for the provided course ID
router.get('/courses/:id', (req, res) => {
    
  });
// POST /api/courses 201 - Creates a course, sets the Location header to the URI for the course, and returns no content
router.post('/courses', (req, res) => {
    
  });
// PUT /api/courses/:id 204 - Updates a course and returns no content
router.put('/courses/:id', (req, res) => {
    
  });
// DELETE /api/courses/:id 204 - Deletes a course and returns no content
router.delete('/courses/:id', (req, res) => {
    
  });
   
module.exports = router;
   
   //***SJK NOTE*** DRAFT from here: C:\Users\Sarah\Documents\Treehouse Tech Degree\Unit 9\PRACTICE- data-relationships-with-sql-and-sequelize\starter-files\app.js
        // Retrieve movies:
                  // const movies = await Movie.findAll({
                  //   include: [
                  //     {
                  //       model: Person, // indicates that we want any related Person model data
                  //       as: 'director',
                  //     },
                  //   ],
                  // });
                  // console.log(movies.map(movie => movie.get({ plain: true })));
                  // // Retrieve people
                  // const people = await Person.findAll({
                  //   include: [
                  //     {
                  //       model: Movie,
                  //       as: 'director',
                  //     },
                  //   ],
                  // });
                  // console.log(people.map(person => person.get({ plain: true })));
