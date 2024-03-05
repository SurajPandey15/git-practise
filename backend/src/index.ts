import express from 'express';
import { TNotification, Tsession_user } from './types';
const app=express();

const port = 4000;



export let session_user :Tsession_user[]=[]
export let notification:TNotification[]=[];

app.listen(port,()=>{
    console.log('Server is running on port 4000')
})