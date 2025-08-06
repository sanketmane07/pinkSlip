
import { createToken } from "../../utility/authorize";
import { comparePassword } from "../../utility/password";
import { ILogin } from "../auth/auth.types";
import { userConstants } from "./user.constants";
import userRepo from "./user.repo";
import { IPinkSlip, IUser } from "./user.types";






const login = async (userDetails: ILogin) => {
    try {
        const user: any = await userRepo.findOne(userDetails.email);
        console.log(user);
        const isMatched = comparePassword(userDetails.password, user.password)
        if (user && isMatched) {
            const accessToken = createToken({ id: user._id, email: user.email });
            return { accessToken: accessToken };
        }
        throw userConstants.INVALID_DETAILS
    } catch (error) {
        throw userConstants.FAILED
    }
}


const createUser = async (userDetails: IUser) => {
    try {
        await userRepo.create(userDetails as IUser);
        return userConstants.USER_ADDED
    } catch (error) {
        throw error
    }
}


const getAllUsers = async () => {
    try {
        return await userRepo.getAll();
    } catch (error) {
        throw userConstants.FAILED
    }
}


const generatePinkSlip = async (slip: IPinkSlip, submitted_by: string) => {
    try {
        await userRepo.pushSlip(slip, submitted_by);
        return userConstants.SLIP_GENERATED
    } catch (error) {
        throw userConstants.FAILED
    }
}

const getAllPendingSlips = async (userId: string) => {
    try {
        const requests: any = await userRepo.getPendingSlips(userId);
        const pendingRequests = requests.requests.filter((data: any) => data.slip_status === 'pending');
        return pendingRequests.length === 0 ? userConstants.NO_PENDING_SLIPS : pendingRequests;
    } catch (error) {
        throw userConstants.FAILED
    }
}

const updateSlipStatus = async (slipId:string,userId:string,request:string)=>{
try {
   await userRepo.updateRequest(slipId,userId,request);
   return userConstants.SLIP_ACCEPTED
} catch (error) {
    console.log(error);
   throw userConstants.FAILED; 
}
}

export default { createUser, login, getAllUsers, generatePinkSlip, getAllPendingSlips,updateSlipStatus }