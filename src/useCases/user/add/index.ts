import { UserDAO } from "../../../DAO/implementations/UserDAO";
import { AddUserController } from "./controller";
import { AddUserUseCase } from "./useCase";

let userDao = new UserDAO();
let addUserUseCase = new AddUserUseCase(userDao);
let addUserController =  new AddUserController(addUserUseCase);

export { addUserController, addUserUseCase};