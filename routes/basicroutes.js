// const express=require('express');
// const router=express.Router();
// router.use(express.json());
// router.use(express.urlencoded({extended:true}));

// function routes(data) {
    
    
// }
// router.get('/',(req,res) =>{
//     res.send('Welcome to Hospital app');
// })

// router.get('/',(req,res) =>{
//     const jsonData = require('../hospital.json')
//     res.json(jsonData);
// })



// //GET
// router.get('/hospital',(req,res) =>{
//     res.render("hospital",{
//         title:'HospitalApp',
//         jsonData
//     })
// })





// module.exports = router

// const express = require('express');
// const router = express.Router();
// const path = require('path');
// const fs = require('fs');
// const filePath = path.join(__dirname, '/hospital.json');

// // Read hospital data from JSON file
// const readHospitalData = () => {
//   const data = fs.readFileSync(filePath, 'utf8');
//   return JSON.parse(data);
// };

// // Write hospital data back to JSON file
// const writeHospitalData = (hospitalData) => {
//   fs.writeFileSync(filePath, JSON.stringify(hospitalData, null, 2), 'utf8');
// };

// // GET operation
// router.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, "/hospital.json"));
// });

// // POST operation
// router.post('/add', (req, res) => {
//   const newHospital = req.body;
//  let hospitalData = readHospitalData();
//   hospitalData.push(newHospital);
//   writeHospitalData(hospitalData);
//   res.send('Post successful');
// });

// // PUT operation
// router.put('/edit/:id', (req, res) => {
//   const hospitalId = parseInt((req.params.id));
//   const updatedHospitalData = req.body;
//   let hospitalData = readHospitalData();
//   const hospitalIndex = hospitalData.findIndex(hospital => (hospital.id) === hospitalId);
//   if (hospitalIndex === -1) {
//     return res.status(404).send('Hospital not found');
//   }
//   hospitalData[hospitalIndex] = { ...hospitalData[hospitalIndex], ...updatedHospitalData };
//   writeHospitalData(hospitalData);
//   res.send('Hospital data updated successfully');
// });

// // DELETE operation
// router.delete('/delete/:id', (req, res) => {
//   const hospitalId = parseInt((req.params.id));
//   let hospitalData = readHospitalData();
//   const hospitalIndex = hospitalData.findIndex(hospital => (hospital.id) === hospitalId);
//   if (hospitalIndex === -1) {
//     return res.status(404).send('Hospital not found');
//   }
//   hospitalData.splice(hospitalIndex, 1);
//   writeHospitalData(hospitalData);
//   res.status(200).send('Hospital deleted successfully');
// });

// // router.post('/add',(req,res)=>{
// //     const data=req.body;
// //     console.log(data);
// //      hospital.json.push(data);
// //      res.send('Post Successful')
// // })
// module.exports = router;


const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
const filePath = path.join(__dirname, 'hospital.json');

// Read hospital data from JSON file
const readHospitalData = () => {
  
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
  
  
};

// Write hospital data back to JSON file
const writeHospitalData = (hospitalData) => {

    fs.writeFileSync(filePath, JSON.stringify(hospitalData, null, 2), 'utf8');
  
    
  
};

// GET operation
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "hospital.json"));
});

// POST operation
router.post('/add', (req, res) => {
    res.send('Post successful');
  const newHospital = req.body;
  let hospitalData = readHospitalData();
  hospitalData.push(newHospital);
  writeHospitalData(hospitalData);
 
});

// PUT operation
router.put('/edit/:id', (req, res) => {
    res.send('Hospital data updated successfully');
  const hospitalId = parseInt(req.params.id);
  const updatedHospitalData = req.body;
  let hospitalData = readHospitalData();
 const hospitalIndex = hospitalData.findIndex(hospital => hospital.id=== hospitalId);
  if (hospitalIndex === -1) {
    return res.status(404).send('Hospital not found');
  }
  hospitalData[hospitalIndex] = { ...hospitalData[hospitalIndex], ...updatedHospitalData };
  writeHospitalData(hospitalData);
 
});

// DELETE operation
router.delete('/delete', (req, res) => {
   
  const hospitalId = parseInt(req.params.id);
  let hospitalData = readHospitalData();
   const hospitalIndex = hospitalData.findIndex(hospital => hospital.id === hospitalId);
  if (hospitalIndex === -1) {
   //return res.status(404).send('Hospital not found');
  }
  hospitalData.splice(hospitalIndex, 1);
  writeHospitalData(hospitalData);
  res.send('Hospital deleted successfully');
 
}
);


module.exports = router;


