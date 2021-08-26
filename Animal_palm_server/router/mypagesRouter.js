const {update,check,info} = require('../controllers/MypagesController')
const exress = require('express');
const router = exress.Router();

router.patch('/update',update)
router.post('/check',check)
router.get('/info',info)


module.exports = router