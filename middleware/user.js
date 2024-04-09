const jwt = require('jsonwebtoken');

// async function verifyToken(req, res, next) {
//     try {
//         let token = req.header("Authorization");
        
//         if(!token){
//             return res.status(403).send("Access Denied");
//         }
//         if(token.startsWith("Bearer ")){
//          token = token.slice(7, token.length).trimLeft();
//         }
        
//         const verified = jwt.verify(token, process.env.JWT_SECRET);
//         req.user = verified;
//         next();
        
//     } catch (err) {
//         res.status(500).json({error: err.message})
//     }
// }

// module.exports = verifyToken;

exports.verifyToken = (req, res, next) => {
  const token = req.cookies.token;
  try{
     
    if(!token){
    return res.status(403).send("Access Denied");
    }

    const user = jwt.verify(token, process.env.JWT_SECRET);

    req.user = user;
    
    next();
  }catch(err){
    // res.clearCookie("token");
    // return res.redirect("/");
    res.status(500).json({error: err.message});
  }
}