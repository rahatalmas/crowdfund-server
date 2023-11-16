const router = require('express').Router();
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

router.get('/invests',async (req,res)=>{
    const cards = await prisma.businessCard.findMany();
    res.send(cards);
})

router.get('/invests/:cardid',async (req,res)=>{
    const cardid = parseInt(req.params.cardid);
    try{
        const card = await prisma.businessCard.findUnique({
            where: {
              id: cardid
            },
          })
          res.send(card)
    }catch(err){
        res.send(err.message)
    }
})

router.post('/postcard/',async (req,res)=>{
    const {title,headline,reason,pitch,valuation,raised,minInvest,userId} = req.body;
    try{
        const card = await prisma.businessCard.create({
            data:{title,headline,reason,pitch,valuation,raised,minInvest,userId}
          })
        res.send('created new post '+card.title);
    }catch(err){
        res.send("something went wrong...")
    }
})


router.patch('/updatecard/:cardid',async (req,res)=>{
    const cid = parseInt(req.params.cardid);
    try{
        const updateCard = await prisma.businessCard.update({
          where: {
            id:cid
          },
          data: req.body,
        })
        res.send(updateCard);
      }catch(err){
        if(err){
          res.json(err.message)
        }
      }
})


router.delete('/deletecard/:cardid',async (req,res)=>{
    const id = parseInt(req.params.cardid);
    try{
        const updateCard = await prisma.businessCard.delete({
          where: {
             id:id
           }
         }
        )
        res.send("card deleted...")
    }
    catch(err){
      if(err){
        res.send(err.message);
      }
    }
})


module.exports = router;