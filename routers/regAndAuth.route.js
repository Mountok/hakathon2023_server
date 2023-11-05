const Router = require('express');
const router = new Router();
const userController = require('../controllers/registration.controller');

// router.get('/users',userController.getAllUsers);
router.post('/sendHelpMail',userController.sendHelpMail);
router.post('/logIn',userController.logIn)
router.post('/authentication',userController.authentication)



module.exports = router;