const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const ProfileController =async (req,res)=>{
    const id = parseInt(req.params.id);
    try{
      const userdata = await prisma.userData.findUnique({
        where: {
          id: id,
        },
      })
    if(userdata){
        res.send(userdata)
    }else{
        res.json({"message":"no user found.."})
    }
    }catch(err){
      if(err){
        res.send(err.message)
      }
    }
}

module.exports = ProfileController;
