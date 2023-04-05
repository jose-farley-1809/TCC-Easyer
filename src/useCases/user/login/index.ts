import { UserDAO } from "../../../DAO/implementations/UserDAO";
import { LoginUserController } from "./controller";
import { LoginUserUsecase } from "./useCase";

let userDao = new UserDAO();

let loginUserUseCase = new LoginUserUsecase(userDao);
let loginUserController = new LoginUserController(loginUserUseCase);

export {loginUserController, loginUserUseCase}