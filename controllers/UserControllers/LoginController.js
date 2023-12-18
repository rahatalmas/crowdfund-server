const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const bcrypt = require('bcrypt');

const LoginController = async (req, res) => {
    try{
      const { email,password } = req.body;
    const userdata = await prisma.userData.findUnique({
        where: {
          email: email,
        },
      })
      if(userdata){
          if(userdata.password == password){
            res.send(userdata)
          }else{
            res.send('incorrect password')
          }
      }else{
          res.json({"message":"no user found.."})
      }
    }
    catch(err){
      if(err){
        res.send(err.message)
      }
    }
  }

  module.exports = LoginController;