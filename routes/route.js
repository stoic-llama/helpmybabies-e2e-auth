const router = require('express').Router();
const { endToEndWrapper } = require('../controller/puppeteer_e2e_auth.js');
const { healthcheck } = require('../controller/healthcheckController.js')

/** HTTP Reqeust */
router.get('/healthcheck', healthcheck)
router.get('/e2e', endToEndWrapper)


module.exports = router