import { v4 as uuidv4 } from 'uuid';


let users = [];

export const getUser =  (req,res) => {
  console.log(users)
  res.send(users)
}


export const createUser = (req,res) => {

  const user = req.body;
  const userWithId = {...user,id:uuidv4()};
  users.push(userWithId);
  console.log('Port request reached',
    users
  )
  res.send(users
  );
}



export const getUserWithId = (req,res) => {
  const {id} = req.params ;
  const foundUser = users.find((user) => user.id === id)
  res.send(foundUser)
}



export const deleteUser = (req,res) => {
  const {id} = req.params ;
  users = users.filter((user)=>user.id !== id)
  res.send('deleted user')
}


export const updateUser = (req,res) => {
  const {id} = req.params ;
  let user = users.find((user) => user.id === id)

  const {firstname,lastname,age} = req.body;

  if(firstname){
    user.firstname = firstname
  }
  if(lastname){
    user.lastname = lastname
  }
  if(age){
    user.age = age
  }

  res.send("User details updated");
}


