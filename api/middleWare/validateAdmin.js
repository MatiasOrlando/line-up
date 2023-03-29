const User = require("../models/user");

async function validateUser(req, res, next) {
  //  const {id} = req.params
  const id = "6421daa154ed9950496a68cb";
  const user = await User.findById(id);
  if (user.admin) {
    req.user = user;
    return next();
  }
  res.sendStatus(401);
}

// function validateUser(req, res, next) {
//   let cookie = req.cookies.token;
//   let { payload } = validateToken(cookie);
//   req.user = payload;
//   if (payload) return next();
//   res.sendStatus(401);
// }

module.exports = validateUser;