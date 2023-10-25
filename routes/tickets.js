var express = require('express');
var router = express.Router();
var ticketsCtrl = require('../controllers/tickets');

// GET /tickets/new
router.get('/tickets/new', ticketsCtrl.new);

module.exports = router;