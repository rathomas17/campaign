Router.route('/home');

Router.route('/index');


Router.route('/', function () {
  this.render('home');
});
