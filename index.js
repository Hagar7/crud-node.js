import express from 'express';
import { connectionDB } from './DB/connection.js';
import * as allRouter from './Modules/index.routes.js'
import cors from 'cors'
const app =express();
const port = 5000;



app.use(express.json());
app.use(cors())
connectionDB()
app.use('/user',allRouter.userRouter)
app.use('/product',allRouter.productRouter)

app.listen(port,()=>{
    console.log("server is running ...................");
})