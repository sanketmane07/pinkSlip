import { NextFunction, Request, response, Response, Router } from "express";
import { permit, verifyToken } from "../../utility/authorize";
import { ResponseHandler } from "../../utility/response-handler";
import { ROLES } from "../roles/roles.constants";
import authService from "./auth.service";
// import authService from "./auth.service";
import { createUserValidator, loginValidator } from "./auth.validators";

export const authRouter = Router();



authRouter.post("/",async (req:Request,res:Response,next:NextFunction)=>{
    try {
        const response = await authService.login(req.body); 
        res.send(new ResponseHandler(response))
    } catch (error) {
       next(error);
    }
});

authRouter.post("/create-user",async (req:Request,res:Response,next:NextFunction)=>{
try {
    const response = await authService.createUser(req.body);
    res.send(new ResponseHandler(response));
} catch (error) {
    next(error);
}
})