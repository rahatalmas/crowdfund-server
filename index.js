const express = require('express');
const PORT = 5000;
const app = express();
const cors = require('cors');
const path = require('path')
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const multer = require('multer');

const userRoutes = require('./routes/userAuthRoute');
const investRoutes = require('./routes/investRoutes');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/static', express.static(path.join(__dirname, 'public')))

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

app.post('/fileupload', upload.single('file'), (req, res) => {
  res.send('File uploaded successfully!');
});

app.get("/",async (req,res)=>{
  res.send("hello world")
})


app.use('/',userRoutes);
app.use('/',investRoutes);

app.listen(PORT,()=>{
  console.log(`server is running on port ${PORT}`);
})