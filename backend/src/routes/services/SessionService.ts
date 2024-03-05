import { Tsession_user } from "../../types";

class SessionService{
     session_user:Tsession_user[] = []



     addSessionUser (session_user:Tsession_user){

        this.session_user.push(session_user)

     }
     removeSessionUser (user_id:string){

       this.session_user =  this.session_user.filter((user)=>user.id !==user_id)

     }

     getSessionUsers ():Tsession_user[]{
       return this.session_user;

     }


}
export const  SessionServiceClass  = new SessionService()

