const express = require('express');
const PORT = 5000;
const app = express();
const cors = require('cors');
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const userRoutes = require('./routes/userAuthRoute');
const investRoutes = require('./routes/investRoutes');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get("/",async (req,res)=>{
  res.send("hello world")
})

app.use('/',userRoutes);
app.use('/',investRoutes);

app.listen(PORT,()=>{
  console.log(`server is running on port ${PORT}`);
})