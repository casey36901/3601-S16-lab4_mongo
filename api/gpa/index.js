/**
 * Created by casey369 on 2/15/16.
 */
'use strict';

// Defining the "gpa" API module
// =======================================
//Comment

var express = require('express');
var controller = require('./apigpa.controller.js');

var router = express.Router();

router.get('/', controller.index);
router.post('/', controller.create);
router.delete('/:gpa_id', controller.destroy);

module.exports = router;
