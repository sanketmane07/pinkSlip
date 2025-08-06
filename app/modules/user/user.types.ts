export interface IUser {
    name: string;
    email: string;
    password: string;
    requests?: [{
        department: string,
        date: Date,
        submitted_by: string
        activity_details: string,
        description: string,
        slip_status: 'accepted' | 'rejected' | 'pending'
    }]
}


export interface IPinkSlip {
    _id?:string,
    department: string,
    date: Date,
    submitted_by: string
    activity_details: string,
    description: string,
    requested_to:string,
    slip_status: 'accepted' | 'rejected' | 'pending'
}

export interface IUserId {
    id: string;
}