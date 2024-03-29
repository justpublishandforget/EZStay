const express = require('express');
const router = express.Router();
const User = require('../models/user');


// signup handler

router.get('/signup', (req, res) => {
    res.sendFile('signup.html', { root: __dirname + '/../view' });
});


// router.post('/signup', async (req, res) => {
//     const user = new User({
//         username: req.body.username,
//         password: req.body.password
//         })
//     try {
      
//       await user.save();
//     //  res.json(u1);
//       res.redirect('/login');
//     } catch (err) {
//       console.error(err);
//       res.status(500).send('Error signing up');
//     }
//   });


router.post('/signup', async (req, res) => {
   
    try {
      const { username, password } = req.body;
      const user = new User({ username, password });
      await user.save();
    //   res.redirect('/login');
    console.log("successful");
    } catch (err) {
      console.error(err);
      res.status(500).send('Error signing up');
    }
  });

  // login handler
//   router.get('/login', (req, res) => {
//     // res.sendFile('login.html', { root: __dirname + '/../public' });
//     res.sendFile('login.html', { root: staticpath1 });
// });

router.get('/login', (req, res) => {
    res.sendFile('login.html', { root: global.staticpath1 });
});






module.exports = router;