import { NextFunction, Request, Response, Router } from "express";
import { ResponseHandler } from "../../utility/response-handler";
import userService from "./user.service";



export const userRouter = Router();


userRouter.get("/get-all-users",async(req:Request,res:Response,next:NextFunction)=>{
    try {
        const response = await userService.getAllUsers();
        res.send(new ResponseHandler(response));
    } catch (error) {
        next(error);
    }
})
userRouter.post('/generate-pink-slip',async(req:Request,res:Response,next:NextFunction)=>{
    try {
        const response = await userService.generatePinkSlip(req.body,res.locals.email);
        res.send(new ResponseHandler(response));
    } catch (error) {
        next(error);
    }
});

userRouter.get("/get-all-pending-slips",async(req:Request,res:Response,next:NextFunction)=>{
    try {
        const response = await userService.getAllPendingSlips(res.locals.id);
        res.send(new ResponseHandler(response));
    } catch (error) {
        next(error);
    }
});

userRouter.put("/accept-slip-request/:slipId",async (req:Request,res:Response,next:NextFunction)=>{
    try {
        const response  = await userService.updateSlipStatus(req.params.slipId,res.locals.id,req.body.requestType)
        res.send(new ResponseHandler(response));
    } catch (error) {
        next(error);
    }
})


// userRouter.get('/', permit([ROLES.ADMIN]), async (req, res, next) => {
//     try {
//         const response = await userService.getAllUsers();
//         res.send(new ResponseHandler(response));
//     } catch (error) {
//         next(error);
//     }
// });


// userRouter.put('/:id', permit([ROLES.AGENT]), async (req, res, next) => {
//     try {
//         const response = await userService.updateUser(req.params.id, req.body);
//         res.send(new ResponseHandler(response));
//     } catch (error) {
//         next(error);
//     }
// });