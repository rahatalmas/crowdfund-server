const router = require('express').Router();
const SignUpController = require('../controllers/UserControllers/SignUpController');
const LoginController = require('../controllers/UserControllers/LoginController');
const ProfileController = require('../controllers/UserControllers/ProfileController');
const ProfileEditController = require('../controllers/UserControllers/ProfileEditController');
const UserDeleteControlle = require('../controllers/UserControllers/UserDeleteController');
const GetUsers = require('../controllers/UserControllers/GetUsers');
const MyCards = require('../controllers/UserControllers/MyCards');

//routes
router.get('/allusers',GetUsers);
router.post('/signup',SignUpController);
router.post('/login',LoginController);
router.get('/user/:id',ProfileController);
router.get('/mycards/:id',MyCards);
router.patch('/user/edit/:id',ProfileEditController);
router.delete('/user/delete/:id',UserDeleteControlle)

//export router
module.exports = router;