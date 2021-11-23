const router = require('express').Router()
const User = require('../models/Users');



// user register

router.post("/user-register", async (req, res) =>{
  try {
    const newUser = await User.create(req.body);
    res.status(200).json(newUser);
    
  } catch (err) {
    res.status(500).json(err)
  }

})

module.exports = router;
