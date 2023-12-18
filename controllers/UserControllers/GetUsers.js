const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const GetUsers = async (req,res)=>{
   try{
     const users = await prisma.userData.findMany();
      res.json(users);
   }
   catch(err){
    res.json({"message":"something went wrong"});
    console.log(err.message);
   }
}

module.exports = GetUsers;