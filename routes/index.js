const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
	console.log(req.query)
	const search = req.query && req.query.search ? req.query.search : null;
	const filters = req.query && req.query.filters ? req.query.filters : null;

	global.db.collection('movie').findOne(function (err, data) {
		console.log("ata is the :::")
		console.log(data);
	})
	//console.log(global.db.getCollection())
	res.send('done')
});

router.get('/:id', function(req, res, next) {
	console.log("params are :::")
	console.log(req.params)
	res.send('done')
});

module.exports = router;
