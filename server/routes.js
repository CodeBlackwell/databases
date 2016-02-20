var controllers = require('./controllers');
var router = require('express').Router();


// console.log('Router', router);

// for (var route in controllers) {
//   router.route("/" + route)
//     .get(controllers[route].get)
//     .post(controllers[route].post);
// }
// router.route('/classes/users')
// .post(function (req, res, next){
//   console.log("**********************");
//   console.log("this is within the post request router");
//   next(new Error('Error within the post router'))
// })


// router.route('/users/:user_id')
// .all(function(req, res, next) {
//   // runs for all HTTP verbs first
//   // think of it as route specific middleware!
//   next();
// })
// .get(function(req, res, next) {
//   res.json(req.user);
// })
// .put(function(req, res, next) {
//   // just an example of maybe updating the user
//   req.user.name = req.params.name;
//   // save user ... etc
//   res.json(req.user);
// })
// .post(function(req, res, next) {
//   next(new Error('not implemented'));
// })
// .delete(function(req, res, next) {
//   next(new Error('not implemented'));
// });
module.exports = router;

