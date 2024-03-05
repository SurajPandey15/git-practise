import { Router } from "express";
import { notification, session_user } from "../index";
import {  TNotification, Tsession_user } from "../types";
import { SessionServiceClass } from "./services/SessionService";
import { NotificationServiceClass } from "./services/notificationService";
const router = Router();



router.get("/online_users",(req,res)=>{
  
})



router.post('/purchase',(req,res)=>{

  const new_notification:TNotification = req.body

  NotificationServiceClass.sendNewNotification(new_notification)

  res.status(201).json({message:"policy purchased successfully"})
  


});
router.post('/add_session_user',(req,res)=>{

  const user_id  = req.body.user_id;
  if(!user_id){
    res.status(403).json({message:"please provide user id"})
  }

     const headers = {
        'Content-Type': 'text/event-stream',
        'Connection': 'keep-alive',
        'Cache-Control': 'no-cache'
     };

      res.writeHead(200, headers);
    
      const data = `data: ${JSON.stringify({message:"you are adde in session . "})}\n\n`;
    
      res.write(data);
    
    
      const newSessionUser:Tsession_user = {
        res,
         id: user_id
      };

      SessionServiceClass.addSessionUser(newSessionUser)
    
      
    
      req.on('close', () => {
        console.log(`${session_user} Connection closed`);
        SessionServiceClass.removeSessionUser(user_id)

      });

});


export default Router;


//   add_session_user