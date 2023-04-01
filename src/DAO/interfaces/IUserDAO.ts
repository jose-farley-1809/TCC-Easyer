import { ResponseImplementation } from "../../utils/ResponseImplementation"

export interface IUserDAO {
    save(data):Promise<ResponseImplementation>
    remove()
    fetch()
    login(data)

}