var express = require('express');
var router = express.Router();

var axios = require('axios');

/* GET home page. */
router.get('/', function(req, res, next) {
    axios.get('http://localhost:15015/contracts')
        .then(response => {
            res.render('index', {contracts: response.data})
        })
        .catch(error => {
            res.render('error', {error: error})
        });
});

router.get('/inst/:id', function(req, res, next) {
    axios.get('http://localhost:15015/contracts?inst=' + req.params.id)
        .then(response => {
            res.render('inst', {contracts: response.data})
        }).catch(error => {
            res.render('error', {error: error})
        });
});

router.get('/:id', function(req, res, next) {
    axios.get('http://localhost:15015/contracts/' + req.params.id)
        .then(response => {
            res.render('contract', {contract: response.data})
        }).catch(error => {
            res.render('error', {error: error})
        });
});

module.exports = router;
