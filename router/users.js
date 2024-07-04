import express, { Router } from 'express'
import { v4 as uuidv4 } from 'uuid';
const router = express.Router();

const users = [
    
];

router.get('/', (req,res) => {
  console.log(users)
  res.send(users)
})

router.post('/',(req,res) => {

  const user = req.body;
  const userWithId = {...user,id:uuidv4()};
  users.push(userWithId);
  console.log('Port request reached',
    users
  )
  res.send(users
  );
})


router.get('/:id', (req,res) => {
  const {id} = req.params ;
  const foundUser = users.find((user) => user.id === id)
  res.send(foundUser)
})



export default router;