import { model } from "mongoose";
import { BaseSchema } from "../../utility/base.schema"
import { IUser } from "./user.types";

const userDetailsSchema = new BaseSchema({
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    requests: {
        type: [{
            department: {
                type: String,
            },
            date: {
                type: Date,
                default:() => Date.now() + 7*24*60*60*1000
            },
            submitted_by: {
                type: String
            },
            activity_details: {
                type: String
            },
            description: {
                type: String
            },
            slip_status: {
                type: String,
                enum: ['accepted', 'rejected', 'pending'],
                default: 'pending'
            }
        }],
    }


});


type IUserDocument = Document & IUser

export const userModel = model<IUserDocument>("userDetails", userDetailsSchema);



