var express = require('express'),
		router = express.Router(),
		Link = require('../../models/link');

/*
	{
	  "name": "my name",
	  "url": "my url"
	}
*/

router.get('/', function (req, res, next) {
	req.model = Link;
	next();
}, require('./list'));

router.post('/', function(req, res) {
	var params = req.body;
	Link.create(params, function(err, model) {
		if(err) {
			console.info(err);
			res.json({
				status: 'fail',
				msg: '创建失败！'
			});
		} else {
			res.json({
				status: 'success',
				msg: '创建成功！'
			});
		}
	});
});

router.get('/:id', function(req, res) {
	var id = req.params['id'];
	Link.findOne({ _id: id }, function(err, model) {
		if(err) {
			console.info(err);
			res.json({
				status: 'fail',
				msg: '查询失败！'
			});
		} else {
			res.json({
				status: 'success',
				msg: '查询成功！',
				data: model
			});
		}
	});
});

router.put('/:id', function(req, res) {
	var id = req.params['id'];
	var params = req.body;	
	var query = { _id: id };
	var options = { new: true };

	Link.findOneAndUpdate(query, params, options, function(err, model) {
		if(err) {
			console.info(err);
			res.json({
				status: 'fail',
				msg: '更新失败！'
			});
		} else {
			res.json({
				status: 'success',
				msg: '更新成功！'
			});
		}
	});
});

router.delete('/:id', function(req, res) {
	var id = req.params['id'];

	Link.remove({ _id: id }, function(err, model) {
		if(err) {
			console.info(err);
			res.json({
				status: 'fail',
				msg: '删除失败！'
			});
		} else {
			res.json({
				status: 'success',
				msg: '删除成功！'
			});
		}
	});
});

module.exports = router;
