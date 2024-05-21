const Router = require('express')
const controller = require('./controller')
const router = Router()

router.get(('/getPoint'), controller.getPoint)
router.get(('/getSimpang'), controller.getSimpang)
router.get(('/getClearArea'), controller.getClearArea)
router.get(('/getZonaKhusus'), controller.getZonaKhusus)
router.get(('/test'), controller.test)

module.exports = router