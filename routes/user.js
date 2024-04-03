const express = require('express');
const router = express.Router();
const user = require('../controllers/user');



// signup handler
router.get('/signup', user.newUsers);
router.post('/signup', user.createUser);


  // login handler
  router.get('/login', user.getUsers);
  router.post('/login', user.accessUser);


//index
router.get('/index', user.index);

//root
router.get('/', user.root);


// Logout
router.get('/logout', user.logout);

//presonalinfo
router.get('/personalinfo', user.personalinfo);

module.exports = router;