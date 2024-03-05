import { TNotification } from "../../types";
import { SessionServiceClass } from "./SessionService";

class NotificationService{
    
    sendNewNotification(notification:TNotification){
        const session_users = SessionServiceClass.getSessionUsers();
        session_users.forEach(user=>{
            user.res.write(`data: ${JSON.stringify(notification)}\n\n`)
        })
    }


}
export const  NotificationServiceClass  = new NotificationService()

