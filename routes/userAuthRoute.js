const router = require('express').Router();
const SignUpController = require('../controllers/SignUpController');
const LoginController = require('../controllers/LoginController');
const ProfileController = require('../controllers/ProfileController');

router.post('/signup',SignUpController);
router.post('/login',LoginController);
router.get('/user/:id',ProfileController);

module.exports = router;