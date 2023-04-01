import { IUserDAO } from "../../../DAO/interfaces/IUserDAO";
import { IUserAddDTO } from "./dto";

export class AddUserUseCase{
    constructor(private useCase:IUserDAO){}

    async execute(data:IUserAddDTO){
        return await this.useCase.save(data);
    }
}