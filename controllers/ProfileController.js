const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const ProfileController =async (req,res)=>{
    const id = parseInt(req.params.id);
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
}

module.exports = ProfileController;
