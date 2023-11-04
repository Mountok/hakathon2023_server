const Router = require('express');
const router = new Router();
const jsondatecontroller = require('../controllers/jsondate.controller');

router.get('/getAllEvents',jsondatecontroller.getAllEvents);
router.post('/putNewEvent',jsondatecontroller.putNewDate);
router.post('/deleteAEvent',jsondatecontroller.deleteAEvent);



module.exports = router;