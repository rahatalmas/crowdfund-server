const router = require('express').Router();
const SignUpController = require('../controllers/SignUpController');
const LoginController = require('../controllers/LoginController');
const ProfileController = require('../controllers/ProfileController');
const ProfileEditController = require('../controllers/ProfileEditController');
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

router.post('/signup',SignUpController);
router.post('/login',LoginController);
router.get('/user/:id',ProfileController);
router.patch('/user/edit/:id',ProfileEditController);
router.delete('/user/delete/:id',async (req,res)=>{
    const id = req.params.id;
    try{
        const du = prisma.userData.delete({
            where:{
                id:id
            }
        })
        res.send('user deleted...')
    }
    catch(err){
        if(err){
            res.send(err.message);
        }
    }
})
module.exports = router;