import { Router } from "express";
import { Request, Response } from "express";
import { addUserController } from "../../useCases/user/add";
import { loginUserController } from "../../useCases/user/login";
const userRoutes = Router();

userRoutes.post("/user", async (req:Request, res:Response)=>{
    
    return await addUserController.handle(req, res);
});

userRoutes.post('/user/login', async (req, res)=>{
    console.log(req.body)
    return await loginUserController.handle(req, res);
})

export { userRoutes }