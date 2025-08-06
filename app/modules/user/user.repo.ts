import { userModel } from "./user.schema";
import { IPinkSlip, IUser } from "./user.types";


const create = (userdetails:IUser)=> userModel.create({...userdetails});
const findOne = async (email:string)=> userModel.findOne({email:email})
const getAll = async ()=> userModel.find().select('email');
const pushSlip = async (slip:IPinkSlip,submitted_by:string)=> userModel.findOneAndUpdate({email:slip.requested_to},{$push:{requests:{department:slip.department,submitted_by:submitted_by,activity_details:slip.activity_details,description:slip.description}}});
const getPendingSlips = async (userId:string)=> userModel.findOne({_id:userId}).select("requests")
const updateRequest = async (slipId:string,userId:string,request:string)=> userModel.findOneAndUpdate({_id:userId,'requests._id':slipId},{'requests.$.slip_status':request})

export default {create,findOne,getAll,pushSlip,getPendingSlips,updateRequest}