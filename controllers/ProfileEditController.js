const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const ProfileEditController = async (req, res) => {
    const  id  = parseInt(req.params.id);
    const { email,username,education,occupation,number,cardnumber,bio} = req.body;
    try{
      const updateUser = await prisma.userData.update({
        where: {
          id:id 
        },
        data: req.body
      })
      res.send(updateUser);
    }catch(err){
      if(err){
        res.json(err.message)
      }
    }
  }

  module.exports = ProfileEditController;