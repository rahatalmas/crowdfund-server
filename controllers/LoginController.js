const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const bcrypt = require('bcrypt');

const LoginController = async (req, res) => {
    const { email,password } = req.body;
    const userdata = await prisma.userData.findUnique({
        where: {
          email: email,
        },
      })
    if(userdata){
        res.send(userdata)
    }else{
        res.json({"message":"no user found.."})
    }
  }

  module.exports = LoginController;