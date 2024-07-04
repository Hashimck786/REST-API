import express from 'express';
import bodyParser from 'body-parser';

import userRoutes from './router/users.js'


const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/users',userRoutes)

app.get('/',(req,res) => {
  console.log('Test')
  res.send('Hello from homepage')
})





app.listen(PORT, () => console.log(`server running on port ${5000}`))