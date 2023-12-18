const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const UserDeleteControlle = async (req,res)=>{
    let id = req.params.id;
    id = parseInt(id);
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
}

module.exports = UserDeleteControlle;