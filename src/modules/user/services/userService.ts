import { User } from "../models/userModel";
import { IUserRepo } from "../repos/userRepoInterface";
import { IUserService } from "./userServiceInterface";

//regra de negocio 
export class UserService implements IUserService {
    constructor(private userRepo:IUserRepo){}

    async getAll():Promise<User[]>{
        const users = await this.userRepo.getAll() 

        if(!users || users.length === 0 ){
            throw new Error('User not found')
        
        }
        return users 

    }

    async  getAllDelete(): Promise<User[]>{ 
        const users = await this.userRepo.getAllDeleted() 

        if(!users || users.length === 0) throw new Error('User not found')
                
        return users
    }
    async getUserById(id:string):Promise<User>{
        const user = await this.userRepo.getUserById(id) 

        if(!user) throw new Error('User not found')

        return user
    }

    async softDelete(id:string): Promise<User>{
        const user = await this.userRepo.getUserById(id)

        if(!user) throw new Error('User not found')

        const deleteUser = await this.userRepo.softDelete(id)

        if(!deleteUser) throw new Error('User not found')

        return deleteUser
    }

    async restoreUser(id:string): Promise<User>{
        const userInactive = await this.userRepo.getUserById(id)

        if(!userInactive) throw new Error('User not found')

        const user = await this.userRepo.restoreUser(id)

        if(!user) throw new Error('User not found')

        return user
    }

    async getUserByEmail(email:string): Promise<User>{
        const userEmail = await this.userRepo.getUserByEmail(email)

        if(!userEmail) throw new Error('Email not found')

        return userEmail

    }

}