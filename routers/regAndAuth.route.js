const Router = require('express');
const router = new Router();
const userController = require('../controllers/registration.controller');

// router.get('/users',userController.getAllUsers);
router.post('/sendHelpMail',userController.sendHelpMail);
router.get('/test',userController.testQuery)



module.exports = router;