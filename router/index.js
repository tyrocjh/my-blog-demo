module.exports = function (app) {
	app.use('/admin/api/blog_info', require('./routes/admin/api/blogInfo'));
  app.use('/admin/api/article', require('./routes/admin/api/article'));
  app.use('/admin/api/article_tag', require('./routes/admin/api/articleTag'));
  app.use('/admin/api/upload', require('./routes/admin/api/upload'));
};
