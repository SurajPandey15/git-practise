import { Response } from "express"
export type TUser = {
    id:string,
    name:string,
    user_type:'oshc'| 'agency',
    email:string,
}
export type Tsession_user={
    id:string,
    res:Response,
}
export type TNotification={
    created_by:'oshc'| 'agency',
    content:string,
    type:'purchase'|'agency_registered',
    to_agency_id:string,
}

