require('dotenv').config()
const express = require('express')
const app = express();
const db = require('./db');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const PORT = process.env.PORT || 3000;

app.get('/', function (req, res) {
    res.send('welcome to world best hotel ... which type of food would you love to served by us')
})
console.log(process.env.KEY);
// app.post('/person', async (req, res) =>{
//     try{
//      const data = req.body
//      const newperson = new person(data);
//      const response = await newperson.save();
//      console.log('data saved');
//      res.status(200).json(response);
//     }catch(err){
//      console.log(err);
//      res.status(500).json(error,'internal server error');
//     }
//  })
// app.get('/person', async (req, res) =>{
//    try{
//     const data = await person.find();
//     console.log('data fetched');
//     res.status(200).json(data);
//    }catch(err){
//     console.log(err);
//     res.status(500).json(error,'internal server error');
//    }
// })
// app.get('/person/:workType', async(req, res) => {
//     try{
//         const workType = req.params.workType;
//         if (workType == 'chef' || workType == 'manager' || workType == 'waiter' ){
//             const response = await person.find({work: workType})
//             console.log('response fetched');
//             res.status(200).json(response);
//         }else{
//             res.status(404).json({error: 'invalid work Type'});
//         }
//     }catch(err){
//             console.log(err);
//             res.status(500).json(error,'internal server error');
//         }

// })
const personRoutes = require('./routes/personRoutes');
app.use('/person',personRoutes);

app.listen(PORT, ()=>{
    console.log('listening on port 3000');
})