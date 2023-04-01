import { prisma } from "../../database";
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
    async login(data) {
   
    }
    
}