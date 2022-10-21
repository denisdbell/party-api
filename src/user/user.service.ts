import {Injectable} from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm';
import { CreateuserDto } from './dto/createUser.dto';
import { UserEntity } from './user.entity';



@Injectable()
export class UserService {
    
    constructor(@InjectRepository(UserEntity) private readonly userRepository) {}
   
    async findAll():Promise<UserEntity[]> {
        return await this.userRepository.find();
    }

    findById(id: number) {
        //return this.users[id];
    }


    async createUser(createUserDto: CreateuserDto) {
        const newUser = new UserEntity();
        Object.assign(newUser, createUserDto);
        return await this.userRepository.save(newUser);
    }


    updateUser(id: number, updatedUser: UserEntity) {
       // return this.users[id];;
    }


    removeUser(id: number) {
       // return this.users[id];;
    }

}