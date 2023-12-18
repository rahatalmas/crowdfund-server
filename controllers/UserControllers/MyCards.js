const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const MyCards = async(req,res)=>{
    const id = parseInt(req.params.id);
    try{
      const mycards = await prisma.businessCard.findMany({
        where: {
          userId: id,
        },
      })
    if(mycards){
        res.send(mycards)
    }else{
        res.json({"message":"no user found.."})
    }
    }catch(err){
      if(err){
        res.send(err.message)
      }
    }
};

module.exports = MyCards;