const User = require('../models/user');


// signup handler
exports.newUsers = async (req, res) => {
    res.sendFile('signup.html', { root: global.staticpath });
};

exports.createUser = async (req, res) => {
    const { fullname, username, email, phone, dob, password } = req.body;

  try {
      // Check if the username already exists
      const existingUser = await User.findOne({ username });
      if (existingUser) {
          return res.status(400).send('Username already exists. Please choose a different username.');
      }

      // Create a new user
      const user = new User({ fullname, username, email, phone, dob, password });
      await user.save();
      res.redirect('/login');
  } catch (err) {
      console.error(err);
      res.status(500).send(`Error signing up: ${err.message}`);
  }
};


// login handler
exports.getUsers = async (req, res) => {
    res.sendFile('login.html', { root: global.staticpath });
};

exports.accessUser = async (req, res) => {
    try {
            const { username, password } = req.body;
            const user = await User.findOne({ username, password });
            if (!user) {
              res.status(401).send('Invalid username or password');
            } else {
              req.session.user = user;
              
              res.redirect('/index');
             
            }
          } catch (err) {
            console.error(err);
            
            res.status(500).send(`Error loging in: ${err.message}`);
          }
};

//index
exports.index = async (req, res) => {
  if (!req.session.user) {
    res.redirect('/login');
  } else {
    
    res.render('index', { user: req.session.user });
   
  } 
};

// root
exports.root = async (req, res) => {
  if (!req.session.user) {
    res.redirect('/login');
  } else {
    
    res.render('index', { user: req.session.user });
   
  }

};

//personalinfo
exports.personalinfo = async (req, res) => {
  if (!req.session.user) {
    res.redirect('/login');
  } else {
    
    res.render('personalinfo', { user: req.session.user });
   
  }
}



// Logout
exports.logout = async (req, res) => {
    req.session.destroy(err => {
            if (err) {
              console.error(err);
              res.status(500).send('Error logging out');
            } else {
              res.redirect('/login');
            }
          });
}
