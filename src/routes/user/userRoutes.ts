import { Router } from "express";
import { Request, Response } from "express";
import { addUserController } from "../../useCases/user/addUser";
const userRoutes = Router();

userRoutes.post("/user", async (req:Request, res:Response)=>{
    
    return await addUserController.handle(req, res);
});

export { userRoutes }