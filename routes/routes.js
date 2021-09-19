var homeRouter = require("./home");
var loginRouter = require("./login");
var blogRouter = require("./blog");
var uploadRouter = require("./upload");
var contactRouter = require("./contact");
var aboutRouter = require("./about");

module.exports = function(app) {
  app.use('/', homeRouter);
  app.use('/login', loginRouter);
  app.use('/blog', blogRouter);
  app.use('/upload', uploadRouter);
  app.use('/contact', contactRouter);
  app.use('/about', aboutRouter);
  app.get('*', (req, res) => {
    res.render('404.ejs');
  });
};