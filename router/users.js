import express, { Router } from 'express'

const router = express.Router();

const users = [
    {
      firstname: "John",
      lastname: "Doe",
      age: 25
    },
    {
      firstname: "Jane",
      lastname: "Smith",
      age: 30
    },
    {
      firstname: "Emily",
      lastname: "Johnson",
      age: 22
    }
];

router.get('/', (req,res) => {
  console.log(users)
  res.send(users)
})

router.post('/',(req,res) => {
  console.log('Port request reached')
  res.send('Port request reached');
})



export default router;