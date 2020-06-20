const { Router } = require('express')
const router = Router();

const { renderIndex, renderPortafolio } = require('../controllers/index.controllers')

router.get('/',renderIndex);

router.get('/portafolio', renderPortafolio);

module.exports = router;