import { LoginUserUsecase } from "./useCase";
import { Request, Response } from "express";
export class LoginUserController{
    constructor(private useCase:LoginUserUsecase){}

    async handle(request:Request, response:Response){
        response.status(200).json(await this.useCase.execute(request.body));
    }
}