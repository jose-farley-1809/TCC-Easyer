import { ResponseImplementation } from "../../../utils/ResponseImplementation";
import { AddUserUseCase } from "./useCase";
import { Request, Response } from "express";

export class AddUserController{
    constructor(private useCase:AddUserUseCase){}

    async handle(req:Request, res:Response){
        if(!req.body) return res.status(400).json(new ResponseImplementation("Your request hasn't body", true))
        let result = await this.useCase.execute(req.body)
        if(result.has_error) return res.status(400).json(result)
        return res.status(200).json(result)
    }
}