import { IUserDAO } from "../../../DAO/interfaces/IUserDAO";
import { LoginUserDTO } from "./dto";

export class LoginUserUsecase {
    constructor(private userDao:IUserDAO){}

    async execute(data:LoginUserDTO){
        return await this.userDao.login(data);
    }
}