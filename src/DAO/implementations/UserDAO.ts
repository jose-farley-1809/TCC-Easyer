import { prisma } from "../../database";
import { LoginUserDTO } from "../../useCases/user/login/dto";
import { ResponseImplementation } from "../../utils/ResponseImplementation";
import { IUserDAO } from "../interfaces/IUserDAO";
import {hash, compare} from 'bcrypt';

export class UserDAO implements IUserDAO {
    async save(data) {
        try {
            await prisma.user.create({
                data:{
                    name:data.name,
                    email:data.email,
                    password: await hash(data.password, 12),
                    course: data.course
                }
            })
            return new ResponseImplementation("user created successfully", false, null)
        } catch (error) {
            console.log(error.message)
            return new ResponseImplementation("There was an error saving the user", true, null)
        }
    }
    remove() {
        throw new Error("Method not implemented.");
    }
    fetch() {
        throw new Error("Method not implemented.");
    }
    async login(data:LoginUserDTO) {
        try {
            let user = await prisma.user.findUnique({where:{email:data.email}})
            if(!user) return new ResponseImplementation("User or password invalid", true)
            let passwordIsvalid = await compare(data.password, user.password)
            console.log(passwordIsvalid)
            if(passwordIsvalid == true){
                return new ResponseImplementation('User is logged', false)
            }else{
                return new ResponseImplementation("User or password invalid", true)
            }
        } catch (error) {
            return new ResponseImplementation("There was an error on login", true, null)

        }  
    }
    
}