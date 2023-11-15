const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const bcrypt = require('bcrypt');

const SignUpController = async (req, res) => {
    const { email,username,education,occupation,number,cardnumber,bio,password } = req.body;
    const cdata = await prisma.userData.findUnique({
        where: {
          email: email,
        },
        select: {
          email: true,
        },
      })
    if(cdata){
        res.json({"message":"email already exist"})
    }
    else{
        try{
            const user = await prisma.userData.create({
                data: {
                  email,username,education,occupation,number,cardnumber,bio,password
                },
            
              })
              res.json({"message":"account created successfully...",user})
        }catch(err){
              if(err){
                res.json({"message":"something went wrong..."})
              }
        }
    }
  }

  module.exports = SignUpController;