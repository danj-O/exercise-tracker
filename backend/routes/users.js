//user route
const router = require('express').Router();
let User = require('../models/user.model');

//handles get requests to users
router.route('/').get((req, res) => {
  //find is a mongoose method that gets a list of all users in mdb db
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

//handles post requests
router.route('/add').post((req, res) => {
  const username = req.body.username;
  const newUser = new User({username});
  //save to database
  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err))
});

module.exports = router;