var homeRouter = require("./home");
var loginRouter = require("./login");
var blogRouter = require("./blog");

module.exports = function(app) {
  app.use('/', homeRouter);
  app.use('/login', loginRouter);
  app.use("/blog", blogRouter);
  app.get('*', (req, res) => {
    res.render('404.ejs');
  });
};