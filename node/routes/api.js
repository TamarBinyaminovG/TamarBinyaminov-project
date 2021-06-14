const router = require("express").Router();
const user = require('../controllers/user');



router.post('/newUser', user.newUser)
router.get('/loginUser/:id', user.loginUser)
router.get('/getAllUsers', user.getAllUsers)




module.exports = router;